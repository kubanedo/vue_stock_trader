<template>
    <div class="row">
        <Stock v-for="stock in stocks" :key="stock.id" :stock="stock"></Stock>
    </div>
</template>

<script>
import Stock from './Stock.vue';
export default {
    components: {
        Stock: Stock
    },
    computed: {
        stocks() {
            return this.$store.getters.stocks;
        }
    }
}
</script>