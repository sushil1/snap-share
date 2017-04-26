# snap-share
A website project that lets you upload images along with your post and have them save the geolocations.
 Those post will be searchable by dragging the map around. Used cloudinary to upload the images. react-google-maps npm module to integrate the maps in the frontend. Used Node, Express, Mongoose-(for object modeling Schemas) for Mongodb, bluebird library to write the controllers using Promises in the backend.
React, Redux in the frontend, bcrypt, jsonwebtoken and client sessions for hashing passwords, creating and verifying tokens and session management.
Babel for transpiling jsx and ES6 codes and Webpack for compiling. used bootstrap for theme and design
superagent for API calls from the frontend

## To run
clone or download
```
npm install
```
```
webpack -w
```
```
nodemon
```

## Create .env file
Assign values to these config variables

```
DB_URL
```
```
JWT_TOKEN_SECRET
```
```
SESSION_SECRET
```

open the browser-- localhost:3000

### Heroku

[Heroku](https://snap-share.herokuapp.com/) - Snap-share in heroku
