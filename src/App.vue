

  <template>
    <v-app id="inspire">
      <v-navigation-drawer
              v-model="drawer"
              app
              clipped
      >
        <v-list dense>
          <v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-view-dashboard</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Dashboard</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link>
            <v-icon>mdi-view-dashboard</v-icon>
              <v-list-item-action>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Login</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link :to="{AppLogin:'/home'}">
            <v-list-item-action>
              <v-icon>mdi-settings</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Settings</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link>
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
              app
              clipped-left
      >
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
        <v-toolbar-title>Application</v-toolbar-title>
      </v-app-bar>

      <v-content>
        <v-container
                class="fill-height"
                fluid
        >

              <router-view  @login="isLoggedIn=$event"/>


        </v-container>
      </v-content>

      <v-footer app>
        <span>&copy; 2019</span>
      </v-footer>
    </v-app>
  </template>

  <script>
    export default {
      props: {
        source: String,
      },
      data: () => ({
        drawer: null,
      }),
      created () {
        this.$vuetify.theme.dark = true
      },
    }
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
  }
};
</script>
