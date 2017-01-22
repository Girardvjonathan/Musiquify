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
        .controller('TendersCtrl', ['$scope', '$state', 'TenderSvc',
            function ($scope, $state, TenderSvc) {
                $scope.tenders = [];


                var _getTenders = function() {
                    TenderSvc.getTenders().then(function(data){
                        console.log(data);
                        //$scope.tenders = data.data;
                    });


                    $scope.tenders = [{
                        'ownerId': 'C10101010',
                        'title': 'In yaas',
                        'startDate': '2017-01-22T11:25:00.000Z',
                        'endDate': '2017-01-22T14:25:00.000Z',
                        'timeLength': '3:00:00',
                        'type': 'event',
                        'minPrice': '500',
                        'maxPrice': '800',
                        'description': 'Party hard at ConUHacks!',
                        'location': '1450 Guy Street, Montreal, QC, CA',
                        'musicalStyle': 'Trans-Rock-Techno-Punk-Metal-Trash-Core'
                    }];
                };

                _getTenders();




            }]);
})();