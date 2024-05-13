import { NextRequest } from "next/server";
import { users } from "./data";

export function GET() {
	return Response.json(users);
}

export async function POST(request: NextRequest) {
	const { firstName, lastName, age } = await request.json();
	const newUser = { id: Date.now(), firstName, lastName, age };
	users.push(newUser);
	return Response.json(newUser, { status: 201 });
}
