import { RecommendationType } from "@/types";

interface BlogProps {
  blog: RecommendationType;
}

const Blog = ({ blog }: BlogProps) => {
  return (
    <a href={blog.url} target="_blank" className="group p-4 shadow-md rounded-lg">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
        <img
          loading="lazy"
          src={blog.thumbnailUrl}
          className="h-52 w-full object-cover object-center group-hover:opacity-75"
        />
      </div>
      <h3 className="mt-4 text-[16px] text-gray-700">{blog.title}</h3>
      <p className="text-sm mt-2 text-gray-500" >{blog.description.slice(0, 60)}...</p>
    </a>
  );
};

export default Blog;
