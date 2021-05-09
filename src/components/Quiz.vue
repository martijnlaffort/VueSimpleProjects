<template>
    <div class="container">
        <p>Hi, this is the quiz page</p>
        <div id="app">
            <button @click="toggle = !toggle" class="btn btn-info flex mb-2">Create new quiz</button>
            <div class="block" v-show="toggle">
                <div class="input-group mb-2">
                    <input class="form-control mr-2" type="text" v-model="quizName" placeholder="Name of the quiz" required>
                    <input class="form-control ml-2" type="text" v-model="makerName" placeholder="Name of the maker" required>
                </div>
                <div class="flex">
                    <button @click="toggle = !toggle" class="btn btn-danger">Cancel</button>
                    <button @click="makeQuiz" class="btn btn-success ml-3">Save</button>
                </div>
        </div>
            <div class="quizAll">
                <div v-for="(value, i) in quizzes" v-bind:key="i">
                    <div class="quizSingle" v-if="value.totalQuizName !== ''">
                        <div class="ml-3">
                            Quiz: {{value.totalQuizName}}
                        </div>
                        <div class="ml-3">
                            Made by: {{value.totalMakerName}}
                        </div>
                        <div class="flexright">
                            <button @click="deleteQuiz(i)" class="btn btn-danger">Delete</button>
                            <button @click="goToSingleQuiz(i)" class="btn btn-primary">View</button>
                        </div>
                    </div>
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
                quizzes: [{
                    totalQuizName: '',
                    totalMakerName: '',
                }]
            }
        },methods: {
            makeQuiz(){
                this.quizzes.push({
                    toggle: true,
                    totalQuizName: this.quizName,
                    totalMakerName: this.makerName,
                })
                this.quizName = ""
                this.makerName = ""
            },
            deleteQuiz(index){
                this.quizzes.splice(index, 1)
            },
            goToSingleQuiz(index){
                this.$router.push({name: 'SingleQuiz', params: {Qid:index}})
            }
        }
    }
</script>

<style scoped>
    .flex{
        display: flex;
    }
    .flexright{
        display: flex;
        justify-content: flex-end;
    }
    .center {
        left: 50%;
        transform: translate(-50%, 0);
    }

.block{
    outline-width: medium;
    outline-style: auto;
    outline-color: black;
    background-color: gray;
}
    .miniblock{
        background-color: white;
        outline-color: black;
        outline-style: auto;
        outline-width: thin;
        max-width: 400px;
        margin: 2em;
    }
    .quizAll{
        margin-top: 2em;
        background-color: aliceblue;
    }
    .quizSingle{
        text-align: left;
        font-size: large;
        margin: 0.5em;
        outline-width: thin;
        outline-color: black;
        outline-style: auto;
    }
</style>