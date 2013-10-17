/**
 * @author Mike Khan
 */

angular.module('repeatera', ['ui.bootstrap']);

function NPCController($scope, $dialog) {

	$scope.npcs = [{
		name : "Lucy",
		hitPoints : 25,
		health : 32,
		totalMoves : 0,
	},
		{
		name : "Tom",
		hitPoints : 15,
		health : 42,
		totalMoves : 4,
	},
		{
		name : "Mary",
		hitPoints : 43,
		health : 421,
		totalMoves : 24,
	},
		{
		name : "John",
		hitPoints : 45,
		health : 52,
		totalMoves : 124,	
	}];

	var dialogOptions = {
		controller : 'EditCtrl',
		templateUrl : 'NPCedit.html'
	};

	$scope.edit = function(npc) {

		var itemToEdit = npc;

		$dialog.dialog(angular.extend(dialogOptions, {
			resolve : {
				npc : angular.copy(itemToEdit)
			}
		})).open().then(function(result) {
			if (result) {
				angular.copy(result, itemToEdit);
			}
			itemToEdit = undefined;
		});
	};

};

// the dialog is injected in the specified controller
function EditCtrl($scope, npc, dialog){
  
  $scope.npc = npc;
  
  $scope.save = function() {
    dialog.close($scope.npc);
  };
  
  $scope.close = function(){
    dialog.close(undefined);
  };
}