const express = require('express');
const graphqlHTTP = require('express-graphql'); 
const schema = require("./schema/schema");
const cors = require('cors');

const app = express();
app.use(cors());
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://arpit:kanpur123@cluster0-67p0y.mongodb.net/test?retryWrites=true&w=majority", 
{useNewUrlParser: true, useUnifiedTopology: true});

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log("now listening for requests on port 4000");
});
