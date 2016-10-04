import angular from 'angular';
import 'angular-mocks';
import {title} from './title';

describe('title component', () => {
  beforeEach(() => {
    angular
      .module('conslogTitle', ['app/title.html'])
      .component('conslogTitle', title);
    angular.mock.module('conslogTitle');
  });

  it('should render Dashboard graph Conslog', angular.mock.inject(($rootScope, $compile) => {
    const element = $compile('<conslog-title></conslog-title>')($rootScope);
    $rootScope.$digest();
    const title = element.find('h1');
    expect(title.html().trim()).toEqual('Dashboard graph Conslog');
  }));
});
