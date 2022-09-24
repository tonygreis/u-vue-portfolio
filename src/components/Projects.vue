<script setup>
import usePortfolio from "../composables/portfolio";
import { onMounted, ref } from "vue";
import Project from "./Project.vue";

const {
  skills,
  projects,
  selectedTab,
  getSkills,
  getProjects,
  filterProjects,
  filteredProjects,
} = usePortfolio();

onMounted(getSkills);
onMounted(getProjects);
</script>
<template>
  <div
    class="container mx-auto"
    v-motion
    :initial="{
      opacity: 0,
      y: 100,
    }"
    :visible="{
      opacity: 1,
      y: 0,
    }"
  >
    <nav
      class="
        relative
        w-full
        overflow-x-auto
        mb-12
        border-b-2 border-light-tail-100
        dark:text-dark-navy-100
      "
    >
      <ul class="inline-flex">
        <li class="cursor-pointer capitalize m-4">
          <button
            @click="filterProjects('all')"
            class="
              w-32
              text-center
              px-5
              py-2
              hover:bg-accent
              text-white
              rounded-md
              transition
            "
            :class="[
              selectedTab == 'all'
                ? 'bg-accent'
                : ' bg-light-tail-500 dark:bg-dark-navy-100',
            ]"
          >
            All
          </button>
        </li>
        <li
          v-for="projectSkill in skills"
          :key="projectSkill.id"
          class="cursor-pointer capitalize m-4"
        >
          <button
            @click="filterProjects(projectSkill.id)"
            class="
              w-32
              text-center
              px-5
              py-2
              hover:bg-accent
              text-white
              rounded-md
              transition
            "
            :class="[
              selectedTab == projectSkill.id
                ? 'bg-accent'
                : 'bg-light-tail-500 dark:bg-dark-navy-100',
            ]"
          >
            {{ projectSkill.name }}
          </button>
        </li>
      </ul>
    </nav>
    <section
      class="grid gap-y-12 md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:gap-8"
    >
      <Project
        v-for="project in filteredProjects"
        :key="project.id"
        :project="project"
        :selectedTab="selectedTab"
      />
    </section>
  </div>
</template>