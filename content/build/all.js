'use strict';

(function () {
    'use strict';

    angular.module('client', ['ui.router', 'ui.bootstrap', 'client.layout', 'client.main', 'client.services']);

    angular.module('client').config(RouteConfig).run(StateErrorHandler);

    StateErrorHandler.$inject = ['$rootScope', '$log'];

    function StateErrorHandler($rootScope, $log) {
        $rootScope.$on('$stateChangeError', function (info) {
            return $log.log(info);
        });
    }

    RouteConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

    function RouteConfig($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode(true);
    }
})();
'use strict';

(function () {
    'use strict';

    angular.module('client.layout', ['ui.router']);

    angular.module('client.layout').config(RouteConfig);

    RouteConfig.$inject = ['$stateProvider'];

    function RouteConfig($stateProvider) {
        $stateProvider.state('site', {
            views: {
                "root": {
                    templateUrl: 'client/layout/layout.tpl.html',
                    controller: 'layoutController as lc'
                }
            }
        });
    }
})();
'use strict';

(function () {
    'use strict';

    angular.module('client.main', ['ui.router']);

    angular.module('client.main').config(RouteConfig);

    RouteConfig.$inject = ['$stateProvider'];

    function RouteConfig($stateProvider) {
        $stateProvider.state('site.home', {
            url: '/',
            views: {
                'home': {
                    templateUrl: 'client/main/home/home.html',
                    controller: 'homeController as hc'
                }
            }
        });
    }
})();
'use strict';

(function () {
    'use strict';

    angular.module('client.services', []);
})();
'use strict';

(function () {
    'use strict';

    angular.module('client.layout').controller('layoutController', LayoutController);

    LayoutController.$inject = [];

    function LayoutController() {

        init();

        function init() {}
    }
})();
'use strict';

(function () {

    angular.module('client.main').controller('homeController', HomeController);

    HomeController.$inject = [];

    function HomeController() {
        var vm = this;

        init();

        function init() {}
    }
})();