<template>
    <div class="container mt-5">
        <div class="card shadow-sm border-0">
            <div class="card-body">
                <div v-if="product" class="row">
                    <div class="col-md-6">
                        <img :src="product.image" class="img-fluid" alt="Product Image">
                    </div>
                    <div class="col-md-6">
                        <h2>{{ product.title }}</h2>
                        <p><strong>Price:</strong> ${{ product.price }}</p>
                        <p class="text-capitalize"><strong>Category:</strong> {{ product.category }}</p>
                        <p><strong>Description:</strong> {{ product.description }}</p>
                        <div class="star-rating">
                            {{ generateStarRating(product.rating.rate) }} ({{ product.rating.count }})
                        </div>
                        <div class="mt-4">
                            <button class="btn btn-primary me-2">Buy Now</button>
                            <button class="btn btn-outline-primary">Add to Cart</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        <!-- Related Products Section -->
        <h3 class="mt-5 mb-4 text-center">Related Products</h3>
        <div class="border-bottom mb-5"></div>
        <div class="row">
            <div v-for="(relatedProduct, index) in relatedProducts" :key="index" class="col-md-3">
                <div class="card p-3 h-100 shadow-sm border-0">
                    <div class="card-img">
                        <img :src="relatedProduct.image" class="img" alt="Related Product Image">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title"><router-link :to="'/Vuecommerce/product/' + relatedProduct.id">{{ relatedProduct.title
                        }}</router-link></h5>
                        <p class="card-text"><strong>Price: ${{ relatedProduct.price }}</strong></p>
                        <div class="star-rating">
                            {{ generateStarRating(relatedProduct.rating.rate) }} ({{ relatedProduct.rating.count }})
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            product: null,
            relatedProducts: []
        };
    },
    watch: {
        '$route.params.id': 'fetchData'
    },
    methods: {
        async fetchData() {
            const productId = this.$route.params.id;

            try {
                let [productResponse, productsResponse] = await Promise.all([
                    fetch(`https://fakestoreapi.com/products/${productId}`),
                    fetch("https://fakestoreapi.com/products")
                ]);

                if (productResponse.ok) {
                    this.product = await productResponse.json();
                } else {
                    console.error("Error fetching product details:", productResponse.status);
                }

                if (productsResponse.ok) {
                    let data = await productsResponse.json();
                    this.relatedProducts = data.filter(product => product.id !== parseInt(productId)).slice(0, 4);
                } else {
                    console.error("Error fetching related products:", productsResponse.status);
                }
            } catch (error) {
                console.error("Error:", error);
            }
        },
        generateStarRating(rating) {
            const roundedRating = Math.round(rating * 2) / 2;
            const stars = '⭐'.repeat(Math.floor(roundedRating));
            const halfStar = (roundedRating % 1 !== 0) ? '⭐' : '';
            return `${stars}${halfStar}`;
        }
    },
    async created() {
        await this.fetchData();
    }


}
</script>

<style scoped>
a {
    text-decoration: none;
    color: #000;
}

a:hover {
    text-decoration: underline;
    opacity: 0.8;
}

.card-text {
    font-weight: 300;
}

.border-bottom {
    width: 200px;
    margin: auto;
}

.card-img {
    text-align: center;
}

.card-body {
    position: relative;
    bottom: 0;
}


.img {
    width: 200px;
    height: 200px;
    object-fit: contain;
}

.img-fluid {
    width: 100%;
    height: 400px;
    object-fit: contain;
}

.star-rating {
    font-size: 15px;
    color: #FFD700;
}
</style>
