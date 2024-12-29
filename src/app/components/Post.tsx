
export default async function PostPage({ params }: { params: { id: string } }) {
    const url = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    const post = await url.json();
  
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center py-8 px-4">
        <div className="bg-white p-6 rounded-lg shadow-md max-w-lg">
          <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
          <p className="text-gray-700 mb-4">{post.body}</p>
          <span className="text-sm text-gray-500">
            User ID: {post.userId} | Post ID: {post.id}
          </span>
         
        </div>
      </div>
    );
  }
  