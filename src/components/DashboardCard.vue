<template>
  <v-card width="368" height="150">
    <v-row align="center">
      <v-col cols="2" align-self="center" class="card-left">
        <v-icon icon="mdi-package-variant-closed" size="40" color="white"></v-icon>
      </v-col>

      <v-col cols="10" class="card-right" :style="{ 'background-color': color }">
        <v-card-text class="card-text">
          {{ secondColumnText }}
        </v-card-text>

        <v-card-text class="card-text text1">
          {{ amount }}
        </v-card-text>

      </v-col>
    </v-row>
  </v-card>
</template>

<style scoped>

.card-left {
  background-color: #666666;
  padding-top: 16%;
  padding-bottom: 16%;
}

.v-icon{
  margin-left:5px;
}

.card-right {
  margin-top:12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.card-text {
  color: white;
  font-family: 'Roboto Slab';
  font-size: 30px;
}

.text1 {
  font-size: 40px;
  margin-bottom:20px;
}
</style>

<script>
export default {
  props: {
    secondColumnText: {
      type: String,
      default: ""
    },
    amount:{
        type: Number,
        default: 1
    },
    color: {
      type: String,
      default: "white" // Default color if not provided
    }
  }
};
</script>
