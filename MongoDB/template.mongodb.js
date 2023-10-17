// Template of MongoDB Playground

// Show all exisiting database
console.log("Showing exisiting database:")
console.log(db.getMongo().getDBs())
console.log("\n")

console.log("Result:")
// Select the database to use.
use('Test');

// Insert a few documents into the items collection.
db.getCollection('Testing').insertMany([
    { 'item': '1', 'value': 10, 'name': "A", 'date': new Date('2014-03-01T08:00:00Z') },
    { 'item': '2', 'value': 20, 'name': "B", 'date': new Date('2014-03-01T09:00:00Z') },
    { 'item': '3', 'value': 5, 'name': "C", 'date': new Date('2014-03-15T09:00:00Z') },
    { 'item': '4', 'value': 5, 'name': "D", 'date': new Date('2014-04-04T11:21:39.736Z') },
    { 'item': '5', 'value': 10, 'name': "E", 'date': new Date('2014-04-04T21:23:13.331Z') },
    { 'item': '6', 'value': 7.5, 'name': "F", 'date': new Date('2015-06-04T05:08:13Z') },
    { 'item': '7', 'value': 7.5, 'name': "G", 'date': new Date('2015-09-10T08:43:00Z') },
    { 'item': '8', 'value': 10, 'name': "H", 'date': new Date('2016-02-06T20:20:13Z') },
]);

// Run a find command to view items sold on April 4th, 2014.
const itemsOnApril4th = db.getCollection('items').find({
    date: { $gte: new Date('2014-04-04'), $lt: new Date('2014-04-04') }
}).count();

// Print a message to the output window.
console.log(`${itemsOnApril4th} items occurred in 2014.`);

// Here we run an aggregation and open a cursor to the results.
// Use '.toArray()' to exhaust the cursor to return the whole result set.
// You can use '.hasNext()/.next()' to iterate through the cursor page by page.
db.getCollection('items').aggregate([
    // Find all of the items that occurred in 2014.
    { $match: { date: { $gte: new Date('2014-01-01'), $lt: new Date('2015-01-01') } } },
    // Group the total items for each product.
    { $group: { _id: '$item', totalSaleAmount: { $sum: { $multiply: ['$value', '$name'] } } } }
]);
