

  <template>
    <v-app id="inspire">
      <v-navigation-drawer
              v-model = "drawer"
              app dark
              temporary
              fixed
      >
        <v-list dense>


          <v-list-item link :to="{name:'Dashboard'}">
            <v-list-item-action>
              <v-icon>mdi-home</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Dashboard</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item link :to="{name:'Register'}">
            <v-list-item-action>
              <v-icon>mdi-view-dashboard</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Register</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item link :to="{path:'AppLogin'}">
            <v-list-item-action>
              <v-icon>mdi-lock</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Login</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item link :to="{name:'Bezahlen'}">
            <v-list-item-action>
              <v-icon>mdi-settings</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Settings</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item link :to="{name:'Kontostand'}">
            <v-list-item-action>
              <v-icon>mdi-eye</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Kontostand</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-settings</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Bezahlen</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-app-bar
              app dark
              clipped-left
      >
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
        <v-toolbar-title>Finanz App</v-toolbar-title>
      </v-app-bar>

      <v-content style="background: lightsteelblue; width: 100%; height: 100%;">
        <v-container >
          <router-view></router-view>
        </v-container>
      </v-content>

      <v-footer app>
        <span>&copy; 2019</span>
      </v-footer>
    </v-app>
  </template>

  <script>
    import HelloWorld from './components/HelloWorld';

    export default {
      name: 'App',

      components: {
        HelloWorld,
      },

      data: () => ({
        //
      }),
      created() {
        this.$router.push({path: '/home'})
      },
      props: {
        source: String,
      },
      data: () => ({
        drawer: null,
      }),
      created () {
        this.$vuetify.theme.dark = true
      }
    };
  </script>
  © 2019 GitHub, Inc.
  Terms
  Privacy
  Security
  Status
  Help
  Contact GitHub
  Pricing
  API
  Training
  Blog
  About



