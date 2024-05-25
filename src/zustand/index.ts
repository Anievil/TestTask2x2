import {create} from 'zustand';
import {createJSONStorage, persist} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {PostsProps, PostsState} from '../interfaces/dataInterfase';

const posts: PostsProps[] = [];

export const usePostStore = create(
  persist<PostsState>(
    set => ({
      posts: posts,
      addPost: (post: PostsProps) =>
        set(state => ({posts: [post, ...state.posts]})),
      updatePostsList: (newPosts: PostsProps[]) => set({posts: newPosts}),
      removePost: (postId: string) =>
        set(state => ({
          posts: state.posts.filter(post => post.id !== postId),
        })),
    }),

    {
      name: 'postsStore',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
