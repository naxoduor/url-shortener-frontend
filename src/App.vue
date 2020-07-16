<template>
  <div id="app">
    <Header />
    <AddUrl v-on:add-url="addNewUrl"/>
    <table class="table">
      <thead>
        <tr>
          <th>Full Url</th>
          <th>Shortened url</th>
        </tr>
      </thead>
      <tbody>
        <tr v-bind:key="url_item.id" v-for="url_item in this.url_list">
          <td>{{url_item.full}}</td>
          <td>{{url_item.short}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Header from './components/layout/Header'
import AddUrl from './components/AddUrl'
import axios from 'axios'

export default {
  name: 'App',
  components: {
    Header,
    AddUrl
  },
  data() {
    return {
      url_list:[]
    }
  },
  methods: {
    addNewUrl(newUrlItem){
      const{fullUrl} = newUrlItem
      axios.post("http://127.0.0.1:5000/shortUrls", 
      {
        fullUrl
      })
      .then(res=>this.url_list=[...this.url_list, res.data])
      .catch(err=>console.log(err))
    }

  },
  created(){
    axios.get('http://127.0.0.1:5000/')
    .then(res=>this.url_list=res.data)
    .catch(err=>console.log(err))

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.btn{
  display: inline-block;
  border: none;
  background: #555;
  color: #fff;
  padding: 7px 20px;
  cursor: pointer;
}

.btn:hover{
  background: #664;
}
</style>
