# Mobkoi Technical Test

A technical test for Mobkoi.

## How to run
**Will need to create a `.env` file using the `.env.example` file as basis and include:**
- the API key 
- 3rd party AdServer API base URL

### App
From root folder `npm start`

### Server
From `server` folder `npm start`

## Tests

### App
From root folder `npm run test`

### Server
From `server` folder `npm run test`


---

# Full-Stack Test Task
Since we're an advertising company this task is about managing advertising campaigns (in a very simplified way).
Our goal is to see how you decide to implement the features, what design choices you made and why. Don't make it
complicated, but do be prepared to talk about what you did and how it might work in production. Consider things like
performance, resource usage, scalability and security. What could you improve upon (and how)?

But above all, first make it work. Then make it better.

# What you need to implement
There are 4 things you need to implement:

- A page to add new campaigns (with at least 1 unit test)
- A page to show the status of existing campaigns
- A /api/add-campaign endpoint (with at least 1 unit test) which your page above calls
- A /api/get-campaigns endpoint which your page above calls

So you need to do some front-end UI code, some back-end API code, and your API will in turn call our 
AdServer API as detailed below.

Implement it however you like, using whatever frameworks you like; single or multi-page. This is your chance to flex.

Note - we must be able to run this locally (ie. no Heroku etc)

# AdServer API
The 3rd party AdServer API is available at the following URL endpoint (this is the _prefix_):

    https://esobbc6302.execute-api.eu-west-1.amazonaws.com/default

You must authenticate by passing a unique API key which will have been given to you as part of the test.
To pass this to the API add a header *X-API-Key* with the value of the key you were given.

These are the API methods available:

### Get all campaigns
GET /campaigns/*

Returns an array of campaign details as JSON.

eg. GET https://esobbc6302.execute-api.eu-west-1.amazonaws.com/default/campaigns/*

### Get a specific campaign
GET /campaigns/{id} where id is the id of campaign (string)

Returns the campaign details as JSON.

### Add a campaign
POST x-www-form-urlencoded data to /campaigns with the following fields:

- id = a unique id for the campaign (string)
- startDate = start date for the campaign as UTC milliseconds (int)
- endDate = end date for the campaign as UTC milliseconds (int)
- targetImpressions = total number of ad impressions you want delivered (int)

Returns the id of the campaign as JSON if created successfully.

# Questions
Feel free to ask any questions you like. Collaboration is good.
