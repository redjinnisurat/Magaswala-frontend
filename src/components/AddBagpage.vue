<template>
    <MyNavbar />
    <ShoppingBag />
    <MyUsersBought />
</template>

<script>

import MyNavbar from "@/components/MyNavbar.vue"
import ShoppingBag from "@/components/ShoppingBag.vue"
import MyUsersBought from "@/components/MyUsersBought.vue"

export default {
    name : "AddBagpage",
    components: { MyNavbar, ShoppingBag, MyUsersBought }
}

</script>

<style scoped>
@media screen and (max-width: 590px) {
    body{
        overflow: hidden;
    }
}
</style>