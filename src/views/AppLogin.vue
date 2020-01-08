<template>
  <div class="body-1">

    <form class="modal-content" action="/action_page.php" method="post">
      <div class="imgcontainer">
        <h1>Einloggen</h1>
      </div>

      <div class="container">
        <label style="color: black"><b>Benutzername</b></label>
        <input type="text" placeholder="Benutzername" name="uname" required>

        <label style="color: black"><b>Passwort</b></label>
        <input type="password" placeholder="Passwort" name="psw" required>

        <button type="submit">Login</button>

      </div>
    </form>
  </div>
</template>

<script>
  export default {
    // gebt jeder Page einen eigenen Namen
    name: 'AppLogin',

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

  /* Full-width input fields */
  input[type=text], input[type=password] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
    background: #c0bfbf;
  }

  h1{
    color: black;
    margin-left: 2%;
    float: left;
  }

  /* Set a style for all buttons */
  button {
    background-color: #424242;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 100%;
  }

  button:hover {
    opacity: 0.8;
  }

  /* Center the image and position the close button */
  .imgcontainer {
    text-align: center;
    margin: 24px 0 51px 0;
    position: relative;
  }

  .container {
    padding: 16px;
  }


  /* The Modal (background) */
  .modal {
    display: none; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
    padding-top: 60px;
  }

  /* Modal Content/Box */
  .modal-content {
    background-color: #f0f0f0;
    margin: 5% auto 15% auto; /* 5% from the top, 15% from the bottom and centered */
    border: 1px solid #888;
    width: 80%; /* Could be more or less, depending on screen size */
  }

  /* The Close Button (x) */
  .close {
    position: absolute;
    right: 25px;
    top: 0;
    color: #000;
    font-size: 35px;
    font-weight: bold;
  }

  .close:hover,
  .close:focus {
    color: red;
    cursor: pointer;
  }

  /* Add Zoom Animation */
  .animate {
    -webkit-animation: animatezoom 0.6s;
    animation: animatezoom 0.6s
  }

  @-webkit-keyframes animatezoom {
    from {-webkit-transform: scale(0)}
    to {-webkit-transform: scale(1)}
  }

  @keyframes animatezoom {
    from {transform: scale(0)}
    to {transform: scale(1)}
  }

  /* Change styles for span and cancel button on extra small screens */
  @media screen and (max-width: 300px) {
    span.psw {
      display: block;
      float: none;
    }
    .cancelbtn {
      width: 100%;
    }
  }
</style>