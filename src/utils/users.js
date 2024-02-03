import { IUser } from '../interfaces/User';
import { faker } from '@faker-js/faker';

export const generateFakeUsers = (quantity) => {
  const createData = (): IUser => {
    return {
      id: faker.string.uuid(),
      name: faker.person.fullName(),
      email: faker.internet.email(),
      username: faker.internet.userName()
    };
  };

  const users: IUser[] = [];

  for (let i = 0; i < quantity; i++) {
    users.push(createData());
  };

  return users;
};
