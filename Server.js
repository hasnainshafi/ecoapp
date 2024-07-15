const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/ecoImpactTracker', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const User = mongoose.model('User', userSchema);

const ecoImpactSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  carbonFootprint: Number,
  waterUsage: Number,
  // Add more eco-impact metrics here
});

const EcoImpact = mongoose.model('EcoImpact', ecoImpactSchema);

app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  const user = new User({ username, password });
  await user.save();
  res.json({ message: 'User registered successfully' });
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username, password });
  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
  const token = jwt.sign({ userId: user._id }, 'your_jwt_secret');
  res.json({ token });
});

app.get('/eco-impact', async (req, res) => {
  const token = req.headers.authorization.split(' ')[1];
  const decoded = jwt.verify(token, 'your_jwt_secret');
  const ecoImpact = await EcoImpact.findOne({ userId: decoded.userId });
  res.json(ecoImpact);
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
const activitySchema = new mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
    activity: String,
    impact: Number,
    date: { type: Date, default: Date.now },
  });
  
  const Activity = mongoose.model('Activity', activitySchema);
  
  app.post('/add-activity', async (req, res) => {
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, 'your_jwt_secret');
    const { activity, impact } = req.body;
    const newActivity = new Activity({ userId: decoded.userId, activity, impact });
    await newActivity.save();
    res.json({ message: 'Activity added successfully' });
  });
  app.post('/register', async (req, res) => {
    try {
      const { username, password } = req.body;
      const existingUser = await User.findOne({ username });
      if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
      }
      const user = new User({ username, password });
      await user.save();
      res.json({ message: 'User registered successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  });
  