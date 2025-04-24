'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function DeleteArticle({ params }) {
  const router = useRouter();
  const { id } = params;
  
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchArticle() {
      try {
        const response = await fetch(`/api/admin/articles/${id}`);
        
        if (!response.ok) {
          throw new Error('Article not found');
        }
        
        const data = await response.json();
        setArticle(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    
    fetchArticle();
  }, [id]);

  const handleDelete = async () => {
    setDeleting(true);
    setError('');

    try {
      const response = await fetch(`/api/admin/articles/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to delete article');
      }

      router.push('/dashboard/admin');
      router.refresh();
    } catch (err) {
      setError(err.message);
      setDeleting(false);
    }
  };

  if (loading) {
    return <div className="text-center py-12">Loading article data...</div>;
  }

  if (error && !article) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role="alert">
          <p>{error}</p>
          <Link href="/dashboard/admin" className="font-medium underline mt-2 inline-block">
            Return to Dashboard
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Delete Article</h1>
        <Link 
          href="/dashboard/admin" 
          className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
        >
          Back to Dashboard
        </Link>
      </div>

      {error && (
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role="alert">
          <p>{error}</p>
        </div>
      )}

      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="text-center mb-6">
          <div className="text-red-600 text-5xl mb-4">⚠️</div>
          <h2 className="text-xl font-bold mb-2">Are you sure?</h2>
          <p className="text-gray-600">
            You are about to delete the article <span className="font-semibold">"{article?.title}"</span>. 
            This action cannot be undone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="md:col-span-2 bg-gray-100 p-4 rounded-md">
            <div className="font-medium mb-2">Article details:</div>
            <p><span className="font-medium">Title:</span> {article?.title}</p>
            <p><span className="font-medium">Category:</span> {article?.category}</p>
            <p className="line-clamp-3"><span className="font-medium">Description:</span> {article?.description}</p>
          </div>
          
          <div className="bg-gray-100 p-4 rounded-md flex items-center justify-center">
            {article?.image ? (
              <div className="text-center">
                <p className="text-sm font-medium text-gray-700 mb-2">Article Image:</p>
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="max-h-32 max-w-full object-contain mx-auto"
                />
              </div>
            ) : (
              <div className="text-center text-gray-500">
                <p>No image available</p>
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-center space-x-4">
          <Link
            href="/dashboard/admin"
            className="px-6 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors"
          >
            Cancel
          </Link>
          <button
            onClick={handleDelete}
            disabled={deleting}
            className={`px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors ${deleting ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {deleting ? 'Deleting...' : 'Delete Article'}
          </button>
        </div>
      </div>
    </div>
  );
} 