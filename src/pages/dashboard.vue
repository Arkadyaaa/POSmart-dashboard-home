<script setup>
  import adminLayout from '../layouts/AdminLayout.vue'
  import dashboardCard from '../components/DashboardCard.vue'
  import stockLevelColor from '../components/StockLevelColor.vue'
  import tempWIP from '../components/TempWIP.vue'
</script>
<template>
  <adminLayout />
  <v-main>
    <v-container>
      <v-row>
        <h1>Dashboard</h1>
      </v-row>

      <v-row>
        <h2>Summary</h2>
      </v-row>

      <v-row cols="4">

        <v-col>
        <dashboardCard
          :secondColumnText="'Total Products'"
          :amount="368"
          color="#49A658" 
          to="/products"
        />
        </v-col>

        <v-col>
        <dashboardCard
          :secondColumnText="'Total Categories'"
          :amount="6"
          color="#59CFB7"
          to="/category"
        />
        </v-col>

        <v-col>
        <dashboardCard
          :secondColumnText="'Out of Stocks'"
          :amount="2"
          color="#FF0000"
          to="/products"
        />
        </v-col>

        <v-col>
        <dashboardCard
          :secondColumnText="'Low Stocks'"
          :amount="40"
          color="#FFCD1E"
          to="/products"
        />
        </v-col>

        <v-col>
        <dashboardCard
          :secondColumnText="'Total Sales'"
          :amount="1368"
          color="#B550E4"
          to="/pos_system"
        />
        </v-col>

      </v-row>
      
      <v-row>
        <h1>Products</h1>
      </v-row>
      
      <v-row>
        <v-card width="100%" class="mt-5" height="250px">
          <v-table fixed-header height="300px">
            <thead>
              <tr>
                <th v-for="h in headers" :key="h.text" :class="h.class">
                  <span>{{h.text}}</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in products" :key="item.name">
                <td>{{ item.name }}</td>
                <td>{{ item.category }}</td>
                <td>{{ item.stock }}</td>
                <td>{{ item.price }}</td>
                <td :style="getStockLevelStyle(item.stocklevel)">{{ item.stocklevel }}</td>
                <td>
                  <tempWIP :icon="'mdi-pencil-circle'" :color="'#0077B6'"/>
                  <tempWIP :icon="'mdi-delete-circle'" :color="'#FF5252'"/>
                </td>
              </tr>
            </tbody>
          </v-table>
        </v-card>
      </v-row>
      
      <v-dialog v-model="dialog" max-width="500px">
        <temp-wip />
      </v-dialog>

    </v-container>
  </v-main>
</template>

<style>
.table-header {
  background-color: #0077B6 !important;
  color: white;
  font-size: 20px;
  font-weight: bold !important;
}

h2{
  margin-top: 20px;
}

</style>

<script>
  export default {
    data() {
      return {
        dialog: false,

        headers: [
          { text: 'Product Name', value: 'name', class: 'table-header'  },
          { text: 'Category', value: 'category', class: 'table-header' },
          { text: 'Stock', value: 'stock', class: 'table-header' },
          { text: 'Price', value: 'price', class: 'table-header' },
          { text: 'Stock Level', value: 'stocklevel', class: 'table-header' },
          { text: 'Action', value: 'action', class: 'table-header' },
        ],

        products: [
        { name: 'Ponkan', category: 'Fruits', stock: 20, price: 50.00, stocklevel: 'Balance Stocks' },
        { name: 'Bawang', category: 'Vegetables', stock: 649, price: 176.00, stocklevel: 'Balance Stocks' },
        { name: 'Brocoli', category: 'Vegetables', stock: 15, price: 264.00, stocklevel: 'Low Stock' },
        { name: 'Celery', category: 'Vegetables', stock: 0, price: 27.50, stocklevel: 'Out of Stock' },
      ],
      }
    },

    methods: {
      getStockLevelStyle(stockLevel) {
        if (stockLevel === 'Balance Stocks') {
          return { color: '#32FF53' };
        } else if (stockLevel === 'Low Stock') {
          return { color: '#FFCD1E' }; 
        } else if (stockLevel === 'Out of Stock') {
          return { color: '#F00B0B' }; 
        }
        return {};
      }
    }
  }
</script>