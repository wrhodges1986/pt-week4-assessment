var app = angular.module("toDoList");

app.controller("mainCtrl", function($scope, dataService) {
	
	$scope.itemsOnList = dataService.getItemsOnList();
	$scope.removedItems = dataService.getRemovedItems();
	
	$scope.showRemoved = function() {
		$scope.removedVisible = !$scope.removedVisible;
	}
	
	$scope.addAnItem = function() {
		dataService.addItem($scope.itemToAdd);
		$scope.itemToAdd = "";
	}
	
	$scope.removeAnItem = function() {
		dataService.removeItem($scope.itemToRemove);
		$scope.itemToRemove = "";
	}
	
});