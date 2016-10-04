import angular from 'angular';
import 'angular-mocks';
import {header} from './header';

describe('header component', () => {
  beforeEach(() => {
    angular
      .module('conslogHeader', ['app/header.html'])
      .component('conslogHeader', header);
    angular.mock.module('conslogHeader');
  });

  it('should render \'Conslog System\'', angular.mock.inject(($rootScope, $compile) => {
    const element = $compile('<conslog-header></conslog-header>')($rootScope);
    $rootScope.$digest();
    const header = element.find('p');
    expect(header.html().trim()).toEqual('Conslog System');
  }));
});
