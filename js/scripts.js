var players = {"mickael":"YWxleGFuZHJl\n", "anais":"bHlkaWE=\n", "nicolas":"YW5haXM=\n", "lydia":"anVsaWU=\n", "alexandre":"YXVyZWxpZW4=\n", "morgane":"em9l\n", "aurelien":"bmljb2xhcw==\n", "julie":"bWlja2FlbA==\n", "zoe":"bW9yZ2FuZQ==\n"}

$(document).ready();

$( "#reveal" ).click(function() {
  target = $("#colFormLabelSm").val()
  $(".target").text(atob(players[target]));
  $('.reveal').toggle("slide:up");
  $('.target').toggle("slide:up");
});
