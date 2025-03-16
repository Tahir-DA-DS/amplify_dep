import { useEffect, useState } from "react";
import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/api";
import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react"; 
import { listRestuarants } from "./graphql/queries";
import { createRestuarant, updateRestaurant, deleteRestaurant } from "./graphql/mutations";
import "@aws-amplify/ui-react/styles.css"
import { Restaurant } from "./types.ts";
import awsExports from "./aws-exports";
import { v4 as uuidv4 } from "uuid";

// Configure Amplify
Amplify.configure(awsExports);

// Create an Amplify API client
const client = generateClient();

function RestaurantApp() {
  const { signOut } = useAuthenticator((context) => [context.user]); 

  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  const [newRestaurant, setNewRestaurant] = useState({
    name: "",
    description: "",
    city: "",
  });

  const [editingRestaurant, setEditingRestaurant] = useState<Restaurant | null>(null);

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    try {
      const response = await client.graphql({ query: listRestuarants });
  
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

  const startEdit = (restaurant: Restaurant) => {
    setEditingRestaurant(restaurant);
    setNewRestaurant({
      name: restaurant.name,
      description: restaurant.description ?? "",
      city: restaurant.city ?? "",
    });
  };

  const updateRestaurantData = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingRestaurant) return;

    try {
      const input = {
        id: editingRestaurant.id,
        name: newRestaurant.name,
        description: newRestaurant.description,
        city: newRestaurant.city,
      };

      const response = await client.graphql({
        query: updateRestaurant,
        variables: { input },
      });

      setRestaurants(
        restaurants.map((r) => (r.id === editingRestaurant.id ? response.data.updateRestuarant : r))
      );

      setEditingRestaurant(null);
      setNewRestaurant({ name: "", description: "", city: "" });
    } catch (error) {
      console.error("Error updating restaurant:", error);
    }
  };

  const removeRestaurant = async (id: string) => {
    try {
      await client.graphql({
        query: deleteRestaurant,
        variables: { input: { id } },
      });

      setRestaurants(restaurants.filter((restaurant) => restaurant.id !== id));
    } catch (error) {
      console.error("Error deleting restaurant:", error);
    }
  };

  return (
    <div className="container">
      <h1>Restaurant Management</h1>

      <button onClick={signOut}>Sign Out</button>
      <form onSubmit={editingRestaurant ? updateRestaurantData : addRestaurant}>
        <input
          type="text"
          name="name"
          placeholder="Restaurant Name"
          value={newRestaurant.name}
          onChange={handleChange}
          required
        /><br></br>
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={newRestaurant.description}
          onChange={handleChange}
        /><br></br>
        <input
          type="text"
          name="city"
          placeholder="City"
          value={newRestaurant.city}
          onChange={handleChange}
          required
        /><br></br>
        <button type="submit">{editingRestaurant ? "Update Restaurant" : "Add Restaurant"}</button>
        {editingRestaurant && (
          <button type="button" onClick={() => setEditingRestaurant(null)}>
            Cancel
          </button>
        )}
      </form>
      <ul>
        {restaurants.map((restaurant) => (
          <li key={restaurant.id}>
            <strong>{restaurant.name}</strong> - {restaurant.city}
            <button onClick={() => startEdit(restaurant)}>Edit</button>
            <button onClick={() => removeRestaurant(restaurant.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );

}

function App() {
  return (
    <Authenticator>
      <RestaurantApp />
    </Authenticator>
  );
}
export default App;