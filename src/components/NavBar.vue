<template>
    <nav class="navbar navbar-expand-sm navbar-light">
        <div class="collapse navbar-collapse" id="appnav">
            <div class="nav navbar-nav">
                <router-link to="/" class="nav-item nav-link">TipCalculator</router-link>
                <router-link to="/todolist" class="nav-item nav-link">ToDoList</router-link>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "NavBar"
    }
</script>

<style scoped>

</style>