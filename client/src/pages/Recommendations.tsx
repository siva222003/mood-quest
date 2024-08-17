import { useEffect, useState } from "react";
import { Sidebar, SidebarBody } from "../components/ui/sidebar";
import { IconMusic, IconBrandBlogger, IconMicrophone2, IconVideo } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Recommendations from "@/components/recommendations/Recommendations";
import { api } from "@/axios";
import { RecommendationType } from "@/types";
import RecommendationsLoader from "@/components/loaders/RecommendationsLoader";
import { useAuth } from "@/context/AuthContext";

export default function SidebarDemo() {
  const links = [
    {
      label: "Blogs",
      href: "#blogs",
      icon: (
        <IconBrandBlogger className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Videos",
      href: "#videos",
      icon: <IconVideo className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />,
    },
    {
      label: "Podcasts",
      href: "#podcasts",
      icon: (
        <IconMicrophone2 className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Music",
      href: "#",
      icon: <IconMusic className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />,
    },
  ];

  const [open, setOpen] = useState(false);
  const [data, setData] = useState<RecommendationType[] | null>(null);
  const [apiLoading, setApiLoading] = useState(false);
  const [imagesLoading, setImagesLoading] = useState(true);

  const location = useLocation();
  const navigate = useNavigate();
  const { moods } = location.state || [];

  const { user } = useAuth();

  useEffect(() => {
    if (!moods || moods.length === 0) {
      if (!user) {
        navigate("/");
        return;
      }

      navigate("/questionnaire");
    }

    if (moods && moods.length > 0) {
      const fetchRecommendations = async () => {
        setApiLoading(true);
        try {
          const response = await api.post("/recommendations/tags", { tags: moods });
          setData(response.data.data);
        } catch (error) {
          console.error("Recommendations fetch failed:", error);
        } finally {
          setApiLoading(false);
        }
      };
      fetchRecommendations();
    }
  }, [moods]);

  useEffect(() => {
    if (data) {
      const imageUrls = data.map((recommendation) => recommendation.thumbnailUrl);

      if (!imageUrls || imageUrls.length === 0) {
        setImagesLoading(false);
        return;
      }

      let loadedImagesCount = 0;
      imageUrls.forEach((url) => {
        const img = new Image();
        img.src = url;
        img.onload = () => {
          loadedImagesCount += 1;
          if (loadedImagesCount === imageUrls.length) {
            setImagesLoading(false);
          }
        };
        img.onerror = () => {
          loadedImagesCount += 1;
          if (loadedImagesCount === imageUrls.length) {
            setImagesLoading(false);
          }
        };
      });
    }
  }, [data]);

  const handleClick = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const isLoading = apiLoading || imagesLoading;

  if (isLoading) {
    return <RecommendationsLoader />;
  }

  return (
    <div
      className={cn(
        "rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full flex-1 mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden",
        "max-h-screen"
      )}
    >
      <Sidebar animate={false} open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <button
                  key={idx}
                  onClick={() => handleClick(link.href.substring(1))}
                  className="flex items-center my-2"
                >
                  {link.icon}
                  <span className="ml-2 text-sm">{link.label}</span>
                </button>
              ))}
            </div>
          </div>
          <div></div>
        </SidebarBody>
      </Sidebar>

      <Recommendations data={data} />
    </div>
  );
}

export const Logo = () => {
  return (
    <Link
      to="/"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-black dark:text-white whitespace-pre"
      >
        MoodQuest
      </motion.span>
    </Link>
  );
};

export const LogoIcon = () => {
  return (
    <Link
      to="/"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
    </Link>
  );
};
