import SinglePost from '@/app/components/Posts/SinglePost';
import React from 'react';

const PostDetails = ({params}) => {
  return (
    <div>
      <h3 className="text-center my-4 text-4xl font-bold">Single Post</h3>
      <SinglePost id={params.id}/>
    </div>
  );
};

export default PostDetails;