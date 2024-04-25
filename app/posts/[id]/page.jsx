import SinglePost from '@/app/components/Posts/SinglePost';
import axios from 'axios';
import React from 'react';

export const generateMetadata = async ({params})=>{
    try {
      const res = await axios.get(`http://localhost:5000/posts/${params.id}`);
      const post = res.data;
      const metaData = {
        title : post.name,
        description : post.description
      }
      return metaData;
    } catch (error) {
      throw new Error("Error fetching post data", error)
    }

}
const PostDetails = ({params}) => {
  return (
    <div>
      <h3 className="text-center my-4 text-4xl font-bold">Single Post</h3>
      <SinglePost id={params.id}/>
    </div>
  );
};

export default PostDetails;