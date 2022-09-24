import axios from "axios";
import { ref } from "vue";

export default function usePortfolio() {
  const skills = ref([]);
  const projects = ref([]);
  const filteredProjects = ref([]);
  const selectedTab = ref("all");

  const getSkills = async () => {
    const response = await axios.get("skills");
    skills.value = response.data.data;
  };

  const getProjects = async () => {
    const response = await axios.get("projects");
    projects.value = response.data.data;
    filteredProjects.value = response.data.data;
  };

  const filterProjects = (id) => {
    if (id === "all") {
      filteredProjects.value = projects.value;
      selectedTab.value = id;
    } else {
      filteredProjects.value = projects.value.filter((project) => {
        return project.skill.id === id;
      });
      selectedTab.value = id;
    }
  };
  return {
    skills,
    projects,
    getSkills,
    getProjects,
    selectedTab,
    filterProjects,
    filteredProjects,
  };
}
