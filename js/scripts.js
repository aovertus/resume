var players =  {"pauline":"YmVu\n", "anais":"cGF1bGluZQ==\n", "laura":"YW5haXM=\n", "alexandre":"bGF1cmE=\n", "zoe":"YWxleGFuZHJl\n", "ben":"em9l\n"}

$(document).ready();

$( "#reveal" ).click(function() {
  target = $("#colFormLabelSm").val()
  $(".target").text(atob(players[target]));
  $('.reveal').toggle("slide:up");
  $('.target').toggle("slide:up");
});
