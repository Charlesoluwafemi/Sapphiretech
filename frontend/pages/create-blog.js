// pages/create-blog.js

import { useState } from 'react';

export default function CreateBlog() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [metaTitle, setMetaTitle] = useState('');
  const [metaDescription, setMetaDescription] = useState('');
  const [keywords, setKeywords] = useState('');
  const [image, setImage] = useState(null);
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('meta_title', metaTitle);
    formData.append('meta_description', metaDescription);
    formData.append('keywords', keywords);
    if (image) formData.append('image', image);
    if (file) formData.append('file', file);

    const res = await fetch('http://localhost:8000/api/posts/', {
      method: 'POST',
      body: formData,
    });

    if (res.ok) {
      console.log('Blog post created successfully!');
    } else {
      console.error('Error creating blog post');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <textarea placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} required />
      <input type="text" placeholder="Meta Title" value={metaTitle} onChange={(e) => setMetaTitle(e.target.value)} />
      <textarea placeholder="Meta Description" value={metaDescription} onChange={(e) => setMetaDescription(e.target.value)} />
      <input type="text" placeholder="Keywords" value={keywords} onChange={(e) => setKeywords(e.target.value)} />
      <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button type="submit">Create Blog Post</button>
    </form>
  );
}
