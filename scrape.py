# import pandas as pd
# import requests
# from bs4 import BeautifulSoup
# import os

# def fetch_main_image(url):
#     """
#     Fetch the main image URL from a given article URL.

#     Args:
#         url (str): The URL of the article.

#     Returns:
#         str: The URL of the main image, or None if not found.
#     """
#     try:
#         response = requests.get(url)
#         if response.status_code == 200:
#             soup = BeautifulSoup(response.content, 'html.parser')
#             # Look for meta tags specifying the main image
#             main_image = soup.find('meta', property='og:image') or soup.find('meta', attrs={'name': 'og:image'})
#             if main_image:
#                 return main_image['content']
#     except Exception as e:
#         print(f"Error fetching image from {url}: {e}")
#     return None

# def generate_html_news_previews(csv_file, output_html):
#     """
#     Generate an HTML file containing news previews based on data from a CSV file.

#     Args:
#         csv_file (str): Path to the CSV file containing news data.
#         output_html (str): Path to the output HTML file to be generated.
#     """
#     # Read CSV file into a DataFrame
#     df = pd.read_excel(csv_file,sheet_name="DRAGG Election ed.")
#     print(df.columns)
#     # Open output HTML file for writing
#     with open(output_html, 'w', encoding='utf-8') as html_file:
#         # Write HTML header
#         html_file.write('<html><head><title>News Previews</title></head><body>\n')

#         # Process each row in the DataFrame
#         for index, row in df.iterrows():
#             title = row['Title']
#             date = row['Date']
#             publication = row['Publication']
#             link = row['Link']
#             categories = row["Tag"]

#             # Fetch the main image URL from the article link
#             main_image_url = fetch_main_image(link)

#             # Generate HTML for the news preview
#             if main_image_url:
#                 print(title)

#                 html_file.write(f'<div style="margin-bottom: 20px;">\n')
#                 html_file.write(f'<a href="{link}" target="_blank"><img src="{main_image_url}" width="200" height="150" style="float: left; margin-right: 10px;"></a>\n')
#                 html_file.write(f'<div><h3><a href="{link}" target="_blank">{title}</a></h3>\n')
#                 html_file.write(f'<p><strong>Date:</strong> {date}</p>\n')
#                 html_file.write(f'<p><strong>Publication:</strong> {publication}</p></div>\n')
#                 html_file.write('</div>\n')

#         # Write HTML footer
#         html_file.write('</body></html>\n')

#     print(f"HTML file generated: {output_html}")

# # Example usage:
# if __name__ == "__main__":
#     input_csv_file = "election_media_press_cov.xlsx"
#     output_html_file = "news_previews.html"

#     generate_html_news_previews(input_csv_file, output_html_file)

from dataclasses import dataclass, field
from typing import List, Dict, Optional
import json
from pydantic import field_validator

@dataclass
class Image:
    link: str = ""
    src: str = ""
    alt: str = ""
    caption: str = ""

@dataclass
class Link:
    href: str = ""
    linkText: str = ""

@dataclass
class NewsArticle:
    id: str = ""
    categories: List[str] = None
    color: str = "green"
    faicon: str = 'vote-yea'
    datetime: str = None
    title: str = ""
    image: Image = None
    body: str = ""
    links: Optional[List[Link]] = None

    # @field_validator("datetime")
    # def parse_birthdate(cls, value):
    #     return datetime.strptime(
    #         value,
    #         '%d/%m/%Y'
    #     )

    def to_dict(self) -> dict:
        """Convert NewsArticle instance to a dictionary."""
        return {
            "id": self.id,
            "categories": self.categories,
            "color": self.color,
            "faicon": self.faicon,
            "datetime": self.datetime,
            "title": self.title,
            "image": {
                "link": self.image.link,
                "src": self.image.src,
                "alt": self.image.alt,
                "caption": self.image.caption
            },
            "body": self.body,
            "links": [
                {"href": link.href, "linkText": link.linkText}
                for link in self.links
            ]
        }

    @classmethod
    def from_dict(cls, data: dict) -> 'NewsArticle':
        """Create a NewsArticle instance from a dictionary."""
        return cls(
            id=data['id'],
            categories=data['categories'],
            color=data['color'],
            faicon=data['faicon'],
            datetime=data['datetime'],
            title=data['title'],
            image=Image(
                link=data['image']['link'],
                src=data['image']['src'],
                alt=data['image']['alt'],
                caption=data['image']['caption']
            ),
            body=data['body'],
            links=[Link(href=link['href'], linkText=link['linkText']) for link in data['links']]
        )

    def to_json(self) -> str:
        """Serialize the NewsArticle instance to a JSON string."""
        return json.dumps(self.to_dict(), indent=4)

    @classmethod
    def from_json(cls, json_str: str) -> 'NewsArticle':
        """Create a NewsArticle instance from a JSON string."""
        data = json.loads(json_str)
        return cls.from_dict(data)

@dataclass
class NewsTimeline:
    timeline: List[NewsArticle] = field(default_factory=list)

    def to_dict(self) -> dict:
        """Convert NewsTimeline instance to a dictionary."""
        return {
            "timeline": [article.to_dict() for article in self.timeline]
        }

    def to_json(self) -> str:
        """Serialize the NewsTimeline instance to a JSON string."""
        return json.dumps(self.to_dict(), indent=4)

    @classmethod
    def from_dict(cls, data: dict) -> 'NewsTimeline':
        """Create a NewsTimeline instance from a dictionary."""
        return cls(
            timeline=[NewsArticle.from_dict(article_data) for article_data in data['timeline']]
        )

    @classmethod
    def from_json(cls, json_str: str) -> 'NewsTimeline':
        """Create a NewsTimeline instance from a JSON string."""
        data = json.loads(json_str)
        return cls.from_dict(data)

import pandas as pd
import requests
from bs4 import BeautifulSoup
import os

def fetch_main_image(news_link):
    """
    Extract the main image URL from a news article link.

    Args:
        news_link (str): The URL of the news article.

    Returns:
        str: The URL of the main image, or None if not found.
    """
    try:
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
        response = requests.get(news_link, headers=headers)
        response.raise_for_status()  # Raise an exception for unsuccessful HTTP requests

        soup = BeautifulSoup(response.content, 'html.parser')
        og_image_tag = soup.find('meta', property='og:image')
        if og_image_tag:
            image_url = og_image_tag['content']
            return image_url

    except requests.RequestException as e:
        print(f"Error fetching content from {news_link}: {e}")

    return None
def fetch_article_subtitle(url):
    """
    Fetch the subtitle of a news article from a given URL.

    Args:
        url (str): The URL of the news article.

    Returns:
        str: The subtitle of the news article, or None if not found.
    """
    try:
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
        response = requests.get(url, headers=headers)
        response.raise_for_status()  # Raise an exception for unsuccessful HTTP requests

        soup = BeautifulSoup(response.content, 'html.parser')

        # Look for common subtitle elements
        subtitle = None

        # Check for <meta> tags that might contain subtitles
        meta_description = soup.find('meta', attrs={'name': 'description'})
        if meta_description and meta_description['content']:
            subtitle = meta_description['content']

        # Check for <h2> tags within the main content area
        main_content = soup.find('div', class_='article-body')  # Adjust class name as per the webpage structure
        if main_content:
            h2_tags = main_content.find_all('h2')
            if h2_tags:
                subtitle = h2_tags[0].get_text().strip()  # Get the text of the first <h2> tag

        # If no subtitle is found, try to extract introductory text from paragraphs
        if not subtitle:
            paragraphs = soup.find_all('p')
            if paragraphs:
                for p in paragraphs:
                    text = p.get_text().strip()
                    if len(text) > 30:  # Assuming the subtitle is a relatively short sentence
                        subtitle = text
                        break

        return subtitle

    except requests.RequestException as e:
        print(f"Error fetching subtitle from {url}: {e}")
        return None



def generate_html_news_previews(csv_file, output_html):
    """
    Generate an HTML file containing news previews based on data from a CSV file.

    Args:
        csv_file (str): Path to the CSV file containing news data.
        output_html (str): Path to the output HTML file to be generated.
    """
    # Read CSV file into a DataFrame
    df = pd.read_excel(csv_file,sheet_name="DRAGG Election ed.")[73:]
    # Open output HTML file for writing
    with open(output_html, 'w', encoding='utf-8') as html_file:
        # Write HTML header
        full_timeline = NewsTimeline()
        df['Date'] = [d.isoformat() for d in pd.to_datetime(df['Date'])]

        df['Tag'] = df['Tag'].fillna("")
        df['Tag'] = df['Tag'].str.split(',').tolist()
        df['Tag'] = df['Tag'].apply(lambda tags: [tag.upper().lstrip().rstrip() for tag in tags])
        # Process each row in the DataFrame
        i =1
        nrows = len(df)
        for index, row in df.iterrows():
            title = row['Title']
            date = row['Date']
            publication = row['Publication']
            link = row['Link']
            categories = row["Tag"]
            # Fetch the main image URL from the article link
            main_image_url = fetch_main_image(link)
            obj = NewsArticle()
            obj.id = title
            obj.categories =  categories
            obj.datetime = date
            obj.title = title
            subtitle = fetch_article_subtitle(link)
            if subtitle:
                obj.body = subtitle
            link_text = f"Link to {publication} article"
            obj.links = [Link(href=link, linkText=link_text)]
            # Generate HTML for the news preview
            if main_image_url:
                obj.image = Image(link=link,src=main_image_url,caption=title)
            else:
                obj.image = Image(link=link,src="",caption=title)
                # html_file.write(f'<div style="margin-bottom: 20px;">\n')
                # html_file.write(f'<a href="{link}" target="_blank"><img src="{main_image_url}" width="200" height="150" style="float: left; margin-right: 10px;"></a>\n')
                # html_file.write(f'<div><h3><a href="{link}" target="_blank">{title}</a></h3>\n')
                # html_file.write(f'<p><strong>Date:</strong> {date}</p>\n')
                # html_file.write(f'<p><strong>Publication:</strong> {publication}</p></div>\n')
                # html_file.write('</div>\n')
            full_timeline.timeline.append(obj)
            print(f"processed {i} of {nrows} rows")
            i+=1
        html_file.write(full_timeline.to_json())

        # Write HTML footer
        # html_file.write('</body></html>\n')

    print(f"JSON file generated: {output_html}")

# Example usage:
if __name__ == "__main__":
    input_csv_file = "ddag_may8.xlsx"
    json_file = "jsoncode.json"

    generate_html_news_previews(input_csv_file, json_file)

