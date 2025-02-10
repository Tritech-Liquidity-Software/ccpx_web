import { NextResponse } from 'next/server';
import mysql from 'mysql2/promise';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { firstname, lastname, mob_no, email, description } = body;

        // Validate input
        if (!firstname || !lastname || !mob_no || !email) {
            return NextResponse.json(
                { error: 'All required fields must be filled.' },
                { status: 400 }
            );
        }

        // Create a connection to the database
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'CCPEX_form',
        });

        // Insert form data into the database
        const query = `
            INSERT INTO CCPEX_contact_form (firstname, lastname, mob_no, email, description)
            VALUES (?, ?, ?, ?, ?)
        `;
        const values = [firstname, lastname, mob_no, email, description || null];

        await connection.execute(query, values);

        // Close the database connection
        await connection.end();

        return NextResponse.json({
            success: true,
            message: 'Your form has been submitted successfully',
        });
    } catch (error) {
        console.error('Error processing form submission:', error);
        return NextResponse.json(
            { error: 'Something went wrong.' },
            { status: 500 }
        );
    }
}
