import angular from 'angular';

import {overview} from './overview';

export const dashboardModule = 'dashboard';

angular
.module(dashboardModule, [])
.component('dashboardOverview', overview);
