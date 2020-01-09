<template>
    <div class="Dashboard">
        <h1 style="color: black">Dashboard </h1>
        <!-- HTML-Code aus dem Body-Tag hier einfügen -->
        <span style="color: black">Ausgaben/Einnahmen</span>


        <v-row style="width: 100%">
            <v-col cols="5">
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
            </v-col>
            <v-col cols="7">
                <v-simple-table dark>
                    <template v-slot:default>
                        <thead>
                        <tr>
                            <th class="text-left">Name</th>
                            <th class="text-left">Calories</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="item in Products" :key="item">
                            <td>{{ item.name }}</td>
                            <td>{{ item.price }}</td>
                        </tr>
                        </tbody>
                    </template>
                </v-simple-table>
            </v-col>
        </v-row>
    </div>

</template>

<script>
    import db from '../db'


    export default {

        name: 'Dashboard',

        components: {},

        props: {},

        data: () => ({
            user: [],

            value: [
                0,
                200,
                400,
                600,
                800,
                1000,
                1200,
            ],

            Products: [
                {
                    name: 'Frozen Yogurt',
                    price: 159,
                },
                {
                    name: 'Ice cream sandwich',
                    price: 237,
                },
                {
                    name: 'Eclair',
                    price: 262,
                },
                {
                    name: 'Cupcake',
                    price: 305,
                },
                {
                    name: 'Gingerbread',
                    price: 356,
                },
                {
                    name: 'Jelly bean',
                    price: 375,
                },
                {
                    name: 'Lollipop',
                    price: 392,
                },
                {
                    name: 'Honeycomb',
                  price: 408,
                },
                {
                    name: 'Donut',
                  price: 452,
                },
                {
                    name: 'KitKat',
                    price: 518,
                },
            ]
            /*Products: []*/
        }),

        watch: {},

        methods: {
            //andere Methoden, die während der Nutzung aufgerufen werden sollen
            beispiel() {

            }
        },

        //Init
        created() {

            /*db.collection('user').doc('test').get()
                    .then(doc => {
                      this.user = doc.data()
                    })
                    .catch(err => {
                      console.log('Error getting documents', err)
                    })
                    */
        }
    }
</script>


<style scoped>

</style>
