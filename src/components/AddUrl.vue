<template>
    <div>
        <h1>Add Url</h1>
        <form @submit="addUrl">
            <input type="text" v-model="fullUrl" name="fullUrl" id="" placeholder="Enter the Url to be shortened">
            <input type="submit" class="btn" value="Submit">
        </form>
    </div>
</template>

<script>
export default {
    name:"AddUrl",
    data(){
        return {
            fullUrl:''
        }
    },
    methods:{
        addUrl(e){
            e.preventDefault()
            const newUrlItem={
                fullUrl:this.fullUrl
            }
            this.$emit('add-url',newUrlItem)
            this.fullUrl=''
        }
    },
    
}
</script>

<style scoped>
form {
    display: flex;
}
input[type="text"] {
    flex: 10;
    padding: 5px;
}

input[type="submit"]{
    flex: 2;
}

</style>