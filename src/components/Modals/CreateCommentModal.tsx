import { useState, useEffect } from 'react';
import { Comment } from '../API/fetchComments';

interface CreateCommentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (comment: Omit<Comment, 'id'>) => void;
  postId: number;
}

const CreateCommentModal = ({ isOpen, onClose, onSave, postId }: CreateCommentModalProps) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [body, setBody] = useState('');
  const [error, setError] = useState<string | null>(null);

  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSave = () => {
    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    const newComment = { name, email, body, postId };
    onSave(newComment);
  };

  // Effect to clear error when email becomes valid
  useEffect(() => {
    if (validateEmail(email)) {
      setError(null);
    }
  }, [email]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-xl font-bold mb-4">Add New Comment</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Comment</label>
            <textarea
              value={body}
              onChange={(e) => setBody(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          {error && <div className="text-red-500 mb-4">{error}</div>}
          <div className="flex justify-end space-x-4">
            <button
              onClick={onClose}
              className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateCommentModal;
