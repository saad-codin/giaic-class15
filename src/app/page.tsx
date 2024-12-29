import Link from "next/link";

export default async function Home() {
 interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
  }

  
  const url = await fetch("https://jsonplaceholder.typicode.com/posts");
  const res: Post[] = await url.json();

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-6">All Posts</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
       
        {res.map((post) => (
          <div key={post.id}  className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-200" >
            <Link href={`/${post.id}`} className="text-decoration-none">
              <h2 className="text-xl font-semibold mb-2 text-blue-600 hover:underline"> {post.title}</h2>
              <p className="text-gray-700 mb-3">{post.body.slice(0, 100)}...</p>
              <span className="text-sm text-gray-500">
                User ID: {post.userId} | Post ID: {post.id}
              </span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
