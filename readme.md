# Welcome to the Anythink Market repo

To start the app use Docker. It will start both frontend and backend, including all the relevant dependencies, and the db.

Please find more info about each part in the relevant Readme file ([frontend](frontend/readme.md) and [backend](backend/README.md)).

## Development

When implementing a new feature or fixing a bug, please create a new pull request against `main` from a feature/bug branch and add `@vanessa-cooper` as reviewer.

## First setup
first install docker in your local environment .To check whether its installed or not run these command
```
 docker -v 
 docker-compose -v
```
Then run 
```
  docker-compose up
```
from the project root directory to load Anythink's backend and frontend.If Docker is working correctly, the backend should be running and able to connect to your local database.Now test it by pointing your browser to http://localhost:3000/api/ping.


**[TODO 05/01/2018 @vanessa-cooper]:** _It's been a while since anyone ran a fresh copy of this repo. I think it's worth documenting the steps needed to install and run the repo on a new machine?_


