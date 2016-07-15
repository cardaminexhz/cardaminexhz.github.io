var ToolDocs = angular.module("app", ['ui.router']);

ToolDocs.config(function($stateProvider,$urlRouterProvider) {
    //$urlRouterProvider.otherwise('/login');

    $stateProvider
        .state('index', {
            url: '/index',
            views: {
                '': {
                    templateUrl: 'templates/home/home.html'
                },
                'main@index': {
                    templateUrl: 'templates/home/main.html'

                },
                'footer@index': {
                    templateUrl: 'templates/home/footer.html'
                }
            }
        })

        .state('test',{
            url:'/test',
            templateUrl:'templates/test.html',
            controller:'testCtrl'
        })
})


ToolDocs.controller('testCtrl',[
    function(){
        alert("123");

    }


])
