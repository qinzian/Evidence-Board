
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

//-------------------------------------------------------------------------------------
//log([1,23,4,"d",5,6,7].get(2));

//log("done loading script.js");
