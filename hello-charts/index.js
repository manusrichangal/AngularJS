
document.addEventListener('DOMContentLoaded', function () {
        var myChart = Highcharts.chart('container', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Monthly Expenditure'
            },
            subtitle: {
                text: 'Income & Expenditure'
            },
            xAxis: {
                categories: ['Jan', 'Feb', 'Mar','Apr','May','June','July']
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'top'
            },
        
            series: [{
                name: 'Income',
                data: [45000, 45000, 45000,45000,45000,45000,45000]
            }, {
                name: 'Expenditure',
                data: [32000, 30000, 35000, 25000, 20000, 40000, 22000]
            }]
        });
    });
