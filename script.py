import json
import tweepy
import time
f = open('jsondata.json')
data = json.load(f)
data.reverse()


def get_time():
    from datetime import datetime

    now = datetime.now()

    current_time = now.strftime("%H:%M:%S")
    return current_time


def tweet(data):
    consumer_key = "Enter here"
    consumer_secret = "Enter here"
    access_token = "Enter here"
    access_token_secret = "Enter here"

    # authentication of consumer key and secret
    auth = tweepy.OAuthHandler(consumer_key, consumer_secret)

    # authentication of access token and secret
    auth.set_access_token(access_token, access_token_secret)
    api = tweepy.API(auth)

    # update the status
    api.update_status(status=data)


    # time.sleep(600)
while True:
    if get_time() > "10:00:00" and get_time() < "10:05:00":
        print(data[0])
        tweet(data[0])
        break
    elif get_time() > "14:00:00" and get_time() < "14:05:00":
        print(data[1])
        tweet(data[1])
        break
    elif get_time() > "18:00:00" and get_time() < "18:05:00":
        print(data[2])
        tweet(data[2])
        break


print('Finished')
time.sleep(600)
