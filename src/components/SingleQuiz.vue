<template>
    <h2>Hii {{quizId}}</h2>
    <div class="container">
        <div class="input-group">
            <input class="form-control" type="text" v-model="question" placeholder="Type your question" required>
        </div>

        <div class="input-group">
            <input class="form-control" type="text" v-model="Answer.answerBody" placeholder="Type your answer" required>

        </div>

        <div v-for="(number, i) in optionNumber" v-bind:key="number">
            <p>Answer: {{number}} {{i}}</p>
            <div class="input-group">
                <input class="form-control" type="text" v-model="Answer.answerBody" placeholder="Type your answer" required>
                <input class="checkmark" type="checkbox" v-model="Answer.isCorrectAnswer">
            </div>
        </div>
        <button @click="makeQuestion" class="btn btn-success mt-3">Save</button>

        <div v-for="(value, i) in AllQuestions" v-bind:key="i">
            {{value.question}}
            {{value.answerOptions.answerBody}}
            {{value.answerOptions.isCorrectAnswer}}
        </div>
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
                    optionNumber: null,
                    answerBody: null,
                    isCorrectAnswer: false
                }
            }
        },
        methods: {
            makeQuestion() {
                const newQuestion = {
                    question: this.question
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
            makeAnswer() {
              const newAnswer = {
                answer: this.answer
              }

              window.axios.post('/api/answer', newAnswer, {
                headers: {'Content-Type': 'application/json'}
              })
                  .then(() => {
                    this.getAnswers()
                  })
                  .catch(error => {
                    console.error(error);
                  })
            },
            getAnswers() {
              window.axios.get('/api/answer')
                  .then((response) => {
                    this.AllAnswers = response.data;
                  })
                  .catch((error) => {
                    console.log(error)
                  })
            },
        },
        created() {
            this.getQuestions();
            this.getAnswers();
        }
    }
</script>

<style scoped>
    .checkmark {
        margin: auto;
        height: 25px;
        width: 25px;
        background-color: #eee;
    }
</style>