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
                <select v-model="form.selected">
                    <option disabled value="">Please select one</option>
                    <option>A</option>
                    <option>B</option>
                    <option>C</option>
                </select>
                <button @click="calculate">CALCULATE!</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        data(){
            return{
                form: {
                    amount: null,
                    selected: null
                }
            }
        },
        props: {
            msg: String
        },
        methods: {
            calculate(){

            }
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
</style>
