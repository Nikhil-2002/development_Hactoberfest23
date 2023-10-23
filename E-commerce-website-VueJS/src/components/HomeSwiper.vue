<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-2 mb-4" v-for="(item, index) in items" :key="index">
                <div class="card border-0 shadow-sm">
                    {{ item }}
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            items: [ "Google", "Apple", "Walton", "Unilever", "H&M", "Gucci"] // Example item names
        };
    }
};
</script>
  
<style scoped>


.card {
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    font-weight: bold;
    color: #333;
    transition: all 0.3s ease;
    cursor: pointer;
}

.card:hover {
    transform: scale(1.05);
    box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.1);
}
</style>
  