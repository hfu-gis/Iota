<template>
  <div class="body-1">
      <form class="modal-content" action="/action_page.php">
        <div class="container">
          <h1>Registrieren</h1>
          <p>Bitte füllen Sie dieses Formular aus um sich zu registrieren.</p>
          <hr>
          <label for="name" style="color:black"><b>Name</b></label>
          <input type="text" placeholder=" Vor- und Nachname" name="name" required>

          <label for="email" style="color:black"><b>Email</b></label>
          <input type="text" placeholder="Email-Adresse" name="email" required>

            <label for="psw-repeat" style="color:black"><b>Ihre IBAN</b></label>
            <input type="password" placeholder="IBAN" name="psw-repeat" required>

          <label for="psw" style="color:black"><b>Passwort</b></label>
          <input type="password" placeholder="Passwort" name="psw" required>

          <label for="psw-repeat" style="color:black"><b>Passwort bestätigen</b></label>
          <input type="password" placeholder="Passwort" name="psw-repeat" required>


            <div class="clearfix">
            <button type="button" onclick="document.getElementById('id01').style.display='none'" class="cancelbtn">Abbrechen</button>
            <button type="submit" class="signupbtn">Registrieren</button>
          </div>
        </div>
      </form>
    </div>

</template>

<script>
export default {
  // gebt jeder Page einen eigenen Namen
  name: 'Register',

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

  body {font-family: Arial, Helvetica, sans-serif;}
  * {box-sizing: border-box;}
    h1{
        color: black;
        margin-bottom: 2%;
    }

    p{
        color: black;
    }



  /* Full-width input fields */
  input[type=text], input[type=password] {
    width: 100%;
    padding: 15px;
    margin: 5px 0 22px 0;
    display: inline-block;
    border: none;
    background: #c0bfbf;
      color: black;
  }

  /* Add a background color when the inputs get focus */
  input[type=text]:focus, input[type=password]:focus {
    background-color: #ddd;
    outline: none;
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
    opacity: 0.9;
  }

  button:hover {
    opacity:1;
  }

  /* Extra styles for the cancel button */
  .cancelbtn {
    padding: 14px 20px;
    background-color: #fd5151;
  }

  /* Float cancel and signup buttons and add an equal width */
  .cancelbtn, .signupbtn {
    float: left;
    width: 50%;
  }

  /* Add padding to container elements */
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
    background-color: #474e5d;
    padding-top: 50px;
  }

  /* Modal Content/Box */
  .modal-content {
    background-color: #f0f0f0;
    margin: 5% auto 15% auto; /* 5% from the top, 15% from the bottom and centered */
    border: 1px solid #888;
    width: 80%; /* Could be more or less, depending on screen size */
  }

  /* Style the horizontal ruler */
  hr {
    border: 1px solid #f1f1f1;
    margin-bottom: 25px;
  }

  /* The Close Button (x) */
  .close {
    position: absolute;
    right: 35px;
    top: 15px;
    font-size: 40px;
    font-weight: bold;
    color: #f1f1f1;
  }

  .close:hover,
  .close:focus {
    color: #f44336;
    cursor: pointer;
  }

  /* Clear floats */
  .clearfix::after {
    content: "";
    clear: both;
    display: table;
  }

  /* Change styles for cancel button and signup button on extra small screens */
  @media screen and (max-width: 300px) {
    .cancelbtn, .signupbtn {
      width: 100%;
    }
  }

</style>
