//angular stuff---------------------------------------------------------------
var EBapp = angular.module("Evidence-Board",[]);

EBapp.factory("ResultsService", ResultsService);

function ResultsService(){
  var factory = {};

  factory.getIH = function(){
    return ih;
  }

  factory.inputTxt = "";

  return factory;
});


EBapp.controller("OptionCtrler", OptionCtrler);
EBapp.controller("IHCtrler",IHCtrler);

log("done loading script.js");
