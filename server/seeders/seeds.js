const faker = require('faker');

const db = require('../config/connection');
const { Item, User } = require('../models');

db.once('open', async () => {
  await Item.deleteMany({});
  await User.deleteMany({});

  // create user data
  const userData = [];

  for (let i = 0; i < 50; i += 1) {
    const username = faker.internet.userName();
    const email = faker.internet.email(username);
    const password = faker.internet.password();

    const role_id = Math.floor(Math.random() * (2-1) + 1)

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

    const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
    const {username, _id: userId} = createdUsers.ops[randomUserIndex];

    const createdItem = await Item.create({name, description, count, price, username});

    const updatedUser = await User.updateOne(
      {_id: userId},
      {$push: {items: createdItem._id}}
    );

    createdItems.push(createdItem)
  }


  // // create reactions
  // for (let i = 0; i < 100; i += 1) {
  //   const reactionBody = faker.lorem.words(Math.round(Math.random() * 20) + 1);

  //   const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
  //   const { username } = createdUsers.ops[randomUserIndex];

  //   const randomThoughtIndex = Math.floor(Math.random() * createdThoughts.length);
  //   const { _id: thoughtId } = createdThoughts[randomThoughtIndex];

  //   await Thought.updateOne(
  //     { _id: thoughtId },
  //     { $push: { reactions: { reactionBody, username } } },
  //     { runValidators: true }
  //   );
  // }

  console.log('all done!');
  process.exit(0);
});
