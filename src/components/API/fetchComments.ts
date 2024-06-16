import { API_URL } from '../constants';

export interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export const fetchCommentsByPostId = async (postId: number): Promise<Comment[]> => {
  try {
    const response = await fetch(`${API_URL}/comments?postId=${postId}`);

    if (!response.ok) {
      throw new Error("Failed to fetch comments. Please try again later.");
    }

    const responseData = await response.json();

    if (!responseData) {
      throw new Error("No data found. Please try again later.");
    }

    return responseData;
  } catch (error) {
    throw new Error(`Error fetching comments: ${(error as Error).message}`);
  }
};

export default fetchCommentsByPostId;
