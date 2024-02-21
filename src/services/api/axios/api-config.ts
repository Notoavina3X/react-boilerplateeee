import axios from "axios";

export const api = axios.create({
	baseURL: `${import.meta.env.VITE_APP_API_URL}/`,
	headers: {
		"Content-Type": "application/json",
		"Access-Control-Allow-Origin": "*",
	},
});

export const EndPoints = {
	users: "users",
	// ...
} as const;

// create a type out of the object
type EndPointType = typeof EndPoints;

// create a union from the objects keys (SQUARE | CIRCLE)
type EndPointsKeys = keyof EndPointType;

// create a union from the objects values (square | circle)
export type EndPointsValues = EndPointType[EndPointsKeys];

// sample code: const anEndPoint: EndPointsValues = 'users'
