# Chatroom App

## Design

- Single URL with a public chatrooom accessible to anyone
    - possibility for named chatrooms down the road
- Name is entered by user upon loading page
- Messages stored for 24 hours and visible to everyone
    - Displayed chronologically for now

## Database Schema
- chatroom db
- messages collection
    - Name: String
    - Contents: String
    - Time: Date