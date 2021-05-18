<template>
    <div class="container">
        Hi, Welcome to my VueJs projects.<br>
        There are multiple simple and some more complicated project made which can be found in the navigation bar.<br>
        Hope you like it!
    </div>
    <div class="footer">
        <p>All code is written by Martijn Laffort.</p>
    </div>
</template>

<script>
    export default {
        name: "Home"
    }
</script>

<style scoped>
    .footer {
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        background-color: aliceblue;
        color: gray;
        text-align: center;
    }
</style>