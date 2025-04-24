'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function EditUser({ params }) {
  const router = useRouter();
  const { id } = params;
  const fileInputRef = useRef(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'USER',
    imageUrl: ''
  });
  const [articles, setArticles] = useState([]);
  const [userPurchases, setUserPurchases] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [imagePreview, setImagePreview] = useState('');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch user data
        const userResponse = await fetch(`/api/admin/users/${id}`);
        
        if (!userResponse.ok) {
          throw new Error('User not found');
        }
        
        const userData = await userResponse.json();
        setFormData({
          name: userData.name || '',
          email: userData.email || '',
          password: '',
          role: userData.role,
          imageUrl: userData.image || ''
        });
        
        if (userData.image) {
          setImagePreview(userData.image);
        }
        
        // Fetch user's purchases
        const purchasesResponse = await fetch(`/api/admin/users/${id}/purchases`);
        if (purchasesResponse.ok) {
          const purchasesData = await purchasesResponse.json();
          setUserPurchases(purchasesData.map(p => p.articleId));
        }
        
        // Fetch all articles
        const articlesResponse = await fetch('/api/admin/articles');
        if (articlesResponse.ok) {
          const articlesData = await articlesResponse.json();
          setArticles(articlesData);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    
    fetchData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleArticleSelection = (articleId) => {
    setUserPurchases(prev => {
      if (prev.includes(articleId)) {
        return prev.filter(id => id !== articleId);
      } else {
        return [...prev, articleId];
      }
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      
      // Create a preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError('');

    try {
      // Create FormData object to send file
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      if (formData.password) {
        formDataToSend.append('password', formData.password);
      }
      formDataToSend.append('role', formData.role);
      formDataToSend.append('articles', JSON.stringify(userPurchases));
      formDataToSend.append('currentImageUrl', formData.imageUrl);
      
      if (selectedFile) {
        formDataToSend.append('avatar', selectedFile);
      }

      const response = await fetch(`/api/admin/users/${id}`, {
        method: 'PUT',
        body: formDataToSend,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to update user');
      }

      router.push('/dashboard/admin');
      router.refresh();
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <div className="text-center py-12">Loading user data...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Edit User</h1>
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

      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <p className="text-xs text-gray-500 mt-1">
            Leave blank to keep the current password.
          </p>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="role">
            Role
          </label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Purchased Articles
          </label>
          {articles.length === 0 ? (
            <p className="text-gray-600 text-sm italic">No articles available</p>
          ) : (
            <div className="max-h-48 overflow-y-auto border rounded p-2">
              {articles.map(article => (
                <div key={article.id} className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    id={`article-${article.id}`}
                    checked={userPurchases.includes(article.id)}
                    onChange={() => handleArticleSelection(article.id)}
                    className="mr-2"
                  />
                  <label htmlFor={`article-${article.id}`} className="text-sm">
                    {article.title} 
                    {article.price > 0 && <span className="text-gray-500 ml-2">({article.price.toFixed(2)} €)</span>}
                  </label>
                </div>
              ))}
            </div>
          )}
          <p className="text-xs text-gray-500 mt-1">
            Select articles this user has purchased
          </p>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="avatar">
            Profile Photo
          </label>
          
          {imagePreview && (
            <div className="mb-3">
              <p className="text-sm font-medium text-gray-700 mb-2">Current Photo:</p>
              <div className="relative h-20 w-20">
                <img 
                  src={imagePreview} 
                  alt="User avatar" 
                  className="h-full w-full object-cover rounded-full border"
                />
              </div>
            </div>
          )}
          
          <div className="flex items-center mt-3">
            <input
              type="file"
              id="avatar"
              name="avatar"
              ref={fileInputRef}
              onChange={handleFileChange}
              className="hidden"
              accept="image/*"
            />
            <button
              type="button"
              onClick={() => fileInputRef.current.click()}
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              {imagePreview ? 'Change Photo' : 'Upload Photo'}
            </button>
            <span className="ml-3 text-gray-600 text-sm">
              {selectedFile ? selectedFile.name : 'No new file chosen'}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-end">
          <button
            type="submit"
            disabled={saving}
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${saving ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {saving ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
      </form>
    </div>
  );
} 