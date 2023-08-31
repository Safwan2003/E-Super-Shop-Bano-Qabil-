const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser'); // Import the bodyParser middleware
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(bodyParser.json({ limit: '10mb' })); // Add the limit option to bodyParser.json()
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' })); // Add the limit option to bodyParser.urlencoded()

// Connect to MongoDB
mongoose.connect('mongodb+srv://safwanalimukaddam:0204kakwanplaza@cluster0.bzoy4t8.mongodb.net/your-database-name?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const cartItemSchema = new mongoose.Schema({
  name: String,
  price: Number,
  image: String,
  userId: String,
  // ... other properties
});

const CartItem = mongoose.model('CartItem', cartItemSchema);

app.use(cors());
app.use(express.json());

app.post('/api/checkout', async (req, res) => {
  const { user, cartItems } = req.body;
  console.log('Received combined data:', user, cartItems);

  try {
    const itemsToSave = cartItems.map(item => ({
      name: item.name,
      price: item.price,
      image: item.image,
      userId: user.id,
      // ... other properties
    }));

    const savedItems = await CartItem.create(itemsToSave);

    res.status(201).json({ message: 'Checkout successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while processing your request.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
