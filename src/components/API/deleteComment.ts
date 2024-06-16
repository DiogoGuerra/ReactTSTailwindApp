import { API_URL } from '../constants';

export const deleteComment = async (commentId: number): Promise<void> => {
  const response = await fetch(`${API_URL}/comments/${commentId}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error('Failed to delete comment');
  }
};
