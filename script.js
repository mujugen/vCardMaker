function generateQR() {
  console.log("click");
  let textarea = document.getElementById("preview");
  let value = textarea.value;
  console.log(value);

  var encodedText = encodeURIComponent(value);

  // Create the API URL with the encoded text
  var apiUrl =
    "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
    encodedText;

  var img = document.getElementById("qrcode-container");
  img.src = apiUrl;
}
