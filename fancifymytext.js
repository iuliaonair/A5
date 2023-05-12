function showAlert() {
    alert("This is just a test to check JavaScript functionality!");
  }
  
  function handleButtonClick() {
    var textarea = document.getElementById("myTextarea");
    textarea.style.fontSize = "24pt";
  }
  
  function handleRadioChange() {
    var textarea = document.getElementById("myTextarea");
    var fancyRadio = document.getElementById("fancyRadio");
  
    if (fancyRadio.checked) {
      textarea.style.fontWeight = "bold";
      textarea.style.color = "blue";
      textarea.style.textDecoration = "underline";
    } else {
      textarea.style.fontWeight = "normal";
      textarea.style.color = "initial";
      textarea.style.textDecoration = "none";
    }
  }
  
  function capitalizeAndAddMoo() {
    var textarea = document.getElementById("myTextarea");
    var text = textarea.value;
    var sentences = text.split(". ");
  
    for (var i = 0; i < sentences.length; i++) {
      var words = sentences[i].split(" ");
      if (words.length > 0) {
        var lastWordIndex = words.length - 1;
        words[lastWordIndex] = words[lastWordIndex].toUpperCase() + "-Moo";
        sentences[i] = words.join(" ");
      }
    }
  
    text = sentences.join(". ");
    textarea.value = text;
  }
  