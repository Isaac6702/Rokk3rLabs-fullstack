#Summary
This project was created by Isaac Arismendi, for the backend test in Rokk3rLabs


## For backend (normal):
1. Install MongoDB.
2. Setup project database in: `src/config/dev`
3. In element mongo write: ip:port of mongo
4. Run `npm install`
5. Run `npm run seed-dev`
6. Run `npm start`
7. Navigate to `http://localhost:3000/api/docs/` to see API documentation.

## For backend (with docker):
1. Install docker and docker-compose
2. Run `npm run docker`
3. Navigate to `http://localhost: 3000/api/docs/` to see API documentation.

## For frontend:
1. Go to the <folder-project>/client folder
2. Run `npm install`
3. Run `npm start`
4. Navigate to `http://localhost:4200/`.

## To test backend
1. Run `npm test`
2. In the file: `<folder-project>/coverage`
3. Open `index.html` to view coverage of test
