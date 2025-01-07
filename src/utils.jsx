import laptop from "/src/assets/images/Electronics/laptop.jpg"



const items = [
  { id: '1', name: 'Laptop', category: 'Electronics', image:`${laptop}`, description: 'High-end laptop for rent.', location: 'Mumbai', price: 500 },
  { id: '2', name: 'Office Chair', category: 'Furniture', image: './src/assets/images/Furniture/chair.jpg', description: 'Comfortable office chair.', location: 'Pune', price: 300 },
  { id: '3', name: 'Drill', category: 'Tools', image: '/src/assets/images/tool/drill.jpg', description: 'Power drill for rent.', location: 'vapi', price: 400 },
  { id: '4', name: 'Bicycle', category: 'Vehicles', image: '/src/assets/images/Vehiclesd/bicycle.jpg', description: 'Mountain bike for rent.', location: 'Umargaon', price: 10*84 },
  { id: '36', name: 'Sandal', category: 'Clothes', image: '/src/assets/images/clothes/sandal.webp', description: 'Comfortable sofa for rent.', location: 'Vapi', price: 25*84 },
  { id: '5', name: 'Camera', category: 'Electronics', image: '/src/assets/images/Electronics/camera.jpeg', description: 'DSLR camera for photography.', location: 'Silvassa', price: 30*84 },
  { id: '6', name: 'Sofa', category: 'Furniture', image: '/src/assets/images/Furniture/sofa.jpeg', description: 'Comfortable sofa for rent.', location: 'Vapi', price: 25*84 },
  { id: '7', name: 'Lawnmower', category: 'Tools', image: '/src/assets/images/tool/lawn.jpeg', description: 'Gas-powered lawnmower.', location: 'Valsad', price: 15*84 },
  { id: '8', name: 'Skateboard', category: 'Vehicles', image: '/src/assets/images/Vehiclesd/skateboard.jpg', description: 'Skateboard for rent.', location: 'Surat', price: 8*84 },
  { id: '9', name: 'Projector', category: 'Electronics', image: '/src/assets/images/Electronics/projector.jpg', description: 'HD projector for presentations.', location: 'Umargaon', price: 40*84 },
  { id: '36', name: 'Suit', category: 'Clothes', image: '/src/assets/images/clothes/suit.webp', description: 'Comfortable sofa for rent.', location: 'Vapi', price: 25*84 },
  { id: '10', name: 'Dining Table', category: 'Furniture', image: '/src/assets/images/Furniture/dinning table.jpeg', description: 'Wooden dining table for rent.', location: 'Silvassa', price: 35*84 },
  { id: '11', name: 'Power Bank', category: 'Electronics', image: '/src/assets/images/Electronics/powerbank.jpg', description: 'Portable power bank.', location: 'Daman', price: 5*84 },
  { id: '36', name: 'Garba-Dress', category: 'Clothes', image: '/src/assets/images/clothes/garba.webp', description: 'Comfortable sofa for rent.', location: 'Vapi', price: 25*84 },
  { id: '12', name: 'Tent', category: 'Equipment', image: '/src/assets/images/Equipment/tent.jpeg', description: 'Camping tent for rent.', location: 'Diu', price: 20*84 },
  { id: '13', name: 'Mixer', category: 'Appliances', image: '/src/assets/images/Appliances/mixer.jpg', description: 'Kitchen mixer for baking.', location: 'Valsad', price: 15*84 },
  { id: '14', name: 'Drone', category: 'Electronics', image: '/src/assets/images/Electronics/drone.jpeg', description: 'Quadcopter drone for aerial photography.', location: 'Vapi', price: 45*84 },
  { id: '15', name: 'Golf Clubs', category: 'Sports', image: '/src/assets/images/sports/golf.jpeg', description: 'Set of golf clubs for rent.', location: 'Chanod', price: 30*84 },
  { id: '36', name: 'Denim-Jacket', category: 'Clothes', image: '/src/assets/images/clothes/denim-jacket.jpg', description: 'Comfortable sofa for rent.', location: 'Vapi', price: 25 },
  { id: '16', name: 'Fishing Rod', category: 'Sports', image: '/src/assets/images/sports/sports.jpeg', description: 'Fishing rod for rent.', location: 'Gunjan', price: 10*84 },
  { id: '17', name: 'BBQ Grill', category: 'Appliances', image: '/src/assets/images/Appliances/bbq grill.jpeg', description: 'Portable BBQ grill for outdoor cooking.', location: 'Vapi', price: 25*84 },
  { id: '18', name: 'Sound System', category: 'Electronics', image: '/src/assets/images/Electronics/sound.jpeg', description: 'Bluetooth sound system for parties.', location: 'Vapi', price: 50*84 },
  { id: '19', name: 'Keyboard', category: 'Musical Instruments', image: '/src/assets/images/Instrument/keyboard.jpeg', description: 'Electronic keyboard for music enthusiasts.', location: 'Mumbai', price: 20*84 },
  { id: '20', name: 'Luggage', category: 'Travel', image: '/src/assets/images/travel/luggage.jpeg', description: 'Set of luggage for travelers.', location: 'Silvassa', price: 15*84 },
  { id: '36', name: 'Blazer', category: 'Clothes', image: '/src/assets/images/clothes/blazer.webp', description: 'Comfortable sofa for rent.', location: 'Vapi', price: 25*84 },
  { id: '21', name: 'Air Conditioner', category: 'Electronics', image: '/src/assets/images/Electronics/ac.webp', description: 'Bluetooth sound system for parties.', location: 'Vapi', price: 50*84 },
  { id: '22', name: 'Fridge', category: 'Electronics', image: '/src/assets/images/Electronics/fridge.webp', description: 'Quadcopter drone for aerial photography.', location: 'Vapi', price: 45*84 },
  { id: '23', name: 'Rocking Chair', category: 'Furniture', image: '/src/assets/images/Furniture/rocking-chair.jpeg', description: 'Comfortable office chair.', location: 'Pune', price: 15*84 },
  { id: '36', name: 'Lehenga', category: 'Clothes', image: '/src/assets/images/clothes/lehenga.webp', description: 'Comfortable sofa for rent.', location: 'Vapi', price: 25*84 },
  { id: '24', name: 'Drill', category: 'Tools', image: '/src/assets/images/tool/drill.jpg', description: 'Power drill for rent.', location: 'vapi', price: 20*84 },
  { id: '25', name: 'Bicycle', category: 'Vehicles', image: '/src/assets/images/Vehiclesd/bicycle.jpg', description: 'Mountain bike for rent.', location: 'Umargaon', price: 10*84},
  { id: '36', name: 'Shoes', category: 'Clothes', image: '/src/assets/images/clothes/shoes.jpeg', description: 'Comfortable sofa for rent.', location: 'Vapi', price: 25*84 },
  { id: '26', name: 'Cooler', category: 'Electronics', image: '/src/assets/images/Electronics/cooler.jpg', description: 'DSLR camera for photography.', location: 'Silvassa', price: 30*84 },
  { id: '27', name: 'Bed', category: 'Furniture', image: '/src/assets/images/Furniture/bed1.jpeg', description: 'Comfortable sofa for rent.', location: 'Vapi', price: 25*84 },
  { id: '28', name: 'Lawnmower', category: 'Tools', image: '/src/assets/images/tool/lawn.jpeg', description: 'Gas-powered lawnmower.', location: 'Valsad', price: 15*84 },
  { id: '29', name: 'Skateboard', category: 'Vehicles', image: '/src/assets/images/Vehiclesd/skateboard.jpg', description: 'Skateboard for rent.', location: 'Surat', price: 8*84 },
  { id: '36', name: 'Jacket', category: 'Clothes', image: '/src/assets/images/clothes/normal-jacket.webp', description: 'Comfortable sofa for rent.', location: 'Vapi', price: 25*84 },
  { id: '30', name: 'TV', category: 'Electronics', image: '/src/assets/images/Electronics/tv.webp', description: 'HD projector for presentations.', location: 'Umargaon', price: 40*84 },
  { id: '31', name: 'Sofa', category: 'Furniture', image: '/src/assets/images/Furniture/sofa2.jpg', description: 'Comfortable sofa for rent.', location: 'Vapi', price: 25*84 },
  { id: '32', name: 'Almirah', category: 'Furniture', image: '/src/assets/images/Furniture/almirah2.webp', description: 'Comfortable sofa for rent.', location: 'Vapi', price: 25*84 },
  { id: '33', name: 'Bed', category: 'Furniture', image: '/src/assets/images/Furniture/bed2.jpeg', description: 'Comfortable sofa for rent.', location: 'Vapi', price: 25*84 },
  { id: '34', name: 'Jhula', category: 'Furniture', image: '/src/assets/images/Furniture/jhula.jpeg', description: 'Comfortable sofa for rent.', location: 'Vapi', price: 25*84 },
  { id: '35', name: 'Almirah', category: 'Furniture', image: '/src/assets/images/Furniture/almirah.webp', description: 'Comfortable sofa for rent.', location: 'Vapi', price: 25*84 },
  { id: '36', name: 'Shoes', category: 'Clothes', image: '/src/assets/images/clothes/shoes2.jpg', description: 'Comfortable sofa for rent.', location: 'Vapi', price: 25*84 },
  
];

export default items;