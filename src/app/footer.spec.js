import angular from 'angular';
import 'angular-mocks';
import {footer} from './footer';

describe('footer component', () => {
  beforeEach(() => {
    angular
      .module('conslogFooter', ['app/footer.html'])
      .component('conslogFooter', footer);
    angular.mock.module('conslogFooter');
  });

  it('should render \'Guilherme Andrade de Souza\' at footer', angular.mock.inject(($rootScope, $compile) => {
    const element = $compile('<conslog-footer></conslog-footer>')($rootScope);
    $rootScope.$digest();
    const footer = element.find('a');
    expect(footer.html().trim()).toEqual('Create by Guilherme Andrade de Souza :)');
  }));
});
