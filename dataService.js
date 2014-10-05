var app = angular.module("toDoList");

app.service("dataService", function() {

	var itemsOnList = [];
	var removedItems = [];
	
	this.getItemsOnList = function() {
		return itemsOnList;
	}
	
	this.getRemovedItems = function() {
		return removedItems;
	}

	this.addItem = function(item) {
		itemsOnList.push(item);
	}
	
	// Add code to create a separate array of removed items, and only show them if asked
	this.removeItem = function(item) {
		for (var i = 0; i < itemsOnList.length; i++) {
			if (itemsOnList[i] === item) {
				itemsOnList.splice(i, 1);
				removedItems.push(item);
			}
		}
	}

});
