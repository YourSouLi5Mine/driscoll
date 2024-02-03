import { IStory } from '../interfaces/Story';
import { faker } from '@faker-js/faker';

export const generateFakeStories = (quantity) => {
  const createData = (): IStory => {
    return {
      id: faker.string.uuid(),
      title: faker.lorem.words(),
      article: faker.lorem.paragraph(),
    };
  };

  const stories: IStory[] = [];

  for (let i = 0; i < quantity; i++) {
    stories.push(createData());
  };

  return stories;
};
