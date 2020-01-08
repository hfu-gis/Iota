<template>
  <div class="Dashboard">
    <h1 style="color: black">Dashboard 1</h1>
    <!-- HTML-Code aus dem Body-Tag hier einfügen -->
    <span style="color: black">Ausgaben/Einnahmen</span>
    <v-card
            class="mx-auto text-center"
            color="darkblue"
            dark
            max-width="600"
    >
      <v-card-text>
        <v-sheet color="rgba(0, 0, 0, .12)">
          <v-sparkline
                  :value="value"
                  color="rgba(255, 255, 255, .7)"
                  height="150"
                  padding="24"
                  stroke-linecap="round"
                  smooth
          >
            <template v-slot:label="item">
              €{{ item.value }}
            </template>
          </v-sparkline>
        </v-sheet>
      </v-card-text>

      <v-card-text>
        <div class="display-1 font-weight-thin">Ausgaben der letzten 24h</div>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions class="justify-center">
        <v-btn block text></v-btn>
      </v-card-actions>
    </v-card>
  </div>

</template>

<script>
export default {
  // gebt jeder Page einen eigenen Namen
  name: 'Dashboard',

  // benötigte Komponenten
  components: {},

  // entspricht den HTML-Attributen
  props: {},

  // Variablen-Speicher
  data: () => ({
    value: [
      0,
      200,
      400,
      600,
      800,
      1000,
      1200,
    ],
  }),

  // reagieren auf prop-Veränderung
  watch: {},

  // interne Methoden
  methods: [],

  // Initialisierung
  created() {}
}
</script>

<style scoped>
/* CSS für diese Seite hier einfügen */
</style>
