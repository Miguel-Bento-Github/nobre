<template>
  <nav class="nav">
    <RouterLink class="nav-link" to="/">Home</RouterLink>
    <RouterLink class="nav-link" to="/About">About</RouterLink>
  </nav>
</template>

<style>
.nav {
  display: flex;
  justify-content: space-evenly;
  padding: 8px 10vw;
  box-shadow: 0 0 8px #222;
}

.nav-link {
}
</style>
