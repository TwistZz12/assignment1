const mongoose = require('mongoose');
const fs = require('fs');


mongoose.connect('mongodb://admin:password@mongo:27017', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

const movieSchema = new mongoose.Schema({
  overview: String,
  popularity: Number,
  genre: String,
  name: String,
});

const Movie = mongoose.model('Movie', movieSchema);


const seedData = JSON.parse(fs.readFileSync('./seeding.json', 'utf-8'));


async function seedDatabase() {
  try {

    await Movie.deleteMany({});
    console.log('Existing data cleared.');


    await Movie.insertMany(seedData);
    console.log('Database seeding completed successfully.');

    mongoose.disconnect();
  } catch (error) {
    console.error('Error during seeding:', error);
    mongoose.disconnect();
  }
}


seedDatabase();
