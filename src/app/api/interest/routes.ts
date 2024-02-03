import connectMongoDB from '@/db/connection/db-connection';
import InterestModel from '@/db/models/interest';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const { principle_date, principle_amount, monthly_interest, interest_date, percentage } = await request.json();

  await connectMongoDB();
  await InterestModel.create({ principle_date, principle_amount, monthly_interest, interest_date, percentage });
  return NextResponse.json({ message: 'Interest successfully created', success: true }, { status: 200 });
}

export async function GET(request: NextRequest) {
  const { principle_date, principle_amount, monthly_interest, interest_date, percentage } = await request.json();

  await connectMongoDB();
  await InterestModel.create({ principle_date, principle_amount, monthly_interest, interest_date, percentage });
  return NextResponse.json({ message: 'Interest successfully created', success: true }, { status: 200 });
}
