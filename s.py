import requests
from bs4 import BeautifulSoup

def extract_main_image_url(news_link):
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

# Example usage:
if __name__ == "__main__":
    news_link = "https://www.medianama.com/2024/02/223-karnataka-hc-notice-eci-plea-voter-manipulation/"
    main_image_url = extract_main_image_url(news_link)

    if main_image_url:
        print(f"Main Image URL: {main_image_url}")
    else:
        print("Main image URL not found.")
