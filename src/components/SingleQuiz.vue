<template>
    <h2>Hii</h2>
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
        props: ["id"],
        data() {
            return {
                AllQuizzes: [],
                Quiz: []
            }
        },
        methods: {
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
                window.axios.get('/api/quiz' + this.AllQuizzes[this.params.quizId]._id)
                    .then((response) => {
                        this.Quiz = response.data;
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            }
        },
        created() {
            this.getQuizzes();
            this.getSingleQuiz()
        }
    }
</script>

<style scoped>

</style>