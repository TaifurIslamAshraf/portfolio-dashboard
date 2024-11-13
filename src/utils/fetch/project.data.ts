import config from "@/config/env";

const serverApi = config.serverApi;

export const getAllProjects = async () => {
  try {
    const projects = await fetch(`${serverApi}/projects/all-projects`);

    return projects;
  } catch (error) {
    console.log(`all projects - ${error}`);
  }
};
