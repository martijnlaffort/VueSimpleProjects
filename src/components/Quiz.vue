<template>
    <div class="container">
        <p>Hi, this is the quiz page</p>
        <div id="app">
            <div class="flexright">
                <button @click="toggle = !toggle" class="btn btn-info quizbtn">Create new quiz</button>
            </div>
            <div class="block" v-show="toggle">
                <div class="input-group mb-2">
                    <input class="form-control quizform" type="text" v-model="Quiz.quizName" placeholder="Name of the quiz" required>
                    <input class="form-control quizform" type="text" v-model="Quiz.quizMaker" placeholder="Name of the maker" required>
                </div>
                <div class="flexright">
                    <button @click="makeQuiz" class="btn btn-success mr-3">Save</button>
                    <button @click="toggle = !toggle" class="btn btn-danger">Cancel</button>
                </div>
            </div>
        </div>
        <div class="quizAll">
            <div v-for="(value, i) in AllQuizzes" v-bind:key="i" class="quizSingle">
                <div v-if="value.quizName !== ''">
                    <div class="ml-3">
                        Quiz: {{value.quizName}}<br>
                        Made by: {{value.quizMaker}}
                    </div>
                    <div class="flexright">
                        <router-link :to="{ name: 'SingleQuiz', params: {quizId: i}}" class="btn btn-primary mr-2">View</router-link>
                        <button @click="deleteQuiz(i)" class="btn btn-danger">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Quiz",
    data() {
        return {
            toggle: false,
            Quiz: {
                quizName: null,
                quizMaker: null
            },
            AllQuizzes: []
        }
    },
    methods: {
        makeQuiz() {
            const newQuiz = {
                quizName: this.Quiz.quizName,
                quizMaker: this.Quiz.quizMaker
            }

            window.axios.post('/api/quiz', newQuiz, {
                headers: {'Content-Type': 'application/json'}
            })
                .then(() => {
                    this.getQuizzes()
                    this.toggle = false
                    this.Quiz = {quizName: null, quizMaker: null}
                })
                .catch(error => {
                    console.error(error);
                })
        },
        deleteQuiz(index) {
            window.axios.delete('/api/quiz/' + this.AllQuizzes[index]._id,
                {headers: {'Content-Type': 'application/json'}}
            ).then(() => {
                this.getQuizzes()
            }).catch(error => {
                console.log(error)
            })
        },
        goToSingleQuiz(index) {
            this.$router.push({name: 'SingleQuiz', params: {Qid: index}})
        },
        getQuizzes() {
            window.axios.get('/api/quiz')
                .then((response) => {
                    this.AllQuizzes = response.data;
                })
                .catch((error) => {
                    console.log(error)
            })
        }
    },
    created() {
        this.getQuizzes();
    }
}
</script>

<style scoped>
    .flex {
        display: flex;
    }
    .flexright {
        display: flex;
        justify-content: flex-end;
    }
    .block {
        outline-width: medium;
        outline-style: auto;
        outline-color: black;
        background-color: lightblue;
        margin-top: 1em;
    }
    .quizAll {
        margin-top: 2em;
        display: flex;
        flex-wrap: wrap;
    }
    .quizSingle {
        flex: 1 0 45%;
        text-align: left;
        font-size: large;
        margin: 5px;
        height: 100px;
        background-color: aliceblue;
        outline-width: thin;
        outline-color: black;
        outline-style: auto;
    }
    .quizSingle:hover {
        background-color: lightblue;
    }
    .quizbtn {
        border-radius: 20px;
        margin-right: 2em;
    }
    .quizbtn:hover {
        box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
    }
    .quizform {
        margin: 1em;
    }
    .miniblock {
        background-color: white;
        outline-color: black;
        outline-style: auto;
        outline-width: thin;
        max-width: 400px;
        margin: 2em;
    }
    .center {
        left: 50%;
        transform: translate(-50%, 0);
    }

</style>