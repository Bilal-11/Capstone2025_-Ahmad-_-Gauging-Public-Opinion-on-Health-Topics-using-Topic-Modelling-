from fastapi import FastAPI
import requests
import json

app = FastAPI()

COMMENTS_URL = 'http://www.nytimes.com/svc/community/V3/requestHandler?&cmd=GetCommentsAll&url='

# sample_article_url = 'https://www.nytimes.com/2025/07/28/opinion/doctors-government-agencies.html'

@app.get("/")
async def root():
    return {"message": "Enter the nyt article url as query parameter on the comments end-point: /comments/?url=..."}

@app.get("/comments")
async def get_comments(url:str):
    response = requests.get(COMMENTS_URL+url).json()
    raw_comments = []
    for comment in response['results']['comments']:
        raw_comments.append(comment['commentBody'])

    return enumerate(raw_comments)