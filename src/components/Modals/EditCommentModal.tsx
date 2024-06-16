import { useState, useEffect } from 'react';
import { Comment } from '../API/updateCommet';

interface EditCommentModalProps {
  comment: Comment | null;
  isOpen: boolean;
  onClose: () => void;
  onSave: (updatedComment: Comment) => void;
}

const EditCommentModal = ({ comment, isOpen, onClose, onSave }: EditCommentModalProps) => {
  const [editedComment, setEditedComment] = useState(comment);

  useEffect(() => {
    setEditedComment(comment);
  }, [comment]);

  if (!isOpen || !comment) return null;

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setEditedComment((prevComment) => (prevComment ? { ...prevComment, [name]: value } : null));
  };

  const handleSave = () => {
    if (editedComment) {
      onSave(editedComment);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded shadow-md w-96">
        <h2 className="text-xl font-bold mb-4">Edit Comment</h2>
        <input
          type="text"
          name="name"
          value={editedComment?.name || ''}
          onChange={handleChange}
          className="w-full px-3 py-2 mb-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="email"
          name="email"
          value={editedComment?.email || ''}
          onChange={handleChange}
          className="w-full px-3 py-2 mb-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <textarea
          name="body"
          value={editedComment?.body || ''}
          onChange={handleChange}
          rows={4}
          className="w-full px-3 py-2 mb-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        ></textarea>
        <div className="flex justify-end space-x-4">
          <button onClick={onClose} className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400">
            Cancel
          </button>
          <button onClick={handleSave} className="bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-700">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditCommentModal;
