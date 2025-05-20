import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export default function About() {
  const getData = async () => {
    return axios
      .get("https://api.gravatar.com/v3/profiles/amsanei")
      .then((res) => res);
  };
  const { data, isLoading, isError } = useQuery({
    queryKey: ["profile"],
    queryFn: getData,
    refetchOnWindowFocus: false,
    retry: false,
  });

  return (
    <>
      {isLoading && <div className="text-center text-neutral-500 animate-pulse">Loading...</div>}
      {isError && <div className="text-center text-red-400">Something went wrong!<br /> Try Agin Later</div>}
      {data && (
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
          <img
            src={data?.data.avatar_url}
            alt={data?.data.display_name}
            className="rounded-full"
          />
          <div className="flex flex-col gap-4">
            <div className="text-center md:text-left">
              <div className="font-bold text-green-800">
                {data?.data.display_name}
              </div>
              <div className="text-sm text-neutral-500">
                {data.data.job_title}
              </div>
            </div>
            <div className="flex gap-4 text-sm text-neutral-500">
              <a
                href="https://github.com/amsanei"
                target="_blank"
                className="hover:text-green-800 transition-colors"
              >
                Github
              </a>
              <a
                href="https://www.figma.com/@amsanei"
                target="_blank"
                className="hover:text-green-800 transition-colors"
              >
                Figma
              </a>
              <a
                href="mailto:am.sanei79@gmail.com"
                className="hover:text-green-800 transition-colors"
              >
                Mail
              </a>
              <a
                href="https://amsanei.github.io"
                target="_blank"
                className="hover:text-green-800 transition-colors"
              >
                Website
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
