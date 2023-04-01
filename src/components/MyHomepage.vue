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
    name : "MyHomepage",
    components: { MyNavbar, ShoppingBag, MyUsersBought }
}

</script>