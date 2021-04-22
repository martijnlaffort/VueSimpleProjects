<template>
    <div class="container">
        <p>Hi, this is the quiz page</p>
        <div id="app">
            <button @click="toggle = !toggle" class="btn btn-info flex">Create new quiz</button>
            <div class="block" v-show="toggle">
                <div class="input-group mb-2">
                    <input class="form-control mr-2" type="text" placeholder="Name of the quiz">
                    <input class="form-control ml-2" type="text" placeholder="Name of the maker">
                </div>
                <button class="btn btn-success">Save</button>
        </div>

        <div class="block">
            <div class="miniblock" v-for="quiz in quizzes" v-bind:key="quiz.quizName">
                {{quiz.quizName}}
                {{quiz.makerName}}
            </div>
        </div>
    </div>
    </div>
</template>

<script>
    export default {
        name: "Quiz",
        data(){
            return{
                toggle: false,
                quizName: null,
                makerName: null,
                quizzes: [
                    this.quizName, this.makerName
                ]
            }
        },
    }
</script>

<style scoped>
    .flex{
        display: flex;
        margin-bottom: 2em;
    }
    .center {
        left: 50%;
        transform: translate(-50%, 0);
    }

.block{
    outline-width: medium;
    outline-style: auto;
    outline-color: black;
    background-color: cadetblue;
}
    .miniblock{
        background-color: white;
        outline-color: black;
        outline-style: auto;
        outline-width: thin;
        max-width: 400px;
        margin: 2em;
    }
</style>