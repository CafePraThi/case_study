from dotenv import load_dotenv
import requests
import pandas as pd
import os

load_dotenv()

api_token = os.getenv('HUBSPOT_API_TOKEN')

headers = {
    'Authorization': f'Bearer {api_token}'
}

response = requests.get('https://api.hubapi.com/crm/v3/objects/products/', headers=headers)

if response.status_code == 200:
    data = response.json()

    results = data['results']
    products = [result['properties'] for result in results]

    df = pd.DataFrame(products)

    df['price'] = df['price'].astype(float)

    max_price_product = df[df['price'] == df['price'].max()]
    min_price_product = df[df['price'] == df['price'].min()]
    df2 = pd.concat([max_price_product, min_price_product])

    df.to_csv("all_products.csv", index=False)
    df2.to_csv("min_max_products.csv", index=False)
else:
    print(f"Erro na requisiçao {response.status_code}")