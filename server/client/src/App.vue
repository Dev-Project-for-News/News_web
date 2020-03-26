<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <a href="#" class="navbar-brand">Project</a>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <a href="/" class="nav-link">Новости</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">Категории</a>
        </li>
        <li class="nav-item">
          <a href="/news/create" class="nav-link">Добавить</a>
        </li>
      </div>
    </nav>

    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>