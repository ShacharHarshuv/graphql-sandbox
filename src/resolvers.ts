import {
  Post,
  posts,
  Author,
  authors,
  ID,
} from './data';
import DataLoader from 'dataloader';


async function getAuthorsByIds(ids: readonly ID[]): Promise<Author[]> {
  console.log('getAuthorsByIds', ids);
  return authors.filter((author) => ids.includes(author.id));
}

const authorLoader = new DataLoader<ID, Author>(getAuthorsByIds);

export const resolvers = {
  Query: {
    posts: (): Post[] => posts,
  },
  Post: {
    author: async (parent: Post): Promise<Author | undefined> => {
      // This will produce the N+1 problem
      return await authorLoader.load(parent.authorId);
    },
  },
  Mutation: {
    createPosts: (
      _parent: unknown,
      args: { posts: { title: string; content: string; authorId: ID }[] }
    ): Post[] => {
      const newPosts = args.posts.map((post) => ({
        id: (+posts.length + 1).toString(),
        title: post.title,
        content: post.content,
        authorId: post.authorId,
      }));
      posts.push(...newPosts);
      return newPosts;
    }
  }
};

function findAuthorById(id: ID): Author | undefined {
  console.log('findAuthorById called!'); // todo
  return authors.find((author) => author.id === id);
}

