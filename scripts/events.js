
//remove warning if time arrive has input
document.querySelector('#timearrive').addEventListener("blur", function () {
    if (profileForm.timearrive.options.selectedIndex !== -1) {
        arriveTimeWarning.textContent = "";
        timearrive.style.borderColor = ''
    }
});
//remove warning if time leave has input
document.querySelector('#timeLeave').addEventListener("blur", function () {
    if (profileForm.timeLeave.options.selectedIndex !== -1) {
        leaveTimeWarning.textContent = "";
        timeLeave.style.borderColor = ''
    }
});




// Special call is a check box which if selected will make Describe appear below.
function myFunction2() {
    let checkBox = document.querySelector('#special')
    let text = document.querySelector("#specialreq");
    if (checkBox.checked) {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
}


//remove warning if first name has input
//document.querySelector('#firstname').addEventListener("blur", function () {
    if (this.value !== "") {
        firstNameWarning.textContent = "";
        firstname.style.borderColor = ''
    }
//});
//remove warning if last name has input
//document.querySelector('#lastname').addEventListener("blur", function () {
    //if (this.value !== "") {
        //lastNameWarning.textContent = "";
        //lastname.style.borderColor = ''
    //}
//});
//remove firstname length

document.querySelector('#firstname').addEventListener("blur", function () {
    if (2<this.length<10) {
        firstNameWarning.textContent = "";
        firstname.style.borderColor = ''
    }
});

//remove lastname length

document.querySelector('#lastname').addEventListener("blur", function () {
    if (2<length<10) {
        lastNameWarning.textContent = "";
        lastname.style.borderColor = ''
    }
});








//remove warning if adress has input
document.querySelector('#address').addEventListener("blur", function () {
    if (this.value !== "") {
        addressWarning.textContent = "";
        address.style.borderColor = ''
    }
});

//remove warning if email has input
document.querySelector('#email').addEventListener("blur", function () {
    if (this.value !== "") {
        emailWarning.textContent = "";
        email.style.borderColor = ''
    }
});



//remove warning if described  has input
document.querySelector('#describecall').addEventListener("blur", function () {
    if (this.value !== "") {
        describeCallWarning.textContent = "";
        describecall.style.borderColor = ''
    }
});


document.querySelector('#daytimephone').addEventListener("blur", function () {
    if (this.value !== "") {
        daytimePhoneWarning.textContent = "";
        daytimephone.style.borderColor = ''
      
    }
});

//remove warning if days has inputed


document.querySelectorAll('[name = "delivery"]')[0].addEventListener("blur", function () {
    if (this.checked) {
        document.querySelector('#deliveryWarning').textContent = '';
    }
});
document.querySelectorAll('[name = "delivery"]')[1].addEventListener("blur", function () {
    if (this.checked) {
        document.querySelector('#deliveryWarning').textContent = '';
    }
});
document.querySelectorAll('[name = "delivery"]')[2].addEventListener("blur", function () {
    if (this.checked) {
        document.querySelector('#deliveryWarning').textContent = '';
    }
});
document.querySelectorAll('[name = "delivery"]')[3].addEventListener("blur", function () {
    if (this.checked) {
        document.querySelector('#deliveryWarning').textContent = '';
    }
});
document.querySelectorAll('[name = "delivery"]')[4].addEventListener("blur", function () {
    if (this.checked) {
        document.querySelector('#deliveryWarning').textContent = '';
    }
});




document.querySelector('#daytimephone').addEventListener("blur", function () {
    if (this.value.length === 10) {
        document.querySelector('#daytimePhoneWarning').textContent = '';
    }
})

// Special diet is a check box which if selected will make appear below.
function myFunction2() {
    let checkBox = document.querySelector('#special')
    let text = document.querySelector("#specialreq");
    if (checkBox.checked) {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
}

function f1() {
    //radio集合
    var radios = document.getElementsByName("door");
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            alert(radios[i].value);
            break;
        }
    }
}

function setEvents() {


    // set event to + & - button
    document.querySelectorAll('.calculate').forEach((item, i) => {
      item.addEventListener('click', function (ev) {
        let tr = this.parentNode.parentNode;
        let amount = parseInt(this.parentNode.parentNode.childNodes[2].textContent);
        let subtotal = 0;
        if (this.name == 'plus') {
          amount += 1;
        } else if (this.name == 'minus') {
          if (amount > 0) {
            amount -= 1;
          }
        }
        this.parentNode.parentNode.childNodes[2].textContent = amount;
        subtotal = parseInt(this.parentNode.parentNode.childNodes[1].textContent) * amount;
        this.parentNode.parentNode.childNodes[3].textContent = subtotal;
        calculateSub();
      })
    });
  
    // set subtotal
    function calculateSub() {
      let subtotal = 0;
      document.querySelectorAll('tr').forEach((item, i) => {
        if (i > 0) {
          subtotal += parseInt(item.childNodes[3].textContent)
        }
      });
      document.querySelector('#subtotal').value = subtotal;
    }
  
    
  
    // set event to reset button
    document.profileForm.addEventListener('reset', function () {
      
      // reset item table
      document.querySelectorAll('tr').forEach((item, i) => {
        if (i > 0) {
  
          item.childNodes[2].textContent = '0';
       
          item.childNodes[3].textContent = '0';
        }
      });
      document.querySelector('#subtotal').value = '0';
  
    });
  
  
}





// Add an event to the form on submit to validate input
document.profileForm.addEventListener("submit", validateProf);


document.querySelector('#reset').addEventListener("click", function(){
    document.querySelector('#firstNameWarning').textContent="";
    document.querySelector('#firstname').style.borderColor = '';
    document.querySelector('#lastNameWarning').textContent="";
    document.querySelector('#lastname').style.borderColor = '';
    document.querySelector('#deliveryWarning').textContent='';
    document.querySelector('#arriveTimeWarning').textContent='';
    document.querySelector('#timearrive').style.borderColor = '';
    document.querySelector('#emailWarning').textContent='';
    document.querySelector('#addressWarning').textContent='';
    document.querySelector('#address').style.borderColor = '';
    document.querySelector('#daytimePhoneWarning').textContent='';
    document.querySelector('#daytimephone').style.borderColor = '';


  
    
    // reset item table
    document.querySelectorAll('tr').forEach((item, i) => {
      if (i > 0) {
        // amount
        item.childNodes[2].textContent = '0';
        // subtotal
        item.childNodes[3].textContent = '0';
      }
    });
    document.querySelector('#subtotal').value = '0';

});

// get json data with AJAX
function populatetable() {
    const httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function () {
      if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
          const data = JSON.parse(httpRequest.responseText);
          let array = setToClass(data);
          setToHTML(array);
          setEvents()
        } else {
        };
      };
    };
  
    httpRequest.open('GET', 'data.json');
    httpRequest.send();
  }
  
  
  function setToClass(obj) {
    
   
    var itemsarry = [];
    obj.forEach((item, i) => {
      let i_name = item['name'];
      let i_value = item['value'];
      let i_image = item['image'];
      let itemclass = new Item(i_name, i_value, i_image)
      itemsarry.push(itemclass);
    });
    return itemsarry;
  }
  
  function setToHTML(array) {
    let inserthtml = th_line;
    array.forEach((item, i) => {
      inserthtml += item.displayItems();
    });
  
    document.querySelector('table').innerHTML = inserthtml;
  }
  
  
  populatetable();




