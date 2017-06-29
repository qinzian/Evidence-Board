
//angular stuff---------------------------------------------------------------
var EBapp = angular.module("Evidence-Board",[]);

function SharedService(){
  var factory = {};

  factory.getIH = function(){
    return ih;
  }

  factory.inputTxt = "";
  factory.focusedOnBoard = false;

  return factory;
};

EBapp.factory("SharedService", SharedService);

EBapp.controller("OptionCtrler", OptionCtrler);
EBapp.controller("IHCtrler",IHCtrler);


//log("done loading script.js");
