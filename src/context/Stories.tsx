import { createContext, useState, useEffect, ReactNode, ReactElement } from 'react';
import { generateFakeStories } from '../utils/stories';
import { IStory } from '../interfaces/Story';

interface IStoriesContext {
  stories: IStory[];
  setStories: React.Dispatch<React.SetStateAction<IStory[]>>;
}

interface IStoriesProvider {
  children: ReactNode | ReactElement;
}

const initialValue: IStoriesContext = {
  stories: [],
  setStories: () => {},
};

const StoriesContext = createContext<IStoriesContext>(initialValue);

const StoriesProvider: React.FC<IStoriesProvider> = ({ children }) => {
  const [stories, setStories] = useState<IStory[]>([]);

  useEffect(() => {
    setStories(generateFakeStories(5));
  }, []);

  return (
    <StoriesContext.Provider value={{ stories, setStories }}>
      {children}
    </StoriesContext.Provider>
  );
};

export { StoriesContext, StoriesProvider };
