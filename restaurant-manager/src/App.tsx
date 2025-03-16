import { useEffect, useState } from "react";
import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/api"; 
import { listRestuarants } from "./graphql/queries";
import { createRestuarant } from "./graphql/mutations";
import { Restaurant } from "./types.ts";
import awsExports from "./aws-exports";
import { v4 as uuidv4 } from "uuid";

// Configure Amplify
Amplify.configure(awsExports);

// Create an Amplify API client
const client = generateClient();

function App() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  const [newRestaurant, setNewRestaurant] = useState({
    name: "",
    description: "",
    city: "",
  });

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    try {
      const response = await client.graphql({ query: listRestuarants });
  
      // Ensure TypeScript only uses the expected properties
      const items = response.data.listRestuarants.items.map((restaurant: any) => ({
        id: restaurant.id,
        clientId: restaurant.clientId ?? "", 
        name: restaurant.name,
        description: restaurant.description ?? "", 
        city: restaurant.city ?? "", 
        createdAt: restaurant.createdAt,
        updatedAt: restaurant.updatedAt,
      }));
  
      setRestaurants(items);
    } catch (error) {
      console.error("Error fetching restaurants:", error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewRestaurant({ ...newRestaurant, [e.target.name]: e.target.value });
  };

  const addRestaurant = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const input = {
        id: uuidv4(), // Generate a unique ID
        clientId: uuidv4(),
        name: newRestaurant.name,
        description: newRestaurant.description,
        city: newRestaurant.city,
      };

      const response = await client.graphql({
        query: createRestuarant,
        variables: { input },
      });

    setRestaurants([...restaurants, response.data.createRestuarant]);

      setNewRestaurant({ name: "", description: "", city: "" });
    } catch (error) {
      console.error("Error creating restaurant:", error);
    }
  };

  return (
    <div className="container">
      <h1>Restaurant Management</h1>

      {/* Form to Add a New Restaurant */}
      <form onSubmit={addRestaurant}>
        <input
          type="text"
          name="name"
          placeholder="Restaurant Name"
          value={newRestaurant.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={newRestaurant.description}
          onChange={handleChange}
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={newRestaurant.city}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Restaurant</button>
      </form>

      {/* Display List of Restaurants */}
      <ul>
        {restaurants.map((restaurant) => (
          <li key={restaurant.id}>
            <strong>{restaurant.name}</strong> - {restaurant.city}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;