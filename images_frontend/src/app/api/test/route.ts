import { NextRequest, NextResponse } from "next/server";

import z from "zod";

// http://localhost:3000/api/test?name=123&email=569144003@qq.com

const inputSchema = z.object({
    name: z.string().max(10).min(3),
    email: z.string().email(),
});

export function GET(request: NextRequest) {
    const query = request.nextUrl.searchParams;

    const name = query.get("name");
    const email = query.get("email");

    const result = inputSchema.safeParse({
        name,
        email,
    });

    if (result.success) {
        return NextResponse.json(result.data);
    } else {
        return NextResponse.json({ error: result.error.message });
    }
}