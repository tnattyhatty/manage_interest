import connectMongoDB from '@/db/connection/db-connection';
import UserModel from '@/db/models/users';
import bcrypt from 'bcryptjs';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const { email, phone, full_name, password } = await request.json();
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log('Password :', hashedPassword);

  await connectMongoDB();
  const user = await UserModel.findOne({ email }).select('_id');

  console.log('USER ============ ', user);

  if (user) {
    return NextResponse.json({ message: 'User already exist.', success: false }, { status: 200 });
  } else {
    await UserModel.create({ email, phone, full_name, password: hashedPassword });
    return NextResponse.json({ message: 'User created successfully.', success: true }, { status: 200 });
  }
}

export async function GET() {
  await connectMongoDB();
  const userList = await UserModel.find();
  return NextResponse.json({ userList }, { status: 200 });
}
