const expressSession = require('express-session')
const mongoDbStore = require('connect-mongodb-session');

function createSessionStore () {
   const MongoDbStore = mongoDbStore(expressSession);

   const store = new MongoDbStore({
    uri: 'mongodb://10.0.0.16:27017',
    databaseName: 'online-shop',
    collection: 'sessions'
   });

   return store;
}

function createSessionConfig() {
    return {
        secret: 'super-secret',
        resave: false,
        saveUninitialized: false,
        store: createSessionStore(),
        cookie: {
            maxAge: 2 * 24 * 60 * 60 * 1000
        }

    };
}

module.exports = createSessionConfig;