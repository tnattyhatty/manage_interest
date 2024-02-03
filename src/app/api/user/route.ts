import connectMongoDB from '@/db/connection/db-connection';
import UserModel from '@/db/models/users';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const { email, phone, full_name } = await request.json();
  await connectMongoDB();
  await UserModel.create({email, phone, full_name})
  return NextResponse.json({message: 'User created successfully.', success: true},{status: 200})
}

export async function GET(){
  await connectMongoDB();
  const userList = await UserModel.find();
  return NextResponse.json({userList}, {status: 200})
}