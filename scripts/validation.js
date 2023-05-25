function validateProf(event) {

    event.preventDefault();

    var valid = true;

    //display warning if first name is not entered
   // if (profileForm.firstname.value === "") {
        //document.querySelector('#firstNameWarning').textContent = "*Please enter First Name*";
       // document.querySelector('#firstname').style.borderColor = '#ff0000'
       // valid = false;
    //}
    //display warning if last name is not entered
    //if (profileForm.lastname.value === "") {
        //document.querySelector('#lastNameWarning').textContent = "*Please enter LAST Name*";
       // document.querySelector('#lastname').style.borderColor = '#ff0000'
       // valid = false;
    //}

      // FirstName check length

    let firstName = profileForm.firstname.value
    if(firstName.length < 3) {
        document.querySelector('#firstNameWarning').textContent="*Please input more than 2 characters*";
        valid = false;
    }else if(firstName.length > 10){
        document.querySelector('#firstNameWarning').textContent="*Please input less than 10 characters*";
        valid = false;
     }

     // FirstName check length

    let lastName = profileForm.lastname.value
    if(lastName.length < 3) {
        document.querySelector('#lastNameWarning').textContent="*Please input more than 2 characters*";
        valid = false;
     }else if (lastName.length > 10){
        document.querySelector('#lastNameWarning').textContent="*Please input less than 10 characters*";
     valid = false;
     }







    // display warning if delivery needed are not checked

    const checkboxs = document.querySelectorAll('[name = "delivery"]');
    var checked = false
    for (var i = 0, l = checkboxs.length; i < l; i++) {
        if (checkboxs[i].checked) {
            checked = true
            break
        }
    }
    if (checked == false) {
        valid = false;
        document.querySelector('#deliveryWarning').textContent = "*Please choose a Day*";
        
    }
    // // display warning if time arrive is not selected
    if (profileForm.timearrive.options.selectedIndex === 0) {
        valid = false;
        document.querySelector('#arriveTimeWarning').textContent = "*Select an arrive time*";
        document.querySelector('#timearrive').style.borderColor = '#ff0000'
        
    }


    // display warning if time leave is not selected
    if (profileForm.timeLeave.options.selectedIndex === -1) {
        document.querySelector('#leaveTimeWarning').textContent = "*Select a leave time*";
        document.querySelector('#timeLeave').style.borderColor = '#ff0000'
        valid = false;
        return
    }
    // display warning if time Leave is earlier than time arrive
    let a = document.querySelector('#timearrive').value
    let b = document.querySelector('#timeLeave').value
    if (a - b >= 0) {
        document.querySelector('#leaveTimeWarning').textContent = "*Second time should later than first time*";
        valid = false;
        return

    }
    //display warning if describe  is not entered
    if (document.querySelector("#specialreq").style.display == "block") {
        if (profileForm.describecall.value === "") {
            document.querySelector('#describeCallWarning').textContent = "*Please input your Requirements *";
            document.querySelector('#describecall').style.borderColor = '#ff0000'
            valid = false;
            return 
        }
    }
    //display warning if address is not entered
    if (profileForm.address.value == "") {
        document.querySelector('#addressWarning').textContent = "*Please enter address*";
        document.querySelector('#address').style.borderColor = '#ff0000'
        valid = false;
    }
    //display warning if phone is not entered
    const daytime = document.querySelector('#daytimephone').value
  
 
    if (daytime == "") {
        document.querySelector('#daytimePhoneWarning').textContent = "*Please enter daytime phone*";
        document.querySelector('#daytimephone').style.borderColor = '#ff0000'

        valid = false;
    }

   
    //display warning if email is not entered
    
    if (profileForm.email.value == "") {
       document.querySelector('#emailWarning').textContent = "*Please enter email*";
        document.querySelector('#address').style.borderColor = '#ff0000'
        valid = false;
    }
    

    


    //valid number

    if ((!daytime.match(/^\d+/))) {
        valid = false;
        document.querySelector('#daytimePhoneWarning').textContent = "*Phone should be numbers*";
        return
    }
    //valid 10 digits
    if (daytime.length !== 10 ) {
        valid = false;
        document.querySelector('#daytimePhoneWarning').textContent = "*Phone should be 10 digits*";
        return
    }


    
   
    




    // valid than submit

    //if (valid) {
        //alert("Thank you!");
    //}
    //return valid;

    if(valid) {
        // set data to session strage
        // form data
        let userdata = {
          firstName : profileForm.fname.value,
          Lname : profileForm.lname.value,
          date:profileForm.mon.value,
          address: profileForm.address.value,
          email:profileForm.email.value,
          daytimephone:profileForm.daytimephone.value,
          time: profileForm.timearrive.value,
          timeLeave:profileForm.timeLeave.value,
          delivery:profileForm.door.value,
          call:profileForm.before.value,
          special:profileForm.special.value,
          describe:profileForm.describecall.value
         
        }
    
        // items data
        let itemsarray = [];
        document.querySelectorAll('tr').forEach((item, i) => {
          if(i > 0) {
            itemsarray.push([item.firstChild.childNodes[1].getAttribute('alt'), item.childNodes[2].textContent])
          }
        });
        let backet = {
          Subtotal : document.querySelector('#subtotal').value,
          Items : itemsarray
        }
    
        sessionStorage.setItem("form", JSON.stringify(userdata));
        sessionStorage.setItem("backet", JSON.stringify(backet));
        // summary.html
        window.location.href="http://127.0.0.1:8887/summary.html";
      }

  



}
