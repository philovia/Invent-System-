<template>
  <div id="app">
    <Sidebar />
    <div class="main-content">
      <router-view />
    </div>
  </div>
</template>

<script>
import Sidebar from './components/MainSidebar.vue';

export default {
  name: 'AppSidebar',
  components: {
    Sidebar
  }
};
</script>

<style>
#app {
  display: flex;
}

.main-content {
  flex: 1;
  padding: 20px;
}
</style>
