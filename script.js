log("begun");


//angular stuff---------------------------------------------------------------
var EBapp = angular.module("Evidence-Board",[]);

function ResultsService(){
  var factory = {};

  factory.getIH = function(){
    return ih;
  }

  factory.inputTxt = "factory.inputTxt here";
  factory.selectedObjIds={};

  return factory;
};

EBapp.factory("ResultsService", ResultsService);

EBapp.controller("OptionCtrler", OptionCtrler);
EBapp.controller("IHCtrler",IHCtrler);


log("done loading script.js");
