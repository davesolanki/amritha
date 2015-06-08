

    var amritha = angular.module('amritha', ['ngRoute', 'ui.bootstrap']);

    amritha.controller('AccordionDemoCtrl', function ($scope) {
      $scope.oneAtATime = true;
    })
            // $scope.openModal = function(){
            //   $modal.open({
            //     templateUrl: 'path/to/page.html',
            //     resolve: {
            //             newPath: function(){
            //                 return 'home'
            //             },
            //             oldPath: function(){
            //                 return 'home.modal'
            //             }
            //         },
            //     controller: 'ModalInstanceController'
            //   });
            // };

    // configure our routes

    .config(function($routeProvider) {
        $routeProvider

            .when('/', {
                templateUrl: 'routes/home.html'
            })

            .when('/appointment', {
                templateUrl: 'routes/appointments.html'
            })

            .when('/myaccount', {
                templateUrl: 'routes/myacct.html'
            })

                /////////////////////////////////////////
                /////////////////////////////////////////

                .when('/personal', {
                    templateUrl: 'routes/preverify/personal.html'
                })

                .when('/employment', {
                    templateUrl: 'routes/preverify/employment.html'
                })

                .when('/financial', {
                    templateUrl: 'routes/preverify/financial.html'
                })

                /////////////////////////////////////////
                /////////////////////////////////////////

                .when('/checkout', {
                    templateUrl: 'routes/checkout/checkout.html'
                })

                .when('/check', {
                    templateUrl: 'routes/checkout/checkout_our.html'
                })

                .when('/review', {
                    templateUrl: 'routes/checkout/review.html'
                })

                
                .when('/success', {
                    templateUrl: 'routes/checkout/sucess.html'
                })

                /////////////////////////////////////////
                /////////////////////////////////////////

                .when('/dashboard', {
                    templateUrl: 'routes/dashboard/dash.html'
                })

                /////////////////////////////////////////
                /////////////////////////////////////////

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

    })

                        /////////////////////////////////////////
                /////////////////////////////////////////                /////////////////////////////////////////
                /////////////////////////////////////////                /////////////////////////////////////////
                /////////////////////////////////////////                /////////////////////////////////////////
                /////////////////////////////////////////

    .controller('ProfileModalCtrl', ['$scope', '$modal', 
        function ($scope, $modal) {
            $scope.showModal = function () {
                $scope.modalInstance = $modal.open({
                        templateUrl : 'routes/modal/example.html',
                        backdrop:'static',
                        controller: 'AddCtrl',
                        resolve: {
                            '$modalInstance': function() { return function() { return modalInstance; } }
                        }

                });
        };
    }])

    .controller('RegisterModalCtrl', ['$scope', '$modal', 
        function ($scope, $modal) {
            $scope.showModal = function () {
                $scope.modalInstance = $modal.open({
                        templateUrl : 'routes/modal/register.html',
                        backdrop:'static',
                        controller: 'AddCtrl',
                        resolve: {
                            '$modalInstance': function() { return function() { return modalInstance; } }
                        }

                });
        };
    }])

    .controller('LoginModalCtrl', ['$scope', '$modal', 
        function ($scope, $modal) {
            $scope.showModal = function () {
                $scope.modalInstance = $modal.open({
                        templateUrl : 'routes/modal/login.html',
                        backdrop:'static',
                        controller: 'AddCtrl',
                        resolve: {
                            '$modalInstance': function() { return function() { return modalInstance; } }
                        }

                });
        };
    }])

    .controller('AddCtrl', ['$scope', '$modalInstance',
        function ($scope, $modalInstance) {
            $scope.closeModal = function() {
                console.log('cue');
                $modalInstance().close();
            };
    }]);

// .factory('ProfileModalCtrl', ['$modal', '$modalStack' function($modal, $modalStack) {
//     return {
//         trigger: function(template) {
//             $modal.open({
//                 templateUrl: template, size: 'lg', controller: function($scope, $modalInstance) {
//                     $scope.ok = function() {
//                         $modalInstance.close($scope.selected.item);
//                     };
//                     $scope.cancel = function() {
//                         $modalInstance.dismiss('cancel');
//                     };
//                 }
//             });
//         },         
//         close: function(reason) {
//             $modalStack.dismissAll(reason);
//         }
//     };
// }]);




