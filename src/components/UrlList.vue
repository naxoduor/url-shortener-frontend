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
          <td><a href="/">{{url_item.full}}</a></td>
          <td class="short_url"><a href="/">{{url_item.short}}</a></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "urllist",
  props: ["url_list"]
};
</script>

<style scoped>
</style>