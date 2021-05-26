<template>
    <h2>Hii {{quizId}}</h2>
    <div v-for="(value, i) in Quiz" v-bind:key="i" class="quizSingle">
        <div v-if="value.quizName !== ''">
            <div class="ml-3">
                Quiz: {{value.quizName}}<br>
                Made by: {{value.quizMaker}}
            </div>
        </div>
    </div>

</template>
<script>
    export default {
        name: "SingleQuiz",
        props: ["quizId"],
        data() {
            return {
                AllQuizzes: [],
                Quiz: [],
                Question: null
            }
        },
        methods: {
            makeQuestion() {
                const newQuestion = {
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
            getQuizzes() {
                window.axios.get('/api/quiz')
                    .then((response) => {
                        this.AllQuizzes = response.data;
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            },
            getSingleQuiz(){
                window.axios.get('/api/quiz/' + this.AllQuizzes)
                    .then((response) => {
                        this.Quiz = response.data;
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            }
        },
        mounted() {
            this.getQuizzes();
            this.getSingleQuiz();
        }
    }
</script>

<style scoped>

</style>