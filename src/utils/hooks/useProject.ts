import { useQuery } from "@tanstack/react-query";
import { getAllProjects } from "../fetch/project.data";

export const useGetAllProjects = () => {
  return useQuery({
    queryKey: ["project"],
    queryFn: () => getAllProjects(),
  });
};
