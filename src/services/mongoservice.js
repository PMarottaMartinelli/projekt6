
const { MongoClient } = require('mongodb');

// eslint-disable-next-line no-undef
const url = process.env.MONGO_URL || "mongodb://localhost:27017";
console.log("url",url)
const client = new MongoClient(url);

const dbName = 'ItemsDB';

async function leseRinge() {
    let db, itemCollection;
    try{
        await client.connect();
        console.log('Connected successfully to server');
        db = client.db(dbName);
        itemCollection = db.collection('ringe');
    
        const findResult = await itemCollection.find({}).toArray();
        console.log('Found documents =>', findResult);
        return findResult;
    }catch(err){
        console.error(err.stack)
        throw err
    }finally{
        client.close()
    }
}

async function leseRingeDetails(id) {
    let db, itemCollection;
    try{
        await client.connect();
        console.log('Connected successfully to server');
        db = client.db(dbName);
        itemCollection = db.collection('ringe');
    
        const findResult = await itemCollection.find({id: parseInt(id)}).toArray();
        console.log('Found documents =>', findResult);
        return findResult [0];
    }catch(err){
        console.error(err.stack)
        throw err
    }finally{
        client.close()
    }
}

// async function insertitem(item) {
//     let db, itemCollection;
//     try{
//         // Use connect method to connect to the server
//         await client.connect();
//         console.log('Connected successfully to server');
//         db = client.db(dbName);
//         itemCollection = db.collection('Ringe');
//         let maxId = db.itemCollection.find().sort({id:-1}).limit(1).pretty()
//         console.log("vor dem insertMany",maxId)
//         item.id = maxId+1 
//         //const insertResult = await itemCollection.insertMany([ item ]);
//         //console.log('insert documents(kursdatum) =>', findResult);
//         return insertResult;
//     }catch(err){
//         console.error(err.stack)
//         throw err
//     }finally{
//         client.close()
//     }
// }

module.exports = {
    leseRinge,
    leseRingeDetails,
    
}