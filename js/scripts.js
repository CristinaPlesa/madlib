$(document).ready(function() {
  $("#formOne").submit(function(event) {
    const person1input = $("input#person1").val();
    const person2input = $("input#person2").val();
    const animalinput = $("input#animal").val();
    const exclamationinput = $("input#exclamation").val();
    const verbinput = $("input#verb").val();
    const nouninput = $("input#noun").val();

    $(".person1").text(person1input);
    $(".person2").text(person2input);
    $(".animal").text(animalinput)
    $(".exclamation").text(exclamationinput);
    $(".verb").text(verbinput);
    $(".noun").text(nouninput);
    
    $("#story").show();
    event.preventDefault();
  })
})