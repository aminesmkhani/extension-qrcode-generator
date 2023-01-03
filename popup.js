var qrcode = new QRCode("qrcode");

function makeCode () {    
  var elText = document.getElementById("text");
  qrcode.makeCode(elText.value);
}

makeCode();

$("#text").
  on("blur", function () {
    makeCode();
  }).
  on("keydown", function (e) {
    if (e.keyCode == 13) {
      makeCode();
    }
  });