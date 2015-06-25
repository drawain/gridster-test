'use strict';

class DashboardController {

  constructor () {
    $(() => {
      $(".gridster ul").gridster({
        widget_base_dimensions: ['auto', 140],
        autogenerate_stylesheet: true,
        min_cols: 1,
        max_cols: 6,
        widget_margins: [15, 15],
        resize: {
            enabled: true
        }
      });
    });

    this.chartConfig = {
        options: {
            chart: {
              type: 'line',
              width: 200,
              height: 100
            }
        },
        series: [{
            data: [10, 15, 12, 8, 7]
        }],
        title: {
            text: 'Hello'
        },

        loading: false
    }
  }


}

module.exports = DashboardController;
