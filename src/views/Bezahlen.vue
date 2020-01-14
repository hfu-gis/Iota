<template>
  <body>

  <section class="wallet-widget">

    <article class="wallet">

      <div class="wallet-header wallet-widget__header">

        <h2 class="wallet-widget__title">Bezahlungsmöglichkeiten</h2><!-- /.wallet-widget__title -->


      </div>
      <!-- /.wallet__header -->

      <div class="wallet-cards">

        <div class="wallet-card wallet-card--visa wallet-card--is-active" data-balance-dollars="729" data-balance-cents="00" data-card="2562">

          <div class="wallet-card__content">

            <div class="wallet-card__logo wallet-card__logo--visa"></div><!-- /.wallet-card__logo wallet-card__logo--visa -->
            <span class="wallet-card__number"><span class="wallet-card__number--astricks">**** **** ****</span> 2562</span>
            <span class="wallet-card__exp">Ablaufdatum: 12/17</span>

          </div>
          <!-- /.wallet-card__content -->

        </div>
        <!-- /.wallet-card -->

        <div class="wallet-card wallet-card--amex" data-balance-dollars="829" data-balance-cents="50" data-card="2100">

          <div class="wallet-card__content">

            <div class="wallet-card__logo wallet-card__logo--amex"></div><!-- /.wallet-card__logo wallet-card__logo--amex -->
            <span class="wallet-card__number"><span class="wallet-card__number--astricks">**** **** ****</span> 2100</span>
            <span class="wallet-card__exp">Ablaufdatum: 07/19</span>

          </div>

        </div>
        <!-- /.wallet-card -->

        <div class="wallet-card wallet-card--master-card" data-balance-dollars="929" data-balance-cents="74" data-card="8335">

          <div class="wallet-card__content">

            <div class="wallet-card__logo wallet-card__logo--master-card"></div><!-- /.wallet-card__logo wallet-card__logo--master-card -->
            <span class="wallet-card__number"><span class="wallet-card__number--astricks">**** **** ****</span> 8335</span>
            <span class="wallet-card__exp">Ablaufdatum: 09/17</span>

          </div>

        </div>
        <!-- /.wallet-card -->

      </div><!-- /.wallet-cards -->

    </article>
    <!-- /.wallet -->

    <article class="balance">

      <div class="wallet-widget__header">

        <h2 class="wallet-widget__title">Current Balance</h2><!-- /.wallet-widget__title -->

        <div class="available" data-dollar>

          <span class="available__currency">&#36;</span>
          <span class="available__amount">0</span>.
          <span class="available__cents">00</span>

        </div>
        <!-- /.available -->

      </div>
      <!-- /.balance__header -->

      <div class="divider"></div><!-- /.divider -->

      <div class="transaction-wrap">

        <div class="transaction" data-card="2562">

          <div class="transaction__details">

            <span class="icon icon--minus"></span>
            <h3 class="transaction__name">Apple iPhone 6, 6g GB</h3> <!-- /.transaction__name -->
            <h4 class="transaction__info">Electronics #343223  - 12 July, 2015</h4><!-- /.transaction__info -->

          </div><!-- /.transaction__details -->

          <div class="transaction__amount transaction__amount--negative">

            <span class="wallet-widget__currency">&#36;</span>
            <span class="wallet-widget__amount">650.</span>
            <span class="wallet-widget__cents">00</span>

          </div>
          <!-- /.transaction__amount transaction__amount--negative -->

        </div>
        <!-- /.transaction -->

        <div class="transaction" data-card="2562">


          <div class="transaction__details">

            <span class="icon icon--plus"></span>
            <h3 class="transaction__name">Funds Added</h3> <!-- /.transaction__name -->
            <h4 class="transaction__info">Payment #343212 - 11 July, 2015</h4><!-- /.transaction__info -->

          </div><!-- /.transaction__details -->

          <div class="transaction__amount transaction__amount--positive">

            <span class="wallet-widget__currency">&#36;</span>
            <span class="wallet-widget__amount">900.</span>
            <span class="wallet-widget__cents">00</span>

          </div>
          <!-- /.transaction__amount transaction__amount--positive -->

        </div>
        <!-- /.transaction -->

        <div class="transaction" data-card="2562">


          <div class="transaction__details">

            <span class="icon icon--minus"></span>
            <h3 class="transaction__name">Energy Bill</h3> <!-- /.transaction__name -->
            <h4 class="transaction__info">#343566 - 11 July, 2015</h4><!-- /.transaction__info -->

          </div><!-- /.transaction__details -->

          <div class="transaction__amount transaction__amount--negative">

            <span class="wallet-widget__currency">&#36;</span>
            <span class="wallet-widget__amount">84.</span>
            <span class="wallet-widget__cents">96</span>

          </div>
          <!-- /.transaction__amount transaction__amount--negative -->

        </div>
        <!-- /.transaction -->

        <div class="transaction" data-card="2562">


          <div class="transaction__details">

            <span class="icon icon--minus"></span>
            <h3 class="transaction__name">Mega Image SRL</h3> <!-- /.transaction__name -->
            <h4 class="transaction__info">Food&Health #34365 - 11 July, 2015</h4><!-- /.transaction__info -->

          </div><!-- /.transaction__details -->

          <div class="transaction__amount transaction__amount--negative">

            <span class="wallet-widget__currency">&#36;</span>
            <span class="wallet-widget__amount">112.</span>
            <span class="wallet-widget__cents">75</span>

          </div>
          <!-- /.transaction__amount transaction__amount--negative -->

        </div>
        <!-- /.transaction -->

        <div class="transaction" data-card="2562">

          <div class="transaction__details">

            <span class="icon icon--minus"></span>
            <h3 class="transaction__name">ATM DV24</h3> <!-- /.transaction__name -->
            <h4 class="transaction__info">#343253 - 09 July, 2015</h4><!-- /.transaction__info -->

          </div><!-- /.transaction__details -->

          <div class="transaction__amount transaction__amount--negative">

            <span class="wallet-widget__currency">&#36;</span>
            <span class="wallet-widget__amount">200.</span>
            <span class="wallet-widget__cents">00</span>

          </div>
          <!-- /.transaction__amount transaction__amount--negative -->

        </div>
        <!-- /.transaction -->

        <div class="transaction" data-card="2562">


          <div class="transaction__details">

            <span class="icon icon--minus"></span>
            <h3 class="transaction__name">Lukoil Station</h3> <!-- /.transaction__name -->
            <h4 class="transaction__info">Gas #343279  - 09 July, 2015</h4><!-- /.transaction__info -->

          </div><!-- /.transaction__details -->

          <div class="transaction__amount transaction__amount--negative">

            <span class="wallet-widget__currency">&#36;</span>
            <span class="wallet-widget__amount">190.</span>
            <span class="wallet-widget__cents">48</span>

          </div>
          <!-- /.transaction__amount transaction__amount--negative -->

        </div>
        <!-- /.transaction -->

        <div class="transaction" data-card="2100">


          <div class="transaction__details">

            <span class="icon icon--plus"></span>
            <h3 class="transaction__name">Funds Added</h3> <!-- /.transaction__name -->
            <h4 class="transaction__info">Payment #343212 - 11 July, 2015</h4><!-- /.transaction__info -->

          </div><!-- /.transaction__details -->

          <div class="transaction__amount transaction__amount--positive">

            <span class="wallet-widget__currency">&#36;</span>
            <span class="wallet-widget__amount">900.</span>
            <span class="wallet-widget__cents">00</span>

          </div>
          <!-- /.transaction__amount transaction__amount--positive -->

        </div>
        <!-- /.transaction -->

        <div class="transaction" data-card="2100">

          <div class="transaction__details">

            <span class="icon icon--minus"></span>
            <h3 class="transaction__name">Apple iPhone 5, 64g GB</h3> <!-- /.transaction__name -->
            <h4 class="transaction__info">Electronics #343223  - 6 October, 2015</h4><!-- /.transaction__info -->

          </div><!-- /.transaction__details -->

          <div class="transaction__amount transaction__amount--negative">

            <span class="wallet-widget__currency">&#36;</span>
            <span class="wallet-widget__amount">650.</span>
            <span class="wallet-widget__cents">00</span>

          </div>
          <!-- /.transaction__amount transaction__amount--negative -->

        </div>
        <!-- /.transaction -->

        <div class="transaction" data-card="2100">


          <div class="transaction__details">

            <span class="icon icon--minus"></span>
            <h3 class="transaction__name">Energy Bill</h3> <!-- /.transaction__name -->
            <h4 class="transaction__info">#343566 - 11 July, 2015</h4><!-- /.transaction__info -->

          </div><!-- /.transaction__details -->

          <div class="transaction__amount transaction__amount--negative">

            <span class="wallet-widget__currency">&#36;</span>
            <span class="wallet-widget__amount">84.</span>
            <span class="wallet-widget__cents">96</span>

          </div>
          <!-- /.transaction__amount transaction__amount--negative -->

        </div>
        <!-- /.transaction -->



        <div class="transaction" data-card="2100">

          <div class="transaction__details">

            <span class="icon icon--minus"></span>
            <h3 class="transaction__name">ATM DV24</h3> <!-- /.transaction__name -->
            <h4 class="transaction__info">#343253 - 09 July, 2015</h4><!-- /.transaction__info -->

          </div><!-- /.transaction__details -->

          <div class="transaction__amount transaction__amount--negative">

            <span class="wallet-widget__currency">&#36;</span>
            <span class="wallet-widget__amount">200.</span>
            <span class="wallet-widget__cents">00</span>

          </div>
          <!-- /.transaction__amount transaction__amount--negative -->

        </div>
        <!-- /.transaction -->

        <div class="transaction" data-card="2100">


          <div class="transaction__details">

            <span class="icon icon--minus"></span>
            <h3 class="transaction__name">Lukoil Station</h3> <!-- /.transaction__name -->
            <h4 class="transaction__info">Gas #343279  - 09 July, 2015</h4><!-- /.transaction__info -->

          </div><!-- /.transaction__details -->

          <div class="transaction__amount transaction__amount--negative">

            <span class="wallet-widget__currency">&#36;</span>
            <span class="wallet-widget__amount">190.</span>
            <span class="wallet-widget__cents">48</span>

          </div>
          <!-- /.transaction__amount transaction__amount--negative -->

        </div>
        <!-- /.transaction -->

        <div class="transaction" data-card="2100">


          <div class="transaction__details">

            <span class="icon icon--minus"></span>
            <h3 class="transaction__name">Mega Image SRL</h3> <!-- /.transaction__name -->
            <h4 class="transaction__info">Food&Health #34365 - 11 July, 2015</h4><!-- /.transaction__info -->

          </div><!-- /.transaction__details -->

          <div class="transaction__amount transaction__amount--negative">

            <span class="wallet-widget__currency">&#36;</span>
            <span class="wallet-widget__amount">112.</span>
            <span class="wallet-widget__cents">75</span>

          </div>
          <!-- /.transaction__amount transaction__amount--negative -->

        </div>
        <!-- /.transaction -->

        <div class="transaction" data-card="8335">


          <div class="transaction__details">

            <span class="icon icon--minus"></span>
            <h3 class="transaction__name">Energy Bill</h3> <!-- /.transaction__name -->
            <h4 class="transaction__info">#343566 - 11 July, 2015</h4><!-- /.transaction__info -->

          </div><!-- /.transaction__details -->

          <div class="transaction__amount transaction__amount--negative">

            <span class="wallet-widget__currency">&#36;</span>
            <span class="wallet-widget__amount">84.</span>
            <span class="wallet-widget__cents">96</span>

          </div>
          <!-- /.transaction__amount transaction__amount--negative -->

        </div>
        <!-- /.transaction -->

        <div class="transaction" data-card="8335">


          <div class="transaction__details">

            <span class="icon icon--plus"></span>
            <h3 class="transaction__name">Funds Added</h3> <!-- /.transaction__name -->
            <h4 class="transaction__info">Payment #343212 - 11 July, 2015</h4><!-- /.transaction__info -->

          </div><!-- /.transaction__details -->

          <div class="transaction__amount transaction__amount--positive">

            <span class="wallet-widget__currency">&#36;</span>
            <span class="wallet-widget__amount">900.</span>
            <span class="wallet-widget__cents">00</span>

          </div>
          <!-- /.transaction__amount transaction__amount--positive -->

        </div>
        <!-- /.transaction -->

        <div class="transaction" data-card="8335">

          <div class="transaction__details">

            <span class="icon icon--minus"></span>
            <h3 class="transaction__name">Apple iPhone 5, 64g GB</h3> <!-- /.transaction__name -->
            <h4 class="transaction__info">Electronics #343223  - 20 October, 2015</h4><!-- /.transaction__info -->

          </div><!-- /.transaction__details -->

          <div class="transaction__amount transaction__amount--negative">

            <span class="wallet-widget__currency">&#36;</span>
            <span class="wallet-widget__amount">650.</span>
            <span class="wallet-widget__cents">00</span>

          </div>
          <!-- /.transaction__amount transaction__amount--negative -->

        </div>
        <!-- /.transaction -->

        <div class="transaction" data-card="8335">


          <div class="transaction__details">

            <span class="icon icon--minus"></span>
            <h3 class="transaction__name">Mega Image SRL</h3> <!-- /.transaction__name -->
            <h4 class="transaction__info">Food&Health #34365 - 11 July, 2015</h4><!-- /.transaction__info -->

          </div><!-- /.transaction__details -->

          <div class="transaction__amount transaction__amount--negative">

            <span class="wallet-widget__currency">&#36;</span>
            <span class="wallet-widget__amount">112.</span>
            <span class="wallet-widget__cents">75</span>

          </div>
          <!-- /.transaction__amount transaction__amount--negative -->

        </div>
        <!-- /.transaction -->

        <div class="transaction" data-card="8335">


          <div class="transaction__details">

            <span class="icon icon--minus"></span>
            <h3 class="transaction__name">Lukoil Station</h3> <!-- /.transaction__name -->
            <h4 class="transaction__info">Gas #343279  - 09 July, 2015</h4><!-- /.transaction__info -->

          </div><!-- /.transaction__details -->

          <div class="transaction__amount transaction__amount--negative">

            <span class="wallet-widget__currency">&#36;</span>
            <span class="wallet-widget__amount">190.</span>
            <span class="wallet-widget__cents">48</span>

          </div>
          <!-- /.transaction__amount transaction__amount--negative -->

        </div>
        <!-- /.transaction -->

        <div class="transaction" data-card="8335">

          <div class="transaction__details">

            <span class="icon icon--minus"></span>
            <h3 class="transaction__name">ATM DV24</h3> <!-- /.transaction__name -->
            <h4 class="transaction__info">#343253 - 09 July, 2015</h4><!-- /.transaction__info -->

          </div><!-- /.transaction__details -->

          <div class="transaction__amount transaction__amount--negative">

            <span class="wallet-widget__currency">&#36;</span>
            <span class="wallet-widget__amount">200.</span>
            <span class="wallet-widget__cents">00</span>

          </div>
          <!-- /.transaction__amount transaction__amount--negative -->

        </div>
        <!-- /.transaction -->

      </div>
      <!-- /.transaction-wrap -->

    </article>
    <!-- /.balance -->


    <aside class="wallet-widget-modal">

      <div class="wallet-widget-modal__body">

        <p class="wallet-widget-modal__title">
          Add New Card
        </p>
        <!-- /.wallet-widget-modal__title -->

        <form action="" class="wallet-widget-modal-form">

          <div class="wallet-widget-modal-form--error"></div>

          <div class="wallet-widget-modal-form--field-wrap wallet-widget-modal-form--card-type">

            <input type="radio" name="card-type" id="visa" value="visa" />
            <label for="visa"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/384009/_logo-visa.png" alt="Visa Card" height="30" /></label>

            <input type="radio" name="card-type" id="amex" value="amex" />
            <label for="amex"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/384009/_logo-amex.png" alt="Amex Card" height="30" /></label>

            <input type="radio" name="card-type" id="master-card" value="master-card" />
            <label for="master-card"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/384009/_logo-master-card.png" alt="Master Card" height="30" /></label>

          </div>
          <!-- /.wallet-widget-modal-form--field-wrap -->

          <div class="wallet-widget-modal-form--field-wrap wallet-widget-modal-form__card-number">

            <label for="card-number1" class="wallet-widget-modal-form__label">Card Number</label>

            <input class="wallet-widget-modal-form__input wallet-widget-modal-form__input--card-number" type="text" name="card-number1" id="card-number1" size="4" maxlength="4" />
            -
            <input class="wallet-widget-modal-form__input wallet-widget-modal-form__input--card-number" type="text" name="card-number2" id="card-number2" size="4" maxlength="4"/>
            -
            <input class="wallet-widget-modal-form__input wallet-widget-modal-form__input--card-number" type="text" name="card-number3" id="card-number3" size="4" maxlength="4"/>
            -
            <input class="wallet-widget-modal-form__input wallet-widget-modal-form__input--card-number" type="text" name="card-number4" id="card-number4" size="4" maxlength="4"/>

          </div>

          <!-- /.wallet-widget-modal-form--field-wrap -->
          <div class="wallet-widget-modal-form--field-wrap wallet-widget-modal-form__expiry">

            <label for="card-expiry" class="wallet-widget-modal-form__label">Card Expiration</label>

            <select name='expireMM' id='expireMM'>
              <option value=''>Month</option>
              <option value='01'>Janaury</option>
              <option value='02'>February</option>
              <option value='03'>March</option>
              <option value='04'>April</option>
              <option value='05'>May</option>
              <option value='06'>June</option>
              <option value='07'>July</option>
              <option value='08'>August</option>
              <option value='09'>September</option>
              <option value='10'>October</option>
              <option value='11'>November</option>
              <option value='12'>December</option>
            </select>

            <select name='expireYY' id='expireYY'>
              <option value=''>Year</option>
              <option value='16'>2016</option>
              <option value='17'>2017</option>
              <option value='18'>2018</option>
              <option value='19'>2019</option>
              <option value='20'>2020</option>
              <option value='21'>2021</option>
              <option value='22'>2022</option>
              <option value='23'>2023</option>
              <option value='24'>2024</option>
            </select>

            <input class="wallet-widget-modal-form__input--hidden" type="hidden" name="card-expiry" id="card-expiry" maxlength="4"/>

          </div>
          <!-- /.wallet-widget-modal-form--field-wrap -->



          <div class="wallet-widget-modal-form--field-wrap">

            <label for="card-balance" class="wallet-widget-modal-form__label">Card Balance</label>

            $<input type="number" class="wallet-widget-modal-form__input" name="card-balance" id="card-balance" min="0" max="9999" size="4" /> . <input type="number" class="wallet-widget-modal-form__input" name="currencyCents" min="0" max="99" size="2" />

          </div>
          <!-- /.wallet-widget-modal-form--field-wrap -->

          <div class="wallet-widget-modal-form--field-wrap">

            <input type="submit" name="add-card" value="Add Card" class="wallet-widget-modal-form__submit" />

          </div>
          <!-- /.wallet-widget-modal-form--field-wrap -->

        </form>
        <!-- /.wallet-widget-modal-form -->

      </div><!-- /.wallet-widget-modal__body -->

    </aside><!-- /.wallet-widget-modal -->

  </section>
  <!-- /.wallet-widget -->

  </body>

</template>

<script>
  export default {
    // gebt jeder Page einen eigenen Namen
    name: 'Kontostand',

    // benötigte Komponenten
    components: {},

    // entspricht den HTML-Attributen
    props: {},

    // Variablen-Speicher
    data() {

      return {}
    },

    // reagieren auf prop-Veränderung
    watch: {},

    // interne Methoden
    methods: [],

    // Initialisierung
    created() {}

  }

</script>

<style scoped>

  @import url(https://fonts.googleapis.com/css?family=Roboto:700,400|Open+Sans:400,700,600);
  body {
    color: #999999;
    font-family: "Open Sans", sans-serif;
    height: 100vh;
    line-height: 1.3;
    position: relative;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  .wallet-widget {
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transition: width 500ms ease-in-out;
    -webkit-transition: width 500ms ease-in-out;
    -moz-transition: width 500ms ease-in-out;
    -ms-transition: width 500ms ease-in-out;
    -o-transition: width 500ms ease-in-out;
    background: #ffffff;
    box-shadow: 0px 6px 20px 0 rgba(0, 0, 0, 0.5);
    height: 700px;
    left: 50%;
    overflow: hidden;
    position: absolute;
    top: 50%;
    width: 360px;
  }
  .wallet-widget--show {
    width: 880px;
  }
  .wallet-widget__title {
    font-size: 20px;
    font-weight: 400;
    float: left;
    margin: 0;
  }
  .wallet-widget__header {
    margin: 0 0 55px;
    overflow: hidden;
    position: relative;
  }

  .wallet-widget--overlay {
    transition: opacity 500ms ease-in-out;
    -webkit-transition: opacity 500ms ease-in-out;
    -moz-transition: opacity 500ms ease-in-out;
    -ms-transition: opacity 500ms ease-in-out;
    -o-transition: opacity 500ms ease-in-out;
    background-color: rgba(68, 71, 81, 0.5);
    height: 700px;
    opacity: 1;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 10;
  }

  .wallet {
    background: #f2f2f2;
    box-sizing: border-box;
    float: left;
    width: 360px;
  }
  .wallet__add {
    transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    transition: color 250ms ease-in-out;
    -webkit-transition: color 250ms ease-in-out;
    -moz-transition: color 250ms ease-in-out;
    -ms-transition: color 250ms ease-in-out;
    -o-transition: color 250ms ease-in-out;
    color: rgba(131, 147, 202, 0.3);
    cursor: pointer;
    display: block;
    font-size: 32px;
    font-weight: 700;
    left: 75%;
    position: absolute;
    top: 80%;
  }
  .wallet__add:hover {
    color: rgba(131, 147, 202, 0.7);
  }

  .wallet-header {
    padding: 55px 55px 0;
  }

  .wallet-cards {
    height: 560px;
    margin: 0 auto;
    overflow-y: scroll;
    width: 265px;
  }

  .wallet-card {
    background: #ffffff;
    border-radius: 6px;
    box-shadow: inset 0 0 0 2px #e1e1e1;
    clear: both;
    cursor: pointer;
    height: 150px;
    margin-bottom: 40px;
    overflow: hidden;
    width: 250px;
  }
  .wallet-card--added {
    transition: opacity 500ms ease-in-out;
    -webkit-transition: opacity 500ms ease-in-out;
    -moz-transition: opacity 500ms ease-in-out;
    -ms-transition: opacity 500ms ease-in-out;
    -o-transition: opacity 500ms ease-in-out;
  }
  .wallet-card:last-child {
    margin-bottom: 0;
  }
  .wallet-card__content {
    padding: 20px 0 20px 20px;
  }
  .wallet-card__number {
    display: block;
    font-family: "Roboto", sans-serif;
    font-size: 20px;
    margin: 10px 0;
    position: relative;
  }
  .wallet-card__number--astricks {
    position: relative;
    top: 3px;
  }
  .wallet-card__exp {
    display: block;
  }

  .wallet-card--is-active {
    box-shadow: inset 0 0 0 4px #8393ca;
  }

  .wallet-card__logo--visa {
    background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/384009/_logo-visa.png");
    background-repeat: no-repeat;
    width: 64px;
    height: 44px;
  }

  .wallet-card__logo--amex {
    background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/384009/_logo-amex.png");
    background-repeat: no-repeat;
    width: 64px;
    height: 44px;
  }

  .wallet-card__logo--master-card {
    background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/384009/_logo-master-card.png");
    background-repeat: no-repeat;
    width: 64px;
    height: 44px;
  }

  .balance {
    transition: all 500ms ease-in-out;
    -webkit-transition: all 500ms ease-in-out;
    -moz-transition: all 500ms ease-in-out;
    -ms-transition: all 500ms ease-in-out;
    -o-transition: all 500ms ease-in-out;
    box-sizing: border-box;
    float: left;
    opacity: 0;
    padding: 60px 50px 0 60px;
    width: 0;
  }
  .balance--show {
    opacity: 1;
    width: 520px;
  }

  .available {
    transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    color: #444751;
    font-size: 36px;
    font-weight: 700;
    position: absolute;
    right: 0;
    top: 50%;
    width: 95px;
  }
  .available__currency {
    left: -20px;
    position: absolute;
  }
  .available__cents {
    font-size: 18px;
    position: absolute;
    right: 0;
    top: 5px;
  }

  .transaction-wrap {
    transition: height 500ms cubic-bezier(0.17, 0.67, 0.83, 0.67);
    -webkit-transform: height 500ms cubic-bezier(0.17, 0.67, 0.83, 0.67);
    -moz-transform: height 500ms cubic-bezier(0.17, 0.67, 0.83, 0.67);
    -ms-transform: height 500ms cubic-bezier(0.17, 0.67, 0.83, 0.67);
    -o-transform: height 500ms cubic-bezier(0.17, 0.67, 0.83, 0.67);
    height: 0;
    overflow: hidden;
  }
  .transaction-wrap--show {
    height: 500px;
  }

  .transaction {
    overflow: hidden;
    margin-bottom: 35px;
    position: relative;
  }
  .transaction:last-child {
    margin-bottom: 0;
  }
  .transaction__details {
    float: left;
    overflow: hidden;
    position: relative;
    width: 80%;
  }
  .transaction__name {
    color: #444751;
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 10px;
  }
  .transaction__info {
    font-size: 14px;
    font-weight: 400;
  }
  .transaction__amount {
    float: left;
    font-size: 18px;
    font-weight: 600;
  }

  .transaction--hide {
    display: none;
    opacity: 0;
  }

  .transaction--show {
    display: block;
    opacity: 1;
  }

  .icon {
    display: block;
    float: left;
    position: relative;
    top: 15px;
  }

  .icon--minus {
    background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/384009/minus-icon.png");
    background-repeat: no-repeat;
    width: 40px;
    height: 50px;
  }

  .icon--plus {
    background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/384009/plus-icon.png");
    background-repeat: no-repeat;
    width: 40px;
    height: 50px;
  }

  .transaction__amount--positive {
    color: #66cc33;
  }

  .transaction__amount--negative {
    color: #8393ca;
  }

  .divider {
    background: #cccccc;
    height: 1px;
    margin-bottom: 55px;
    width: 100%;
  }

  .wallet-widget-modal {
    transform: translate(-50%, 50%);
    -webkit-transform: translate(-50%, 50%);
    -moz-transform: translate(-50%, 50%);
    -ms-transform: translate(-50%, 50%);
    -o-transform: translate(-50%, 50%);
    transition: opacity 250ms ease-in-out;
    -webkit-transition: opacity 250ms ease-in-out;
    -moz-transition: opacity 250ms ease-in-out;
    -ms-transition: opacity 250ms ease-in-out;
    -o-transition: opacity 250ms ease-in-out;
    background-color: #f2f2f2;
    border-radius: 4px;
    box-shadow: 0 2px 40px rgba(0, 0, 0, 0.4);
    left: 50%;
    opacity: 0;
    padding: 30px;
    position: absolute;
    width: 440px;
    z-index: -10;
  }
  .wallet-widget-modal--show {
    opacity: 1;
    z-index: 20;
  }
  .wallet-widget-modal__title {
    color: #8393ca;
    font-family: "Roboto", sans-serif;
    font-size: 24px;
    font-weight: 700;
    margin: 0;
  }

  .wallet-widget-modal--close {
    background: #000;
    border-radius: 100%;
    border: 3px solid #FFF;
    box-shadow: 0 0 0 1px #ccc;
    color: #FFF;
    cursor: pointer;
    font-family: "Roboto", sans-serif;
    font-size: 14px;
    line-height: 12px;
    padding: 3px 5px;
    position: absolute;
    right: -6px;
    top: -5px;
  }

  .wallet-widget-modal-form {
    font-family: "Roboto", sans-serif;
  }
  .wallet-widget-modal-form--field-wrap {
    margin-top: 15px;
  }
  .wallet-widget-modal-form__label {
    color: #8393ca;
    display: block;
    margin-bottom: 5px;
  }
  .wallet-widget-modal-form__input {
    border-radius: 3px;
    border: 1px solid #8393ca;
    color: #444751;
  }
  .wallet-widget-modal-form__submit {
    transition: background-color 250ms ease-in-out;
    -webkit-transition: background-color 250ms ease-in-out;
    -moz-transition: background-color 250ms ease-in-out;
    -ms-transition: background-color 250ms ease-in-out;
    -o-transition: background-color 250ms ease-in-out;
    background-color: rgba(255, 204, 102, 0.5);
    border-radius: 4px;
    border: none;
    color: #444751;
    cursor: pointer;
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    padding: 10px 0;
    width: 100%;
  }
  .wallet-widget-modal-form__submit:hover {
    background-color: #ffcc66;
  }

  .wallet-widget-modal-form--card-type .wallet-widget-modal-form--input-hidden {
    left: -9999px;
    position: absolute;
  }
  .wallet-widget-modal-form--card-type label {
    cursor: pointer;
    display: inline-block;
  }
  .wallet-widget-modal-form--card-type label:hover {
    background-color: rgba(131, 147, 202, 0.5);
  }
  .wallet-widget-modal-form--card-type label img {
    max-width: 100%;
    padding: 3px;
  }

  .wallet-widget-modal-form--selected {
    background-color: #8393ca;
  }


</style>