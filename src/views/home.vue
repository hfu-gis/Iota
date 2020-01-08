<template>
  <div class="home">
      <v-row justify="right">
          <v-date-picker v-model="date1" :show-current="false"></v-date-picker>

      </v-row>
  </div>
</template>

<script>
    export default {
        data () {
            return {
                date1: new Date().toISOString().substr(0, 10),

            }
        },
    }


</script>

<style scoped>
/* CSS für diese Seite hier einfügen */
</style>
