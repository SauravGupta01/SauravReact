import {
  UPDATE_POSTS,
  FETCH_POSTS,
  ADD_POST,
  DELETE_POST,
  LIKE_POST,
} from './actionTypes';
import { data } from '../data';
// import db from '../firebase';
// import { posts } from '../firebase';

export function fetchPosts() {
  return {
    type: FETCH_POSTS,
    posts: data,
  };
}

export function addPost(post) {
  return {
    type: ADD_POST,
    post,
  };
}

export function updatePosts(post, id) {
  return {
    type: UPDATE_POSTS,
    post,
    id,
  };
}

export function likePost(id, post, liked) {
  return {
    type: LIKE_POST,
    id,
    post,
    liked,
  };
}

export function deletePost(post, id) {
  return {
    type: DELETE_POST,
    post,
    id,
  };
}
