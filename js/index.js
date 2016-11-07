<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Challenge 4</title>
    <style>
    .errormsg {
      color: #FF00FF;
      display: none;
          }
    </style>
    
    <script type="text/javascript">
    function checkForm(){
      var status=true;
      if (document.getElementById('fullname').value ==''){
         document.getElementById('nameerrormsg').style.display="inline";
           status=false;
           
      } else {
        document.getElementById('nameerrormsg').style.display="none";
      }
      if (document.getElementById('streetaddr').value ==''){
        document.getElementById('addrerrormsg').style.display="inline";
          status=false; 
      }else{
        document.getElementById('addrerrormsg').style.display="none";
      }
      return status;
    }    
    </script>
</head>
<body>
  <form  action="http://www.cnn.com" onsubmit="return checkForm();">
  <fieldset>

    <legend>Personal details</legend>
    <p>
      <label>
        Full name:
        <input type="text" name="name" id="name">
      </label>
    </p>
    <p class="errormsg" id="nameerrormsg">Please enter your name.</p>

    <p>
      <label>
        Street Address:
        <input type="text" name="emailaddr" id="emailaddr">
      </label>
    </p>
    <p class="errormsg" id="addrerrormsg">Please enter your email address.</p>

 
</form>

</body>
</html>