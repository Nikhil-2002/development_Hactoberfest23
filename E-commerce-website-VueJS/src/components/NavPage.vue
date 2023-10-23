<template>
    <nav class="navbar navbar-expand-lg sticky-top navbar-light bg-white shadow-sm">
        <div class="container p-2">
            <router-link class="navbar-brand" to="/Vuecommerce">VueCommerce</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav ms-auto">
                    <router-link class="nav-link" to="/Vuecommerce">Home</router-link>
                    <div class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Categories
                        </a>
                        <ul class="dropdown-menu" id="categoryDropdown">
                            <li v-for="(category, index) in categories" :key="index">
                                <router-link class="dropdown-item text-capitalize" :to="'/Vuecommerce/category/' + category">{{ category
                                }}</router-link>
                            </li>
                        </ul>
                    </div>
                    <router-link class="nav-link" to="/Vuecommerce/about">About Us</router-link>
                    <router-link class="nav-link" to="/Vuecommerce/contact">Contact Us</router-link>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            categories: []
        };
    },
    mounted() {
        this.fetchCategories();
    },
    methods: {
        fetchCategories() {
            fetch("https://fakestoreapi.com/products/categories")
                .then(response => response.json())
                .then(data => {
                    this.categories = data;
                })
                .catch(error => {
                    console.error("Error fetching categories:", error);
                });
        }
    }
}
</script>

<style scoped>
.navbar-brand {
    font-weight: bold;
}
.nav-link {
    font-weight: 500;
}
.nav-link:hover {
    color: #000;
}
</style>
