export type ID = string;

export interface Author {
  id: ID;
  name: string;
}

export interface Post {
  id: ID;
  title: string;
  content: string;
  authorId: ID;
}

export const authors: Author[] = [
  { id: "1", name: "Author 1" },
  { id: "2", name: "Author 2" },
  { id: "3", name: "Author 3" },
];

export const posts: Post[] = [
  { id: "1", title: "Post 1", content: "Content 1", authorId: "1" },
  { id: "2", title: "Post 2", content: "Content 2", authorId: "2" },
  { id: "3", title: "Post 3", content: "Content 3", authorId: "3" },
  { id: "4", title: "Post 4", content: "Content 4", authorId: "1" },
];
