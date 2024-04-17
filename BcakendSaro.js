const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB connection URL
const url = 'mongodb://127.0.0.1:27017';
const dbName = 'Univ';
const collectionName = 'Student_data';

// Function to insert form data into MongoDB
async function insertFormData(formData) {
    const client = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    await collection.insertOne(formData);
    client.close();
}

// Route handler for form submission
app.post('/submit-form', (req, res) => {
    const formData = req.body;
    
    // Insert form data into MongoDB
    insertFormData(formData)
        .then(() => {
            res.send('Form data submitted successfully!');
        })
        .catch(err => {
            console.error('Error inserting form data into MongoDB:', err);
            res.status(500).send('Internal server error');
        });
});

// Start the server
const port = 2011;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
