<template>
    <div>
        <h3>Url List</h3>
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
export default {
    name: "urllist",
    props:["url_list"]
    
}
</script>

<style scoped>

</style>