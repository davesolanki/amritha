

    var amritha = angular.module('amritha', ['ngRoute']);

    amritha.controller('WidgetsController', function($scope) {});
    amritha.controller('MyCtrl', function($scope, $location) {
        $scope.isActive = function(route) {
            return route === $location.path();
        }
    });

    // configure our routes
    amritha.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl: 'routes/home.html'
            })

            // route for the about page
            .when('/register', {
                templateUrl: 'routes/register.html'
            })

            // route for the contact page
            .when('/appointment', {
                templateUrl: 'routes/appointments.html'
            })

            .when('/personal', {
                templateUrl: 'routes/preverify/personal.html'
            })

            // route for the about page
            .when('/employment', {
                templateUrl: 'routes/preverify/employment.html'
            })

            // route for the contact page
            .when('/financial', {
                templateUrl: 'routes/preverify/financial.html'
            })

            .when('/checkout', {
                templateUrl: 'routes/checkout/checkout.html'
            })

            // route for the about page
            .when('/review', {
                templateUrl: 'routes/checkout/review.html'
            })

            // route for the contact page
            .when('/success', {
                templateUrl: 'routes/checkout/sucess.html'
            })

            .when('/dashboard', {
                templateUrl: 'routes/dashboard/dash.html'
            })

            .when('/contact', {
                templateUrl: 'routes/footer/contact.html'
            })

            .when('/faq', {
                templateUrl: 'routes/footer/faq.html'
            })

            .when('/blog', {
                templateUrl: 'routes/footer/blog.html'
            })

            .when('/help', {
                templateUrl: 'routes/footer/help.html'
            })

            .when('/aboutus', {
                templateUrl: 'routes/footer/aboutus.html'
            })

            .when('/myaccount', {
                templateUrl: 'routes/myacct.html'
            });
    });
