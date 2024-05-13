import { NextRequest, NextResponse } from "next/server";
import { users } from "../data";

export function GET(
	request: NextRequest,
	context: {
		params: { id: string };
	}
) {
	const { id } = context.params;
	const user = users.find((user) => user.id === id);
	return Response.json(user);
}

export function DELETE(
	request: NextRequest,
	context: {
		params: {
			id: string;
		};
	}
) {
	const id = context.params.id;
	const index = users.findIndex((user) => user.id === id);
	users.splice(index, 1);
	return Response.json(users);
}

export async function PUT(
	request: NextRequest,
	context: {
		params: {
			id: string;
		};
	}
) {
	const id = context.params.id;
	const user = await request.json();
	const updatedUser = users.map((u) => (u.id === id ? user : u));
	return NextResponse.json(updatedUser);
}
