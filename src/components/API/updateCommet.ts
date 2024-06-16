import { API_URL } from '../constants';

export interface Comment {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
  }
  
  export const updateComment = async (comment: Comment): Promise<Comment> => {
    const response = await fetch(`${API_URL}/comments/${comment.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(comment),
    });
  
    if (!response.ok) {
      throw new Error('Failed to update comment');
    }
  
    const updatedComment = await response.json();
    return updatedComment;
  };
  