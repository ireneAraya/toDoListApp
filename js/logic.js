angular.module('todoList', [])
    .controller('ToDoCtrl', function() {

        this.tasksCol = [];

        this.addTask = function () {
            console.clear();

            if (this.description !== undefined && this.dueDate !== undefined) {
                var itemTask = {};
                itemTask.description = this.description;
                itemTask.dueDate = this.dueDate;
                itemTask.done = false;

                this.tasksCol.push(itemTask);
            }
        };

        this.clearDoneTasks = function () {
            var listContainer = document.querySelector("#todoList");
            var taskItems = listContainer.querySelectorAll("li");

            for (var i = 0; i < taskItems.length; i++) {
                var child = taskItems[i];

                if (child.getAttribute("data-status") === "true") {
                    listContainer.removeChild(child);
                }
            };
        };

        this.setDone = function (taskID) {
            this.tasksCol[taskID].done = document.querySelector("input#taskDone-" + taskID).checked ? true : false;
        };

        this.getTaskNumbers = function () {
            var n = 0;

            for (var i = 0; i < this.tasksCol.length; i++) {
                var current = this.tasksCol[i];
                n += current.done ? 0 : 1;
            };

            return n;
        }
    });