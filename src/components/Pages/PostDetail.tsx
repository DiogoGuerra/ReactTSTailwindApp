import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchCommentsByPostId, Comment } from "../API/fetchComments";
import { fetchPostById, Post } from "../API/fetchPosts";
import EditCommentModal from "../Modals/EditCommentModal";
import { updateComment } from "../API/updateCommet";
import { deleteComment } from "../API/deleteComment";
import { createComment } from '../API/postNewComment';
import DeleteConfirmationModal from "../Modals/DeleteConfirmationModal";
import CreateCommentModal from "../Modals/CreateCommentModal";

const PostDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<Post | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedComment, setSelectedComment] = useState<Comment | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  useEffect(() => {
    const getPostAndComments = async () => {
      try {
        const postId = Number(id);
        const post = await fetchPostById(postId);
        const commentsData = await fetchCommentsByPostId(postId);

        setPost(post);
        setComments(commentsData);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    };

    getPostAndComments();
  }, [id]);

  const handleBackClick = () => {
    navigate("/posts");
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  //CREATE MODAL FUNCTIONS

  const handleCreateComment = async (newComment: Omit<Comment, 'id'>) => {
    try {
      const createdComment = await createComment(newComment);
      setComments((prevComments) => [...prevComments, createdComment]);
      setIsCreateModalOpen(false);
    } catch (error) {
      setError((error as Error).message);
    }
  };

  const handleCloseCreateModal = () => {
    setIsCreateModalOpen(false);
  };

  //END CREATE MODAL FUNCTIONS

  //EDIT MODAL FUNCTIONS

  const handleEditClick = (comment: Comment) => {
    setSelectedComment(comment);
    setIsEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
    setSelectedComment(null);
  };

  const handleSaveComment = async (updatedComment: Comment) => {
    try {
      await updateComment(updatedComment);
      setComments((prevComments) =>
        prevComments.map((comment) =>
          comment.id === updatedComment.id ? updatedComment : comment
        )
      );
    } catch (error) {
      setError((error as Error).message);
    }
  };

  //END EDIT MODAL FUNCTIONS

  //DELETE MODAL FUNCTIONS

  const handleConfirmDelete = async () => {
    if (selectedComment) {
      try {
        await deleteComment(selectedComment.id);
        setComments((prevComments) =>
          prevComments.filter((comment) => comment.id !== selectedComment.id)
        );
        setIsDeleteModalOpen(false);
      } catch (error) {
        setError((error as Error).message);
      }
    }
  };

  const handleDeleteClick = (comment: Comment) => {
    setSelectedComment(comment);
    setIsDeleteModalOpen(true);
  };

  const handleCloseDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setSelectedComment(null);
  };

  //END DELETE MODAL FUNCTIONS

  return (
    <div className="p-4 flex flex-col items-center">
      <div className="w-full flex justify-start">
        <button
          onClick={handleBackClick}
          className="mb-4 bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          ← Back to Posts
        </button>
      </div>
      {post && (
        <div className="max-w-2xl w-full bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-4 text-center">{post.title}</h1>
          <p className="mb-4">{post.body}</p>
        </div>
      )}

      <h3 className="text-xl font-bold my-4">Comments</h3>
      <div className="w-full flex justify-end">
      <button
          onClick={() => setIsCreateModalOpen(true)}
          className="mb-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          + Add Comment
        </button>
      </div>
      <ul className="space-y-4">
        {comments.map((comment) => (
          <li key={comment.id} className="p-4 bg-white rounded shadow-md">
            <h4 className="text-lg font-semibold">{comment.name}</h4>
            <p className="text-sm text-gray-600">{comment.email}</p>
            <p>{comment.body}</p>
            <div className="flex justify-between">
              <button
                onClick={() => handleEditClick(comment)}
                className="text-blue-500 hover:underline"
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteClick(comment)}
                className="text-red-500 hover:underline"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>

      <EditCommentModal
        comment={selectedComment}
        isOpen={isEditModalOpen}
        onClose={handleCloseEditModal}
        onSave={handleSaveComment}
      />

      <DeleteConfirmationModal
        isOpen={isDeleteModalOpen}
        onClose={handleCloseDeleteModal}
        onConfirm={handleConfirmDelete}
      />

      <CreateCommentModal
        isOpen={isCreateModalOpen}
        onClose={handleCloseCreateModal}
        onSave={handleCreateComment}
        postId={Number(id)}
      />
    </div>
  );
};

export default PostDetail;
