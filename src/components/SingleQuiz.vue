<template>
    <h2>Hii {{quizId}}</h2>
    <div class="container">
        <input class="form-control" type="text" v-model="question" placeholder="Type your question" required>
    <div v-for="(value, i) in AllQuestions" v-bind:key="i">
        {{value.question}}
    </div>
        <input class="form-control" type="number" v-model="Answer.optionNumber" placeholder="How many answers" required>
        <div v-for="(number, i) in Answer.optionNumber" v-bind:key="number">
            <p>Answer: {{number}} {{i}}</p>
            <div class="input-group">
                <input class="form-control" type="text" v-model="Answer.answerBody" placeholder="Type your question" required>
                <button><input class="bi-bag-check" type="checkbox" v-model="Answer.isCorrectAnswer">Correct answer</button>
            </div>
        </div>
        <button @click="makeQuestion" class="btn btn-success mr-3">Save</button>
    </div>

</template>
<script>
    export default {
        name: "SingleQuiz",
        props: ["quizId"],
        data() {
            return {
                AllQuestions: [],
                Quiz: [],
                question: null,
                Answer: {
                    optionNumber: 0,
                    answerBody: null,
                    isCorrectAnswer: false
                }
            }
        },
        methods: {
            makeQuestion() {
                const newQuestion = {
                    question: this.question,
                    answerOptions: this.Answer
                }

                window.axios.post('/api/question', newQuestion, {
                    headers: {'Content-Type': 'application/json'}
                })
                    .then(() => {
                        this.getQuestions()
                    })
                    .catch(error => {
                        console.error(error);
                    })
            },
            getQuestions() {
                window.axios.get('/api/question')
                    .then((response) => {
                        this.AllQuestions = response.data;
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            },
        },
        created() {
            this.getQuestions();
        }
    }
</script>

<style scoped>

</style>