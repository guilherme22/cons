
import angular from 'angular';
import c3 from 'c3';
import 'c3/c3.min.css';

class OverviewController {
  /** @ngInject */
  constructor($http) {
    $http
      .get('app/dashboard/overview.json')
      .then(response => {
          var chart = c3.generate({
            bindTo:'#chart',
            data: response.data
          })
      });
  }
}

export const overview = {
  template: require('./overview.html'),
  controller: OverviewController
};
