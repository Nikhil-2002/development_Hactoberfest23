<template>
    <div class="home-section py-5">
        <div class="container">
            <h2 class="text-center mb-4">What Our Customers Say</h2>
            <div class="border-bottom mb-5"></div>
            <div class="row">
                <div class="col-md-4 mb-4" v-for="(testimonial, index) in testimonials" :key="index">
                    <div class="card p-4 mb-4 h-100 border-0 shadow-sm">
                        <div class="card-text mb-3">
                            "{{ testimonial.quote }}"
                        </div>
                        <div class="card-author">
                            <strong>{{ testimonial.name }}</strong><br>
                            {{ testimonial.location }}
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
            testimonials: [
                {
                    quote: "VueCommerce is a game-changer! Their products are of exceptional quality, and their delivery is lightning-fast. I'm a loyal customer!",
                    name: "Emily Davis",
                    location: "Chicago, IL"
                },
                {
                    quote: "The user-friendly interface of VueCommerce made my shopping experience effortless. I found everything I needed, and the checkout process was a breeze.",
                    name: "Michael Anderson",
                    location: "Houston, TX"
                },
                {
                    quote: "I highly recommend VueCommerce to anyone looking for top-quality products and outstanding service. Their team truly cares about customer satisfaction.",
                    name: "Sophia White",
                    location: "Miami, FL"
                }
            ]
        };
    }
};
</script>
  
<style scoped>
.home-section {
    background-color: #f8f9fa;
    min-height: 400px;
    height: 100%;
    padding: 60px 0;
}

.card {
    transition: all 0.3s ease;
    cursor: pointer;
}

.card:hover {
    transform: scale(1.05);
}

.card-text {
    font-size: 1.1rem;
    color: #333;
}

.card-author {
    font-size: 0.9rem;
    color: #666;
    margin-top: 10px;
}
.border-bottom {
    width: 200px;
    margin: auto;
}
</style>
  