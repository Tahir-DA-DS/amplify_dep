import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react';
import React, { useEffect, useReducer } from 'react';
import { Button, Col, Container, Form, Row, Table } from 'react-bootstrap';
import awsmobile from "./aws-exports";
import './App.css';
// import awsConfig from './aws-exports';
import { createRestaurant } from './graphql/mutations';
import { listRestaurants } from './graphql/queries';
import { onCreateRestaurant } from './graphql/subscriptions';

Amplify.configure(awsmobile);
// Amplify.configure(awsConfig);

type Restaurant = {
  name: string;
  description: string;
  city: string;
};

type AppState = {
  restaurants: Restaurant[];
  formData: Restaurant;
};

type Action =
  | {
      type: 'QUERY';
      payload: Restaurant[];
    }
  | {
      type: 'SUBSCRIPTION';
      payload: Restaurant;
    }
  | {
      type: 'SET_FORM_DATA';
      payload: { [field: string]: string };
    };

type SubscriptionEvent<D> = {
  value: {
    data: D;
  };
};

const initialState: AppState = {
  restaurants: [],
  formData: {
    name: '',
    city: '',
    description: '',
  },
};
const reducer = (state: AppState, action: Action) => {
  switch (action.type) {
    case 'QUERY':
      return { ...state, restaurants: action.payload };
    case 'SUBSCRIPTION':
      return { ...state, restaurants: [...state.restaurants, action.payload] };
    case 'SET_FORM_DATA':
      return { ...state, formData: { ...state.formData, ...action.payload } };
    default:
      return state;
  }
};

const App: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const createNewRestaurant = async (e: React.SyntheticEvent) => {
    e.preventDefault(); 
    e.stopPropagation();
  
    const { name, description, city } = state.formData;
    if (!name || !description || !city) {
      alert("All fields are required!");
      return;
    }
  
    try {
      const restaurant = { name, description, city };
      await API.graphql(graphqlOperation(createRestaurant, { input: restaurant }));
      console.log("Restaurant added successfully!");
    } catch (error) {
      console.error("Error adding restaurant:", error);
    }
  };
  // const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    getRestaurantList();

    const subscription = API.graphql(
      graphqlOperation(onCreateRestaurant),
    ).subscribe({
      next: (
        eventData: SubscriptionEvent<{ onCreateRestaurant: Restaurant }>,
      ) => {
        const payload = eventData.value.data.onCreateRestaurant;
        dispatch({ type: 'SUBSCRIPTION', payload });
      },
    });

    return () => subscription.unsubscribe();
  }, []);

  const getRestaurantList = async () => {
    const restaurants = await API.graphql(graphqlOperation(listRestaurants));
    dispatch({
      type: 'QUERY',
      payload: restaurants.data.listRestaurants.items,
    });
  };

  const handleChange = (e: React.ChangeEvent<any>) => {
    dispatch({
      type: 'SET_FORM_DATA',
      payload: { [e.target.name]: e.target.value },
    });
  };

  return (
    <div className="App">
      <Container>
        <Row className="mt-3">
          <Col md={4}>
            <Form>
              <Form.Group controlId="formDataName">
                <Form.Control
                  onChange={handleChange}
                  type="text"
                  name="name"
                  placeholder="Name"
                />
              </Form.Group>
              <Form.Group controlId="formDataDescription">
                <Form.Control
                  onChange={handleChange}
                  type="text"
                  name="description"
                  placeholder="Description"
                />
              </Form.Group>
              <Form.Group controlId="formDataCity">
                <Form.Control
                  onChange={handleChange}
                  type="text"
                  name="city"
                  placeholder="City"
                />
              </Form.Group>
              <Button onClick={createNewRestaurant} className="float-left">
                Add New Restaurant
              </Button>
            </Form>
          </Col>
        </Row>

        {state.restaurants.length ? (
          <Row className="my-3">
            <Col>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>City</th>
                  </tr>
                </thead>
                <tbody>
                  {state.restaurants.map((restaurant, index) => (
                    <tr key={`restaurant-${index}`}>
                      <td>{index + 1}</td>
                      <td>{restaurant.name}</td>
                      <td>{restaurant.description}</td>
                      <td>{restaurant.city}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Col>
          </Row>
        ) : null}
      </Container>
    </div>
  );
};

export default withAuthenticator(App);
