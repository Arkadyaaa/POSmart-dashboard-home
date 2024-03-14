<template>
<v-dialog max-width="500">
  <template v-slot:activator="{ props: activatorProps }">
    <v-btn
      v-bind="activatorProps"
      variant="flat"
      size="tiny"
    >
    <v-icon :icon="icon" size="30" :color="color" @click="openDialog"></v-icon>
    </v-btn>
  </template>

  <template v-slot:default="{ isActive }">
    <v-card title="WIP">
      <v-card-text>
        Not yet Implemented.
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn
          text="Close Dialog"
          @click="isActive.value = false"
        ></v-btn>
      </v-card-actions>
    </v-card>
  </template>
</v-dialog>
</template>

<style scoped>
</style>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: "mdi-pencil-circle"
    },
    color:{
      type: String,
      default: "#0077B6"
    }
  }
};
</script>
