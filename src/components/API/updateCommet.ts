export interface Comment {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
  }
  
  const API_URL = "https://jsonplaceholder.typicode.com";
  
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
  