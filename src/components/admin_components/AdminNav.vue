<script setup>
import UserTab from './adminNav_component/UserTab.vue';
import TopBar from './adminNav_component/TopBar.vue';
</script>
<template>  
   <TopBar/>

   <v-navigation-drawer
          expand-on-hover
          rail
          color="#28DEB9"
        >
          <UserTab/>
  
          <v-divider></v-divider>
  
          <v-list density="compact" nav>
            <v-list-item prepend-icon="mdi-home" title="Home" value="home" to="/home"></v-list-item>
            <v-list-item prepend-icon="mdi-view-dashboard" title="Dashboard" value="dashboard" to="/dashboard"></v-list-item>
            
            <v-list-group prepend-icon="mdi-package-variant" title="Inventory" value="Inventory" class="nav-list" v-model="open">
              <template v-slot:activator="{ props }">
                <v-list-item v-bind="props" title="Inventory"></v-list-item>
              </template>

              <v-list-item v-for="([title, icon, route], i) in admins" :key="i" :to="route" :title="title" :prepend-icon="icon"
                :value="title">
              </v-list-item>
            </v-list-group>

            <v-list-item prepend-icon="mdi-point-of-sale" title="POS System" value="pos_system" to="/pos_system"></v-list-item>
          </v-list>
          
          <v-divider></v-divider>
  
          <v-list density="compact" nav>
            <v-list-item prepend-icon="mdi-account" title="User Account" value="user_account" to="/user_account"></v-list-item>
            <v-list-item prepend-icon="mdi-help-circle" title="Help" value="help" to="/help"></v-list-item>
          </v-list>
        </v-navigation-drawer> 
</template>

<style scoped>
.v-expansion-panel {
  background-color: transparent !important;
}

.v-list-item{
  color: white;
}

.v-divider {
  margin-bottom: 20px;
}

.v-navigation-drawer{
  margin-top: 25px;
}

</style>

<script>
export default {
  data: () => ({
    open: 'Inventory',
    admins: [
      ['Category', 'mdi-shape', '/category'],
      ['Products', 'mdi-food-variant', '/products'],
    ]
  }),
}
</script>