import { useEffect, useState } from "react";
import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/api"; 
import { listRestuarants } from "./graphql/queries";
import { Restaurant } from "./types.ts";
import awsExports from "./aws-exports";

// Configure Amplify
Amplify.configure(awsExports);

// Create an Amplify API client
const client = generateClient();

function App() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

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

  return (
    <div className="container">
      <h1>Restaurant Management</h1>
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