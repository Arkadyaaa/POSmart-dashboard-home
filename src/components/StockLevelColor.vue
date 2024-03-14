<template>
    <p v-if="stringValue === 'Balance Stocks'" :style="{ color: '#32FF53' }">Balance Stocks</p>
    <p v-else-if="stringValue === 'Low Stock'" :style="{ color: '#FFCD1E' }">Low Stock</p>
    <p v-else-if="stringValue === 'Out of Stock'" :style="{ color: '#F00B0B' }">Out of Stock</p>
    <p v-else>Invalid input</p>
</template>

<script>
export default {
  data() {
    return {
      stringValue: 'Balance Stocks'
    };
  }
};
</script>
