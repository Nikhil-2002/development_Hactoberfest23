<template>
        <HomeCarosual />
        <HomeFeatures />
        <HomeFeaturedProducts/>
        <HomeLatestProducts/>
        <HomeSwiper/>
        <HomeTestimonials/>
</template>
<script>
import HomeCarosual from '../components/HomeCarosual.vue';
import HomeFeatures from '../components/HomeFeatures.vue';
import HomeFeaturedProducts from '../components/HomeFeaturedProducts.vue';
import HomeLatestProducts from '../components/HomeLatestProducts.vue';
import HomeTestimonials from '../components/HomeTestimonials.vue';
import HomeSwiper from '../components/HomeSwiper.vue';
export default {
    name: 'HomePage',
    components: {
        HomeCarosual,
        HomeFeatures,
        HomeFeaturedProducts,
        HomeLatestProducts,
        HomeTestimonials,
        HomeSwiper
    }
}
</script>
