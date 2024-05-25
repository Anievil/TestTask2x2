export interface PostsProps {
  id: string;
  title: string;
  text: string;
  url: string;
  date: number;
}

export interface PostsState {
  posts: PostsProps[];
  updatePostsList: (posts: PostsProps[]) => void;
  addPost: (post: PostsProps) => void;
  removePost: (postId: string) => void;
}
