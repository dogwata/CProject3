var global_cal={};
global_cal.caltext="";
global_cal.ans=0;
var lastcal=false;

var app = new Vue({
  el: "#app",
  data: global_cal
});

$(".btnnum").click(function(){
  global_cal.caltext+=$(this).children("span").text();
  lastcal=false;
});

$("#btn_reverse").click(function(){
  global_cal.ans=(""+(1/parseInt(global_cal.caltext))).substr(0,9);
  global_cal.caltext="";
});

$("#btn_sqrt").click(function(){
  if (lastcal)
    global_cal.ans=(""+(Math.sqrt(parseInt(global_cal.ans)))).substr(0,9);
  else
    global_cal.ans=(""+(Math.sqrt(parseInt(global_cal.caltext)))).substr(0,9);

  global_cal.caltext="";
  lastcal=true;

});

$("#btn_rvnag").click(function(){
  global_cal.ans=(""+(-(parseInt(global_cal.caltext)))).substr(0,9);
  global_cal.caltext="";
});

$("#btn_clear_all").click(function(){
  global_cal.ans=0;
  global_cal.caltext="";
});
$("#btn_clear").click(function(){
  global_cal.caltext="";
});
$("#btn_cal_all").click(function(){
  global_cal.ans=(""+eval(global_cal.caltext.split("＊").join("*"))).substr(0,9);
  global_cal.caltext="";
  lastcal=true;
});

$("#btn_back").click(function(){
  global_cal.caltext=global_cal.caltext.substr(0,global_cal.caltext.length-1);
});
