import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect('mongodb+srv://dbUser:temp123@cluster0.3akyl.mongodb.net/SF-Drive'),
  },
];