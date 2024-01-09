import React from 'react';
import appwriteService from "../appwrite/config";
import { Link } from 'react-router-dom';


function PostCard({$id, title, featuredImage}) {
  return (
    <Link to={`/post/${$id}`}>
      <div className='w-full bg-white rounded-xl p-4'>
        <div className='w-64 h-48 justify-center mb-4'>
            <img w-64 src={appwriteService.getFilePreview(featuredImage)} alt={title}
            className='rounded-xl' />
        </div>
        <h2
        className='text-xl font-bold'
        >{title}</h2>
      </div>
    </Link>
  )
}

export default PostCard
