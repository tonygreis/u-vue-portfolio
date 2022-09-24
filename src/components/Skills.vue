<script setup>
import usePortfolio from "../composables/portfolio";
import { onMounted } from "vue";

const { skills, getSkills } = usePortfolio();

onMounted(getSkills);
</script>
<template>
  <section class="bg-light-tail-100 dark:bg-dark-navy-500 py-24">
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
      <div class="grid grid-cols-8 md:grid-flow-col">
        <div
          v-for="skill in skills"
          :key="skill.id"
          class="flex items-center justify-center"
        >
          <img :src="skill.image" class="lg:h-20" :alt="skill.name" />
        </div>
      </div>
    </div>
  </section>
</template>