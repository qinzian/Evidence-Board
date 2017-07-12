
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

function showInstr(){
  var msg = "\t\tBoard:"+
            "\ndblclick board:\tCreate Note"+
            "\nclick note:\tSelect/Deselect Note"+
            "\nclick search result:\tLocate Note"+
            "\npress    x:\t\tDelete Selected Notes"+
            "\npress    c:\t\tConnect Selected Notes"+
            "\npress    v:\tView connections of Selected Notes"+
            "\ndblclick line:\tView connected notes"+
            "\ndblclick note:\tEdit Note in Editor"+
            "\n\n\t\tEditor:"+
            "\nclick connection:\tSave and goto clicked note"+
            "\npress    esc:\tExit without saving"+
            "\n\n\t\tOther:"+
            "\nNotes:\t draggable"+
            "\nBoard:\t draggable"

  alert(msg);
}
showInstr();
//log("done loading script.js");
