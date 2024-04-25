import Posts from "../components/Posts/Posts";

export const metadata = {
    title: "About Page",
    description: "About Page Description",
  };
const PostsPage = () => {
    return (
        <div>
            <h3 className="text-center my-4 text-4xl font-bold">All Posts</h3>
            <Posts/>
        </div>
    );
};

export default PostsPage;