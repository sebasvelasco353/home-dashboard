<template>
  <nav>
    <RouterLink to="/">Home Dashboard</RouterLink>
    <ul>
      <li>
        <RouterLink to="/profile">Home Profile</RouterLink>
      </li>
      <li>
        <RouterLink to="/profile">User Profile</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { useConfigsStore } from '@/stores/configs.js'

const { isDarkMode } = useConfigsStore()
console.log(isDarkMode)
</script>

<style lang="scss" scoped>
nav {
  width: 100%;
  height: 6rem;
  display: flex;
  flex-direction: row;
  padding: 1rem 3rem;
  background-color: transparent;
  justify-content: space-between;
  align-items: center;
  ul {
    list-style-type: none;
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }
}
a {
  font-size: 1.8rem;
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    color: antiquewhite;
  }
}
</style>
