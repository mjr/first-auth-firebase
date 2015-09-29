(function () {
    angular.module('driver').constant('APP_SETTINGS', {
        "FIREBASE_URL": "https://autoschool.firebaseio.com/"
    });

    angular.module('driver').run(function ($rootScope, $location) {
        $rootScope.user = null;

        $rootScope.$on("$routeChangeStart", function (event, next, current) {
            if ($rootScope.user == null) {
                $location.path("/login");
            }
        });
    });
})();
