var th_line = "<tr><th>Item</th><th>Value($)</th><th>Amount</th><th>Subtotal</th></tr>"
// class
class Item {
  constructor(name, value, image) {
    this.name = name;
    this.value = value;
    this.image = image;

  }

  // method
  displayItems() {
    var img = "<tr><td><button type='button' name='minus' class='minus calculate'> - </button><img class='img' src=\' " + this.image + "\' alt=\' " + this.name + " \' ><button type='button' name='plus' class='plus calculate'> + </button></td>";
    var Value = "<td>" + this.value+"$"+"<br>"+this.name + "</td>";
    var amount = "<td>" + 0 + "</td>";
    var subtotal = "<td>" + 0 + "</td></tr>";
    return img + Value + amount + subtotal;
  }
}


function getdata() {
  var userdata = JSON.parse(sessionStorage.getItem('form'));
  var backet = JSON.parse(sessionStorage.getItem('backet'));
  var key = Object.keys(userdata);
  var fsection = document.querySelector('.userdata');



  var ul = document.createElement('ul');
  key.forEach((item, i) => {
    var li = document.createElement('li');
      let val = userdata[item];
      li.appendChild(document.createTextNode(val));
  ul.appendChild(li);
  });
  fsection.appendChild(ul);

  
  var bkeys = Object.keys(backet);
  var bsection = document.querySelector('.prodata');
  var ol = document.createElement('ol');

  bkeys.forEach((it, i) => {
    var bli = document.createElement('p');
    if(it == 'Subtotal') {
      let valu = backet[it];
      bli.appendChild(document.createTextNode('Subtotal :' + valu));
      ol.appendChild(bli);
    } else {
      backet[it].forEach((array, i) => {
        var bali = document.createElement('p');
        bali.appendChild(document.createTextNode(array[1] + ' ' + array[0] ))
        ol.appendChild(bali);
      });
    }

    console.log(it + ':' + ol)
  });
  bsection.appendChild(ol);


  sessionStorage.clear();
}


getdata()
