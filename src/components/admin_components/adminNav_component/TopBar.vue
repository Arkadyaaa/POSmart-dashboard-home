<template>
  <v-system-bar>
    <div class="left-items" >
      <img class="logo" src="@/assets/pmorgis-logo.png" >
      <p class="system-bar-text"> POSMart </p>
    </div>
  </v-system-bar>
</template>

<style scoped>
.v-system-bar {
  display: flex;
  justify-content: space-between;
  align-items: center; 
  padding:25px;
  background-color: #0077B6;
  color: white;
}

.system-bar-text {
  font-size: 25px;
  margin-top: 3px;
  margin-left: 10px;
  font-family: Aemstel Regular;
}

.logo{
  display: flex;
  width: 37px;
  height: 28px;
}

.left-items {
  display: flex;
}
</style>
