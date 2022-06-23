## Rock Paper Scissor API using Node.js

#### This API is made for Triceria Solutions as an interview project.

##### Clone API

```
git clone https://github.com/Kunalpatil22/rock-paper-scissor-api.git
```

##### Setup .env file

```
PORT=5000
DB_CONNECT = 'mongodb://localhost:27017/rock-paper-scissor'
```

> Make sure you have Node.js and MongoDB installed (Alternatively,You can also use MongoDB atlas)
##### Install node modules

```
npm install
```

##### Run node server

```
npm start
```

> Server should be running on http://localhost:5000

#

##### API Usage

```
GET http://localhost:5000/game/start
```

##### Request body example

```
body = {
    player_id: 1,
    player_choice: "rock"
}
```

### After 50 such requests, server will return the results of all 50 rounds
