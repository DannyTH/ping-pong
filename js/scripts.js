$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    $("#potray").empty();
    var personInput= parseInt($("input#input1").val());
    var potray= listDown(personInput);

    potray.forEach (function(item) {
      $("#potray").append ('<li>' + item + '</li>');

    });
    event.preventDefault();
  });
});

var listDown= function(personInput) {
  var result= [];
  for(var i=1; i<=personInput; i++) {
    var index= result.indexOf(i);
    if (i % 15 ===0) {
      result.splice (index, 0);
      result.push('pingpong');
    } else if (i % 3 ===0) {
      result.splice(index, 0);
      result.push('ping');
    }else if (i % 5 ===0) {
      result.splice(index, 0);
      result.push('pong');
    }else {
    result.push(i);
    }
  }
  return result;
};
