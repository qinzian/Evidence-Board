
//angular stuff---------------------------------------------------------------
var EBapp = angular.module("Evidence-Board",[]);

function SharedService(){
  var factory = {};

  factory.getIH = function(){
    return nh;
  }

  factory.tempBringForward = function(id){
		$("#"+id.toString()).addClass("located");/**/
		setTimeout(function(){
			$("#"+id.toString()).removeClass("located");/**/
		}, 2000);
  }

  factory.inputTxt = "";
  factory.focusedOnBoard = false;


  return factory;
};

EBapp.factory("SharedService", SharedService);

EBapp.controller("OptionCtrler", OptionCtrler);
EBapp.controller("IHCtrler",IHCtrler);

//log("done loading script.js");
