/**
 * [y] hybris Platform
 *
 * Copyright (c) 2000-2015 hybris AG
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of hybris
 * ("Confidential Information"). You shall not disclose such Confidential
 * Information and shall use it only in accordance with the terms of the
 * license agreement you entered into with hybris.
 */

(function () {
    'use strict';

    angular.module('ds.home')
        .controller('TenderCtrl', ['$scope', '$state', 'TenderSvc', 'account', 'AuthDialogManager', 'GlobalData',
            function ($scope, $state, TenderSvc, account, AuthDialogManager, GlobalData) {
                var modal;
                $scope.tender = {};


                var _login = function(dOpts, opts) {
                    modal = AuthDialogManager.open(dOpts, opts).then(function(){
                        // we should be redirecting to the homepage on dismiss or something
                        // but the promise is weird so we do nothing for now.
                    }, function() {
                        $state.go('base.home');
                    });

                };



                if (!GlobalData.user.isAuthenticated) {
                    _login({windowClass:'mobileLoginModal'}, {required: true});
                }


                $scope.createTender = function(){
                    TenderSvc.createTender($scope.tender);
                };



            }]);
})();