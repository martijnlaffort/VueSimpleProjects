<template>
    <nav class="navbar navbar-expand-sm navbar-light navbarcolor">
        <div class="collapse navbar-collapse" id="appnav">
            <div class="nav navbar-nav">
                <router-link to="/" class="nav-item nav-link">Home</router-link>
                <router-link to="/tipcalculator" class="nav-item nav-link">TipCalculator</router-link>
                <router-link to="/todolist" class="nav-item nav-link">ToDoList</router-link>
                <router-link to="/quiz" class="nav-item nav-link">Quiz</router-link>
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
    .navbarcolor{
        background-color: aliceblue;
        margin-bottom: 3em;
    }
</style>