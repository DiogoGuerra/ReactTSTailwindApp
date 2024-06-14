const API_URL = "https://jsonplaceholder.typicode.com/posts";

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const fetchPosts = async (): Promise<Post[]> => {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error("Failed to fetch posts. Please try again later.");
    }

    const responseData = await response.json();

    if (!responseData) {
      throw new Error("No data found. Please try again later.");
    }

    return responseData;
  } catch (error) {
    throw new Error(`Error fetching posts: ${(error as Error).message}`);
  }
};

export const fetchPostById = async (postId: number): Promise<Post> => {
  try {
    const response = await fetch(`${API_URL}/${postId}`);

    if (!response.ok) {
      throw new Error("Failed to fetch post. Please try again later.");
    }

    const responseData = await response.json();

    if (!responseData) {
      throw new Error("No data found. Please try again later.");
    }

    return responseData;
  } catch (error) {
    throw new Error(`Error fetching post: ${(error as Error).message}`);
  }
};
