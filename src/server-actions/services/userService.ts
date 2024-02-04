import connectMongoDB from '@/db/connection/db-connection';
import User from '@/db/models/users';
import bcrypt from 'bcryptjs';

const authenticate = async (username: string, password: string): Promise<any> => {
  try {
    await connectMongoDB();
    const user = await User.findOne({ email: username });
    if (!user) {
      return Promise.resolve(null);
    }
    const passwordsMatch = await bcrypt.compare(password, user.password);
    if (!passwordsMatch) {
      return Promise.resolve(null);
    }

    return Promise.resolve(user);
  } catch (error) {
    console.log('Error: ', error);
  }
};

export const userService = {
  authenticate,
};
