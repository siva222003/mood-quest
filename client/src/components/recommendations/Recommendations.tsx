import Blog from "./Blog";
import { RecommendationType } from "@/types";

interface RecommendationsProps {
  data: RecommendationType[] | null;
}

const Recommendations = ({ data }: RecommendationsProps) => {
  return (
    <div className="bg-white flex-1 overflow-auto">
      <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 lg:max-w-7xl lg:px-8">
        {/* Blogs */}

        <div className="mx-auto text-center ">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl ">
            Personalized Recommendations
          </h2>
          {/* <p className="mt-5 font-normal text-gray-600">
          Explore tailored suggestions based on your mood assessment. From insightful blogs to uplifting podcasts and videos, find resources designed to support and inspire you on your journey.
          </p> */}
        </div>

        {/* Blogs */}

        <div id="blogs">
          <h2 className="text-4xl my-8 font-semibold">Blogs</h2>
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {data?.map(
              (product, index) => product.type === "blog" && <Blog key={index} blog={product} />
            )}
          </div>
        </div>

        {/* Videos */}

        <div id="videos">
          <h2 className="text-4xl my-12 font-semibold">Videos</h2>
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {data?.map(
              (product, index) => product.type === "video" && <Blog key={index} blog={product} />
            )}
          </div>
        </div>

        {/* Podcasts */}

        <div id="podcasts">
          <h2 className="text-4xl my-12 font-semibold">Podcasts</h2>
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {data?.map(
              (product, index) => product.type === "podcast" && <Blog key={index} blog={product} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommendations;
