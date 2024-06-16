import { Comment } from './fetchComments';
import { API_URL } from '../constants';


export const createComment = async (newComment: any): Promise<Comment> => {
  const response = await fetch(`${API_URL}/comments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newComment),
  });

  if (!response.ok) {
    throw new Error('Failed to create comment');
  }

  const createdComment = await response.json();
  return createdComment;
};
