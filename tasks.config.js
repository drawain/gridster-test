module.exports = {
  server: {
    environmentVariables: {
      PORT: process.env.PORT || 9100,
      BASE_URL: process.env.BASE_URL || 'http://localhost:9100'
    }
  },
  client: {
    vendors: [
      'node_modules/jquery/dist/jquery.js',
      'node_modules/gridster/dist/jquery.gridster.js',
      'node_modules/highcharts/scripts/highcharts.js',
      'node_modules/angular/angular.js',
      'node_modules/highcharts-ng-temp/dist/highcharts-ng.js'
    ],
    app: {
      testModules: ['node_modules/angular-mocks/angular-mocks.js']
    }
  }
};