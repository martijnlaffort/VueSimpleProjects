<template>
    <div class="container">
        <div class="card center" style="width: 24rem;">
            <div class="card-body">
                <h5 class="card-title">Tip Calculator</h5>
                <p class="card-text text-left">How much was your bill?</p>
                <div class="input-group mb-3">
                    <span class="input-group-text">$</span>
                    <input class="form-control" v-model="form.amount" type="number" placeholder="Bill Amount">
                </div>

                <div class="mb-3">
                    <div class="d-flex">
                        <span>How was your service</span>
                        <div class="ml-auto">
                            <small>Tip percentage: {{ form.selectedService }}%</small>
                        </div>
                    </div>
                    <select class="form-control" v-model="form.selectedService">
                        <option value="">Choose an option</option>
                        <option
                                v-for="option of options"
                                :key="option.value"
                                :value="option.value">{{option.text}}</option>
                    </select>
                </div>

                <p class="text-left">How many people are sharing the bill?</p>
                <div class="input-group mb-3">
                    <input class="form-control" v-model="form.people" type="number" placeholder="Number of people">
                    <span class="input-group-text">people</span>
                </div>
                <button @click="calculate" class="btn btn-success">CALCULATE!</button>

                <p class="mt-3" v-if="answer !== null">Your tip should be: {{answer}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    const options = [
        {
            "value": 5,
            "text": "Bad"
        },
        {
            "value": 10,
            "text": "Average"
        },
        {
            "value": 15,
            "text": "Good"
        }
    ];

    export default {
        name: 'HelloWorld',
        data() {
            return {
                form: {
                    amount: null,
                    selectedService: null,
                    people: null,
                },
                options: options,
                answer: null,
            }
        },
        methods: {
            calculate() {
                this.answer = (this.form.amount * (this.form.selectedService / 100) / this.form.people).toFixed(2);
            },
        }

    }
</script>
<style scoped>
    .center {
        left: 50%;
        transform: translate(-50%, 0);
    }
</style>
