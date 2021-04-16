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
                <p class="text-left">How was your service?</p>
                <div class="dropdown text-left dropd">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Choose an option
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <div class="dropdown-item" v-for="option in form.serviceOptions"
                             :key="option.value"
                             :value="option.value"
                             @click="form.selectedService = option.value">
                            {{option.text}}
                        </div>
                    </div>
                    <span>Tip percentage: {{ form.selectedService }}%</span>
                </div>
                <p class="text-left">How many people are sharing the bill?</p>
                <div class="input-group mb-3">
                    <input class="form-control" v-model="form.people" type="number" placeholder="Number of people">
                    <span class="input-group-text">people</span>
                </div>
                <button @click="calculate" class="btnCal">CALCULATE!</button>
                <p>Your tip should be: {{answer}}</p>
            </div>
        </div>
    </div>
</template>
<!--                <div class = "dropdown" id="serviceDropdown">-->
<!--                     v-model="form.selectedService"-->
<!--                     text="Select Item"-->
<!--                     variant="primary"-->
<!--                     class="m-md-2">>-->
<!--                    <div class="dropdown-menu" disabled value="0">Select an Item</div>-->

<!--                </div>-->
<script>
    export default {
        name: 'HelloWorld',
        data(){
            return{
                form: {
                    amount: null,
                    selected: null,
                    service: null,
                    selectedService: null,
                    people: null,
                    serviceOptions: [
                        {
                            "value": "5",
                            "text": "Bad"
                        },
                        {
                            "value": "10",
                            "text": "Average"
                        },
                        {
                            "value": "15",
                            "text": "Good"
                        }
                    ],

                },
                answer: null
            }
        },
        props: {
            msg: String
        },
        methods: {
            calculate(){
                // this.answer = this.form.selectedService;
                this.answer = this.form.amount * (this.form.selectedService / 100) / this.form.people
            },
        }

    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }
    a {
        color: #42b983;
    }
    .center {
        left: 50%;
        transform: translate(-50%, 0);
    }
    .btnCal {
        margin-top: 1em;
        margin-bottom: 1em;
    }
    .dropd {
        margin-bottom: 1em;
    }
</style>
