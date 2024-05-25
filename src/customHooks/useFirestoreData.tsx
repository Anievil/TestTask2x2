import {useState, useEffect, useCallback} from 'react';
import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';

import {usePostStore} from '../zustand';
import {PostsProps} from '../interfaces/dataInterfase';
import {defaultImgUrl} from '../constants';

const useFirestoreData = () => {
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);

  const {updatePostsList, removePost, addPost} = usePostStore();

  const makeId = useCallback((length: number) => {
    let result = '';
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  }, []);

  const sendNewPost = useCallback((postData: PostsProps) => {
    if (postData.url === '') {
      postData.url = defaultImgUrl;
    }
    const newPostId = makeId(30);
    addPost({
      ...postData,
      id: newPostId,
    });
    firestore()
      .collection('posts')
      .doc(newPostId)
      .set({
        ...postData,
        id: newPostId,
      })
      .then(() => {
        console.log('User added!');
      });
  }, []);

  const getAllData = useCallback((searchedText = '') => {
    setIsRefreshing(true);
    firestore()
      .collection('posts')
      .orderBy('date', 'desc')
      .get()
      .then(
        (
          documentSnapshot: FirebaseFirestoreTypes.QuerySnapshot<FirebaseFirestoreTypes.DocumentData>,
        ) => {
          const postsList: PostsProps[] | undefined = documentSnapshot.docs.map(
            item => {
              const {url, title, date, text, id} = item.data();
              return {
                url,
                title,
                date,
                text,
                id,
              };
            },
          );
          updatePostsList(
            postsList.filter(post => post.title.includes(searchedText) || post.text.includes(searchedText)),
          );
          setIsRefreshing(false);
        },
      );
  }, []);

  const deletePost = useCallback((id: string) => {
    firestore()
      .collection('posts')
      .doc(id)
      .delete()
      .then(() => {
        console.log('User deleted!');
        removePost(id);
      });
  }, []);

  return {getAllData, isRefreshing, sendNewPost, deletePost};
};

export default useFirestoreData;
