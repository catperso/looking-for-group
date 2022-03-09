# _Looking For Group_

#### By _**Matt C.**_

#### _A network to allow players and DMs to coordinate and arrange game sessions for Dungeons and Dragons._

## Technologies Used

* _HTML/CSS_
* _React/Redux_
* _[Firebase/Firestore](https://firebase.google.com/)_
* _JavaScript/JSX_
* _NoSQL_
* _[Diagrams.net](https://www.diagrams.net/)_

## Component Diagram

<p align="center">
<img src="src/img/component-diagram.png" height="382px">
</p>

## Description

_My capstone project at Epicodus. An MVP for a simple networking site that allows Dungeon Masters to coordinate and set up new groups of players. Account-based authorization, full CRUD functionality on games you post._

## Setup/Installation Requirements

* _Run `git clone https://github.com/catperso/looking-for-group` from the terminal to clone the project directory to your device._
* _cd into the looking-for-group directory then run `npm install` from the terminal to set up the environment and install all the npm packages._
* LINK TO INSTRUCTIONS ON HOW TO START FIREBASE
* _Create a file in the root directory named `.env` and copy the following code into it:_
```
REACT_APP_FIREBASE_API_KEY = "[YOUR-KEY]"
REACT_APP_FIREBASE_AUTH_DOMAIN = "[YOUR-AUTH-DOMAIN].firebaseapp.com"
REACT_APP_FIREBASE_DATABASE_URL = "https://[YOUR-DATABASE-URL].firebaseio.com"
REACT_APP_FIREBASE_PROJECT_ID = "[YOUR-PROJECT-ID]"
REACT_APP_FIREBASE_STORAGE_BUCKET = "[YOUR-STORAGE-BUCKET].appspot.com"
REACT_APP_FIREBASE_MESSAGING_SENDER_ID = "[YOUR-MESSAGING-ID]"
REACT_APP_FIREBASE_APP_ID = "[YOUR-APP-ID]"
REACT_APP_FIREBASE_MEASUREMENT_ID = "[YOUR-MEASUREMENT-ID]"
```
* _... and replace all the placeholders including their brackets with your database information._
* _Run `npm run start` from the terminal to build the project and start a live development server._
* _Navigate to `localhost:3000` in your favorite web browser to enjoy the project. (this part should happen automatically)_

## Known Bugs

* _Currently when you edit a game, submitting the changes returns you to the game detail for that game without changing anything displayed, you have to exit out to the list and return to the game to see the updates._
* _Joining or leaving a game does not visibly update the players section of a game detail, you must navigate to a different part of the site before seeing the update._

## License - [MIT](https://opensource.org/licenses/MIT)

_If you run into any problems/bugs feel free to send me an email [(mc.casperson@gmail.com)](mailto:mc.casperson@gmail.com) with details._

[![GitHub Badge](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/catperso)
[![LinkedIn Badge](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/matthew-casperson/)

Copyright (c) _2022_ _Matt C._