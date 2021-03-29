$(document).ready(function() {
  $("#formOne").submit(function(event) {
    const person1input = $("input#person1").val();
    const person2input = $("input#person2").val();
    const animalinput = $("input#animal").val();
    const exclamationinput = $("input#exclamation").val();
    const verbinput = $("input#verb").val();
    const nouninput = $("input#noun").val();
    let userInputs = [person1input, person2input, animalinput, exclamationinput, verbinput, nouninput]
    userInputs.forEach(function(userInput) {
      $(".person1").text(userInputs[0]);
      $(".person2").text(userInputs[1]);
      $(".animal").text(userInputs[2]);
      $(".exclamation").text(userInputs[3]);
      $(".verb").text(userInputs[4]);
      $(".noun").text(userInputs[5]);
      
      $("#story").show();
      });

    event.preventDefault();
  });
});