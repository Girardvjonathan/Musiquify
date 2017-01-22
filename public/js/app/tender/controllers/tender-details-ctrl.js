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
        .controller('TenderDetailsCtrl', ['$scope', '$state', 'TenderSvc', 'tender',
            function ($scope, $state, TenderSvc, tender) {
                $scope.tenders = [];
                $scope.offer = {};
                $scope.tender = (tender) ? tender : undefined;


                var _getTenders = function() {
                    TenderSvc.getTenders().then(function(data){
                        console.log(data);
                        $scope.tenders = data;
                    });
                };

                _getTenders();


                $scope.postTender = function() {
                    TenderSvc.offerTender($scope.tender._id, $scope.offer).then(function(){
                        $state.reload();
                    });
                };

            }]);
})();