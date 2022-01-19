const { random } = require('faker');
const faker = require('faker');

const db = require('../config/connection');
const { Item, User, History } = require('../models');
const { create } = require('../models/Item');

db.once('open', async () => {
  await Item.deleteMany({});
  await User.deleteMany({});
  await History.deleteMany({})

  // create user data
  const userData = [];

  for (let i = 0; i < 50; i += 1) {
    const username = faker.internet.userName();
    const email = faker.internet.email(username);
    const password = faker.internet.password();

    const role_id = Math.floor(Math.random() * (2) + 1)

    userData.push({ username, email, password, role_id });
  }

  const createdUsers = await User.collection.insertMany(userData)

  //create items
  let createdItems = [];
  for (let i = 0; i < 100; i +=1 ){
    const name = faker.lorem.words(Math.round(Math.random() * 5) + 1);
    const description = faker.lorem.words(Math.round(Math.random() * 15) + 1);
    const count = Math.round(Math.random() * 50 + 1);
    const price = Math.round(Math.random() * 100 + 10);

    const randomUserIndex = Math.floor(Math.random() * userData.length);
    const {username, _id: userId} = userData[randomUserIndex];

    const createdItem = await Item.create({name, description, count, price, username});

    const updatedUser = await User.updateOne(
      {_id: userId},
      {$push: {items: createdItem._id}}
    );

    createdItems.push(createdItem)
  }

  //create review
  for(let i = 0; i < 100; i += 1){
    const reviewBody = faker.lorem.words(Math.round(Math.random() * 5) + 1);

    const randomUserIndex = Math.floor(Math.random() * userData.length);
    const writtenBy = userData[randomUserIndex].username;

    const randomItemIndex = Math.floor(Math.random() * createdItems.length);
    const {_id: itemId} = createdItems[randomItemIndex];

    await Item.updateOne(
      { _id: itemId },
      { $push: { review: { reviewBody, writtenBy }}},
      { runValidators: true}
    )
  }

  //create history
  for(let i = 0; i < 10; i += 1){
    const randomUserIndex = Math.floor(Math.random() * userData.length);
    const { username: username ,_id: userId } = userData[randomUserIndex];

    let items = []
    for(let i = 0; i < 10; i += 1){
      const randomItemIndex = Math.floor(Math.random() * createdItems.length);
      const { _id: itemId } = createdItems[randomItemIndex];
      items.push(itemId);
    };

    const createdHistory = await History.create({username, items, userId});

    await User.updateOne(
      { _id: userId},
      { $push: {history: createdHistory._id }}
    )
  }
  

  console.log('all done!');
  process.exit(0);
});