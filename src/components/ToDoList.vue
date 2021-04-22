<template>
    <div class="container small">
        <p>Hi, this is the to do list</p>
        <div class="input-group mb-3">
            <input class="form-control" v-model="thing" type="text" placeholder="What do you want to add to your list?">
            <button @click="addThing" class="btn btn-success">Add</button>
            <button @click="created" class="btn btn-success">cookie</button>
        </div>
                <div class="row table table-striped">
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>Options</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(value, i) in things" :key="i">
                                <td>
                                    <span v-if="!value.is_editing">{{value.text}}</span>
                                    <input v-else v-model="value.text" class="form-control">
                                </td>
                                <td>
                                    <div v-if="!value.is_editing">
                                        <button @click="value.is_editing = !value.is_editing" class="btn btn-info mr-2">Edit</button>
                                        <button @click="deleteThing(i)" class="btn btn-danger">X</button>
                                    </div>
                                    <div v-else>
                                        <button @click="value.is_editing = false; value.text = value._snapshot" class="btn btn-danger mr-2">Cancel</button>
                                        <button @click="saveThing(i)" class="btn btn-success">Save</button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
    </div>
</template>

<script>
    export default {
        name: "ToDoList",
        data() {
            return {
                disabled: true,
                thing: null,
                things: []
            }
        },

        methods: {
            addThing(){
                this.things.push({
                    is_editing: false,
                    text: this.thing,

                    _snapshot: this.thing
                });
                this.thing = "";
            },
            saveThing(index){
                this.things[index] = {
                    text: this.things[index].text,
                    is_editing: false,

                    _snapshot: this.things[index].text
                }
            },
            deleteThing(index){
                this.things.splice(index, 1)
            },
            created() {
                this.$cookies.set("keyName", "keyValue", 60);
            }
        },
    }
</script>

<style scoped>
.small{
    max-width: 40%;
}
</style>