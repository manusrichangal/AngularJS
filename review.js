var app = angular.module('reviewApp', []);
	app.controller('MyController1',['$scope', function($scope)
	{
	$scope.name='Ross Geller';
	$scope.age=23;
	$scope.firstname='Monica';
	$scope.lastname='Geller';
	$scope.fullname=function()
	{
		return $scope.firstname + " " + $scope.lastname;
	};

	$scope.isSpy = true;
	$scope.codename="Manu";
}]);
app.controller('MyController',['$scope', function($scope)
{
	$scope.employees=
	[
	{
		fname:"Chandler",
		lname:"Bing",
		salary:45000
	},
	{
		fname:"Ross",
		lname:"Geller",
		salary:50000
	},
	{
		fname:"Joey",
		lname:"Tribbiani",
		salary:30000
	}
	]
}]);

app.controller('MyController2',['$scope', function($scope)
{
	
	$scope.count=0;
	$scope.show=true;
	$scope.toggleshow=function()
	{
		$scope.show=!$scope.show;
	}
}]);
app.controller('MyController3',['$scope', function($scope)
{
	$scope.form={};
	$scope.addReview =function(){
	$scope.reviews.push($scope.form);
	$scope.form={};
	}
	$scope.reviews=
	[
		{
			comment:"Could this BE more awesome?",
			by: "-Chandler.Bing@email.com"
		},
		{
			comment:"How you doin?",
			by: "-Joey.Tribbiani@email.com"
		}
	];
}]);

app.directive('userinformation',function(){
	return{
			restrict: 'E',
			templateUrl: 'userinfo.html'
	};

})