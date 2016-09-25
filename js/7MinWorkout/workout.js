'use strict';

angular.module('7minWorkout').controller('WorkoutController', ['$scope', '$interval', function($scope, $interval) {
	function WorkoutPlan(args) {
		this.exercises = [];
		this.name = args.name;
		this.title = args.title;
		this.restBetweenExercises = args.restBetweenExercises;
	}
}]);