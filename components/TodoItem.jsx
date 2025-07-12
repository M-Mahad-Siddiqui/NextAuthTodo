'use client';

import { useState } from 'react';

export default function TodoItem({ todo, onUpdate, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(todo.title);
  const [editedDescription, setEditedDescription] = useState(todo.description || '');
  const [loading, setLoading] = useState(false);

  const handleUpdate = async () => {
    if (!editedTitle.trim()) return;
    
    setLoading(true);
    try {
      const response = await fetch(`/api/todos/${todo._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: editedTitle.trim(),
          description: editedDescription.trim(),
          completed: todo.completed,
        }),
      });

      if (response.ok) {
        const updatedTodo = await response.json();
        onUpdate(updatedTodo);
        setIsEditing(false);
      } else {
        const error = await response.json();
        alert(error.message || 'Failed to update todo');
      }
    } catch (error) {
      console.error('Error updating todo:', error);
      alert('Failed to update todo');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!confirm('Are you sure you want to delete this todo?')) return;
    
    setLoading(true);
    try {
      const response = await fetch(`/api/todos/${todo._id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        onDelete(todo._id);
      } else {
        const error = await response.json();
        alert(error.message || 'Failed to delete todo');
      }
    } catch (error) {
      console.error('Error deleting todo:', error);
      alert('Failed to delete todo');
    } finally {
      setLoading(false);
    }
  };

  const toggleComplete = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/todos/${todo._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: todo.title,
          description: todo.description,
          completed: !todo.completed,
        }),
      });

      if (response.ok) {
        const updatedTodo = await response.json();
        onUpdate(updatedTodo);
      } else {
        const error = await response.json();
        alert(error.message || 'Failed to update todo');
      }
    } catch (error) {
      console.error('Error updating todo:', error);
      alert('Failed to update todo');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4 border-l-4 border-blue-500">
      {isEditing ? (
        <div className="space-y-4">
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            disabled={loading}
          />
          <textarea
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            rows="3"
            disabled={loading}
          />
          <div className="flex justify-end space-x-2">
            <button
              onClick={() => {
                setIsEditing(false);
                setEditedTitle(todo.title);
                setEditedDescription(todo.description || '');
              }}
              disabled={loading}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 disabled:opacity-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleUpdate}
              disabled={loading || !editedTitle.trim()}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-blue-300 transition-colors"
            >
              {loading ? 'Saving...' : 'Save'}
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div className="flex items-start mb-4">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={toggleComplete}
              disabled={loading}
              className="mt-1 mr-3 h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
            />
            <div className="flex-1">
              <h3 className={`text-lg font-medium transition-all ${
                todo.completed 
                  ? 'line-through text-gray-500' 
                  : 'text-gray-800'
              }`}>
                {todo.title}
              </h3>
              {todo.description && (
                <p className={`text-gray-600 mt-1 transition-all ${
                  todo.completed ? 'line-through' : ''
                }`}>
                  {todo.description}
                </p>
              )}
              <p className="text-xs text-gray-400 mt-2">
                Created: {new Date(todo.createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>
          <div className="flex justify-end space-x-2">
            <button
              onClick={() => setIsEditing(true)}
              disabled={loading}
              className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 disabled:opacity-50 transition-colors text-sm"
            >
              Edit
            </button>
            <button
              onClick={handleDelete}
              disabled={loading}
              className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 disabled:opacity-50 transition-colors text-sm"
            >
              {loading ? 'Deleting...' : 'Delete'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}