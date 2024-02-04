import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from './api/auth/[...nextauth]/routes';

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (session) redirect('/dashboard');
  return <main className="">Home</main>;
}
