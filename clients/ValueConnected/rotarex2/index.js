class Collection extends Array {
    sum(prop) {
        //arr.reduce((accumulator, current) => accumulator + current.x, 0);
        return this.reduce((accumulator, current) => accumulator + current[prop], 0);
    }
}
const round2dec = (val) => {
    return (Math.round(val * 100) / 100)
}



var myApp = angular.module('myApp', [])
    .controller('myCtrl', ['$scope', function ($scope) {

        $scope.Math = window.Math;
        var vm = this;

        vm.brandColorsNormal = ["#004593", "#F27707", "#FFE000", "#81C341", "#00B8B0", "#712886"];
        vm.brandColorsDark = ["#023970", "#D15421", "#FDB713", "#02AA4D", "#009988", "#712886"];
        vm.chartColors = ["#FBB679", "#FFF78C", "#CAE3AA", "#A9DCD6", "#ADDFEB", "8CC6EC", "F4C9DF"];
        vm.IsChartsVisible = false;
        vm.isNpvTableVisible = false;
        vm.numberFormat = new Intl.NumberFormat('en-US', { maximumFractionDigits: 0, });
        vm.currencyFormat = new Intl.NumberFormat('en-US', { style: "currency", currency: "USD", maximumFractionDigits: 0, });

        vm.model = {

            C9: 9000000,
            C10: 1,
            C11: 0,
            C12: 1240700,
            C13: 0,
            C14: 860360,
            C15: 1100000,
            C16: 1000000,
            C20: 2.3,
            C21: 97.7,
            C24: 2.7,
            C29: 7000000,
            C39: 10,
            C40: 50,
            C42: 5,

            E9: 8500000,
            E10: 1,
            E11: 500000,
            E12: 1240700,
            E13: 0,
            E14: 860360,
            E15: 1100000,
            E16: 1000000,
            E20: 7.1,
            E21: 83,
            E24: 29,
            E29: 5000000,
            E31: 2500000,
            E39: 25,
            E40: 5,
            E42: 25,

            G9: 204000,
            G10: 1,
            G11: 500000,
            G12: 1240700,
            G13: 1049000,
            G14: 600000,
            G15: 1100000,
            G16: 1000000,
            G20: 13.7,
            G21: 89.4,
            G24: 65.4,
            G29: 7000000,
            G39: 25,
            G40: 5,
            G42: 25,

            I9: 1100000,
            I10: 1,
            I11: 2914721,
            I12: 1240700,
            I13: 0,
            I14: 860360,
            I15: 4000000,
            I16: 1000000,
            I20: 12,
            I21: 65,
            I24: 5.2,
            I29: 7000000,
            I39: 5,
            I40: 5,
            I42: 45,

            B28: 2500000,
            B30: 7000000,

            get E28() { return (this.I9 * this.I10) + (this.I11 + this.I12 + this.I13 + this.I14 + this.I15 + this.I16) },
            E30: 7000000,

            I28: 5000000,
            I30: 7000000,

            I35: 12,
            C59: 100,

            get J39() { return this.C39 + this.E39 + this.G39 + this.I39 },
            get J40() { return this.C40 + this.E40 + this.G40 + this.I40 },

            get C47() { return (this.C39 * (this.C20 / 100)) * this.I35 },
            get C48() { return (this.C39 * (this.C21 / 100)) * this.I35 },
            get C49() { return (this.C39 * this.I35) - this.C48 },
            get C51() { return (this.C39 * (this.C24 / 100)) * this.I35 },
            get C53() { return (this.C39 * ((this.C10 * this.C9) + (this.C11 + this.C12 + this.C13 + this.C14 + this.C15 + this.C16))) * this.I35 },
            get C54() { return this.C47 * this.B28 },
            get C55() { return this.C49 * this.E28 },
            get C56() { return this.C51 * this.B30 },
            get C57() { return (this.C53 + this.C54 + this.C55 + this.C56) },
            get C58() { return this.C57 / (this.C39 * this.I35) },
            get C65() { return (this.C40 * (this.C20 / 100)) * this.I35 },
            get C66() { return (this.C40 * (this.C21 / 100)) * this.I35 },
            get C67() { return (this.C40 * this.I35) - this.C66 },
            get C69() { return (this.C40 * (this.C24 / 100)) * this.I35 },
            get C71() { return (this.C40 * ((this.C10 * this.C9) + (this.C11 + this.C12 + this.C13 + this.C14 + this.C15 + this.C16))) * this.I35 },
            get C72() { return this.C65 * this.B28 },
            get C73() { return this.C67 * this.E28 },
            get C74() { return this.C69 * this.B30 },
            get C75() { return (this.C71 + this.C72 + this.C73 + this.C74) },
            get C76() { return this.C75 / (this.C40 * this.I35) },
            get C77() { return 100 },
            get C82() { return this.J53 },
            get C83() { return this.J54 },
            get C84() { return this.J55 },
            get C85() { return this.J56 },
            get C86() { return (this.C89 < this.E89 ? this.E89 - this.C89 : 0) },
            get C88() { return (this.C82 + this.C83 + this.C84 + this.C85 + this.C86) },
            get C89() { return (this.C82 + this.C83 + this.C84 + this.C85) },

            get E47() { return (this.E39 * (this.E20 / 100)) * this.I35 },
            get E48() { return (this.E39 * (this.E21 / 100)) * this.I35 },
            get E49() { return (this.E39 * this.I35) - this.E48 },
            get E51() { return (this.E39 * (this.E24 / 100)) * this.I35 },
            get E53() { return (this.E39 * ((this.E10 * this.E9) + (this.E11 + this.E12 + this.E13 + this.E14 + this.E15 + this.E16))) * this.I35 },
            get E54() { return this.E47 * this.B28 },
            get E55() { return this.E49 * this.E28 },
            get E56() { return this.E51 * this.I28 },
            get E57() { return (this.E53 + this.E54 + this.E55 + this.E56) },
            get E58() { return this.E57 / (this.E39 * this.I35) },
            get E59() { return (this.E58 / this.C58) },
            get E65() { return (this.E40 * (this.E20 / 100)) * this.I35 },
            get E66() { return (this.E40 * (this.E21 / 100)) * this.I35 },
            get E67() { return (this.E40 * this.I35) - this.E66 },
            get E69() { return (this.E40 * (this.E24 / 100)) * this.I35 },
            get E71() { return (this.E40 * ((this.E10 * this.E9) + (this.E11 + this.E12 + this.E13 + this.E14 + this.E15 + this.E16))) * this.I35 },
            get E72() { return this.E65 * this.B28 },
            get E73() { return this.E67 * this.E28 },
            get E74() { return this.E69 * this.I28 },
            get E75() { return (this.E71 + this.E72 + this.E73 + this.E74) },
            get E76() { return this.E75 / (this.E40 * this.I35) },
            get E77() { return (this.E76 / this.C58) },
            get E82() { return this.J71 },
            get E83() { return this.J72 },
            get E84() { return this.J73 },
            get E85() { return this.J74 },
            get E86() { return (this.E89 <= this.C89 ? this.C89 - this.E89 : 0) },
            get E88() { return (this.E82 + this.E83 + this.E84 + this.E85 + this.E86) },
            get E89() { return (this.E82 + this.E83 + this.E84 + this.E85) },

            get G47() { return (this.G39 * (this.G20 / 100)) * this.I35 },
            get G48() { return (this.G39 * (this.G21 / 100)) * this.I35 },
            get G49() { return (this.G39 * this.I35) - this.G48 },
            get G51() { return (this.G39 * (this.G24 / 100)) * this.I35 },
            get G53() { return (this.G39 * ((this.G10 * this.G9) + (this.G11 + this.G12 + this.G13 + this.G14 + this.G15 + this.G16))) * this.I35 },
            get G54() { return this.G47 * this.B28 },
            get G55() { return this.G49 * this.E28 },
            get G56() { return this.G51 * this.E30 },
            get G57() { return (this.G53 + this.G54 + this.G55 + this.G56) },
            get G58() { return this.G57 / (this.G39 * this.I35) },
            get G59() { return (this.G58 / this.C58) },
            get G65() { return (this.G40 * (this.G20 / 100)) * this.I35 },
            get G66() { return (this.G40 * (this.G21 / 100)) * this.I35 },
            get G67() { return (this.G40 * this.I35) - this.G66 },
            get G69() { return (this.G40 * (this.G24 / 100)) * this.I35 },
            get G71() { return (this.G40 * ((this.G10 * this.G9) + (this.G11 + this.G12 + this.G13 + this.G14 + this.G15 + this.G16))) * this.I35 },
            get G72() { return this.G65 * this.B28 },
            get G73() { return this.G67 * this.E28 },
            get G74() { return this.G69 * this.E30 },
            get G75() { return (this.G71 + this.G72 + this.G73 + this.G74) },
            get G76() { return this.G75 / (this.G40 * this.I35) },
            get G77() { return (this.G76 / this.G58) },

            get I31() { return (this.I9 * this.I10) + (this.I11 + this.I12 + this.I13 + this.I14 + this.I15 + this.I16) },
            get I47() { return (this.I39 * (this.I20 / 100)) * this.I35 },
            get I48() { return (this.I39 * (this.I21 / 100)) * this.I35 },
            get I49() { return (this.I39 * this.I35) - this.I48 },
            get I51() { return (this.I39 * (this.I24 / 100)) * this.I35 },
            get I53() { return (this.I39 * ((this.I10 * this.I9) + (this.I11 + this.I12 + this.I13 + this.I14 + this.I15 + this.I16))) * this.I35 },
            get I54() { return this.I47 * this.B28 },
            get I55() { return this.I49 * this.E28 },
            get I56() { return this.I51 * this.I30 },
            get I57() { return (this.I53 + this.I54 + this.I55 + this.I56) },
            get I58() { return this.I57 / (this.I39 * this.I35) },
            get I59() { return (this.I58 / this.C58) },
            get I65() { return (this.I40 * (this.I20 / 100)) * this.I35 },
            get I66() { return (this.I40 * (this.I21 / 100)) * this.I35 },
            get I67() { return (this.I40 * this.I35) - this.I66 },
            get I69() { return (this.I40 * (this.I24 / 100)) * this.I35 },
            get I71() { return (this.I40 * ((this.I10 * this.I9) + (this.I11 + this.I12 + this.I13 + this.I14 + this.I15 + this.I16))) * this.I35 },
            get I72() { return this.I65 * this.B28 },
            get I73() { return this.I67 * this.E28 },
            get I74() { return this.I69 * this.I30 },
            get I75() { return (this.I71 + this.I72 + this.I73 + this.I74) },
            get I76() { return this.I75 / (this.I40 * this.I35) },
            get I77() { return (this.I76 / this.I58) },
            get I83() { return this.J47 },
            get I84() { return this.J49 },
            get I85() { return this.J51 },
            get I86() { return (this.I83 + this.I84 + this.I85) < (this.J83 + this.J84 + this.J85) ? (this.J83 + this.J84 + this.J85) - (this.I83 + this.I84 + this.I85) : 0 },
            get I87() { return (this.I83 + this.I84 + this.I85) },
            get I91() { return (this.J54) },
            get I92() { return (this.J55) },
            get I93() { return (this.J56) },
            get I94() { return (this.I91 + this.I92 + this.I93) < (this.J91 + this.J92 + this.J93) ? (this.J91 + this.J92 + this.J93) - (this.I91 + this.I92 + this.I93) : 0 },
            get I95() { return (this.I91 + this.I92 + this.I93) },

            get J47() { return Math.round(this.C47 + this.E47 + this.G47 + this.I47) },
            get J49() { return Math.round(this.C49 + this.E49 + this.G49 + this.I49) },
            get J51() { return Math.round(this.C51 + this.E51 + this.G51 + this.I51) },
            get J53() { return this.C53 + this.E53 + this.G53 + this.I53 },
            get J54() { return this.C54 + this.E54 + this.G54 + this.I54 },
            get J55() { return this.C55 + this.E55 + this.G55 + this.I55 },
            get J56() { return this.C56 + this.E56 + this.G56 + this.I56 },
            get J57() { return this.C57 + this.E57 + this.G57 + this.I57 },
            get J65() { return Math.round(this.C65 + this.E65 + this.G65 + this.I65) },
            get J67() { return Math.round(this.C67 + this.E67 + this.G67 + this.I67) },
            get J69() { return Math.round(this.C69 + this.E69 + this.G69 + this.I69) },
            get J71() { return this.C71 + this.E71 + this.G71 + this.I71 },
            get J72() { return this.C72 + this.E72 + this.G72 + this.I72 },
            get J73() { return this.C73 + this.E73 + this.G73 + this.I73 },
            get J74() { return this.C74 + this.E74 + this.G74 + this.I74 },
            get J75() { return this.C75 + this.E75 + this.G75 + this.I75 },
            get J83() { return this.J65 },
            get J84() { return this.J67 },
            get J85() { return this.J69 },
            get J86() { return (this.J83 + this.J84 + this.J85) <= (this.I83 + this.I84 + this.I85) ? (this.I83 + this.I84 + this.I85) - (this.J83 + this.J84 + this.J85) : 0 },
            get J87() { return (this.J83 + this.J84 + this.J85) },
            get J91() { return (this.J72) },
            get J92() { return (this.J73) },
            get J93() { return (this.J74) },
            get J94() { return (this.J91 + this.J92 + this.J93) <= (this.I91 + this.I92 + this.I93) ? (this.I91 + this.I92 + this.I93) - (this.J91 + this.J92 + this.J93) : 0 },
            get J95() { return (this.J91 + this.J92 + this.J93) },
            get J105() { return (this.E86) },
            get J134() { return (this.J87) },
            get J153() { return (this.J95) },

            get L40() { return (this.C40 - this.C39) },
            get L83() { return (this.I83 - this.J83) },
            get L84() { return (this.I84 - this.J84) },
            get L85() { return (this.I85 - this.J85) },
            get L87() { return (this.I87 - this.J87) },
            get L91() { return (this.I91 - this.J91) },
            get L92() { return (this.I92 - this.J92) },
            get L93() { return (this.I92 - this.J92) },
            get L95() { return (this.I95 - this.J95) },



        };

        vm.resetDefault = () => {


        }


        $scope.$watch('vm.model', function (newVal, oldVal) {

            vm.generateChartData();
            myDonutChart.update();
            myChart1.update();
            myChart2.update();
            myChart3.update();
            //console.log(vm.model.L40);

        }, true);


        vm.getNPV = (rate, values) => {
            var npv = 0;

            for (var i = 1; i <= values.length; i++) {
                npv += values[i - 1] / Math.pow(rate / 100 + 1, i);
            }

            return npv;
        }

        vm.generateChartData = () => {

            var dataDonut = [Math.round(vm.model.L95), Math.round(vm.model.E86), Math.round(vm.model.L87)];
            myDonutChart.config.data.datasets[0].values = dataDonut;

            var data1 = [
                [vm.model.C82, vm.model.E82],
                [vm.model.C85, vm.model.E85],
                [vm.model.C84, vm.model.E84],
                [vm.model.C83, vm.model.E83],
            ];

            var data2 = [
                [vm.model.I83, vm.model.I84, vm.model.I85],
                [vm.model.J83, vm.model.J84, vm.model.J85]
            ];

            var data3 = [
                [vm.model.I91, vm.model.I92, vm.model.I93],
                [vm.model.J91, vm.model.J92, vm.model.J93]
            ];

            myChart1.config.data.datasets[0].data = data1[0];
            myChart1.config.data.datasets[1].data = data1[1];
            myChart1.config.data.datasets[2].data = data1[2];
            myChart1.config.data.datasets[3].data = data1[3];

            myChart2.config.data.datasets[0].data = data2[0];
            myChart2.config.data.datasets[1].data = data2[1];

            myChart3.config.data.datasets[0].data = data3[0];
            myChart3.config.data.datasets[1].data = data3[1];
        }

        vm.addToSessionStorage = (key, val) => {
            const item = sessionStorage.getItem(key);
            if (!item || item === undefined || item === null) {
                sessionStorage.setItem(key, val);
            }

            var myModalEl = document.getElementById('myModal');
            var modal = bootstrap.Modal.getInstance(myModalEl)
            modal.hide();
        }

        vm.initializaDonutChart = () => {
            const ctx = document.getElementById('myDonutChart').getContext('2d');
            const labels = [vm.model.B48, ['Additional', 'MedSurg LOS'], ['Additional', 'ICU LOS'], ['Additional', 'Ventilation days']];

            const chartData = {
                labels: ['A', 'b', 'c'],
                datasets: [
                    {
                        backgroundColor: ['#001871', '#001871', '#001871'],
                        data: [33, 33, 33],
                        labels: [
                            "Costos de \ncomplicaciones \nevitados",
                            "Ahorros totales",
                            "Casos de \ncomplicaciones \nevitados",
                        ],
                        values: [Math.round(vm.model.L95), Math.round(vm.model.E86), Math.round(vm.model.L87)],
                        datalabels: {
                            labels: {
                                value: {
                                    align: 'top',
                                    font: { size: 18 },
                                    color: 'white',
                                    formatter: function (value, ctx) {
                                        return ctx.dataIndex == 2 ?
                                            vm.numberFormat.format(ctx.dataset.values[ctx.dataIndex]) :
                                            vm.currencyFormat.format(ctx.dataset.values[ctx.dataIndex]);
                                    },
                                    padding: 10
                                },
                                name: {
                                    align: 'bottom',
                                    font: { size: 11 },
                                    formatter: function (value, ctx) {
                                        return ctx.dataset.labels[ctx.dataIndex];
                                    }
                                },
                            },
                            textAlign: "center",
                        },
                    },
                ],

            };

            const chartConfig = {
                type: 'doughnut',
                data: chartData,
                options: {
                    responsive: true,
                    maintainAspectRatio: true,
                    events: ['click'],
                    onClick: function (e) {
                        if (myChart.data.datasets.length > 0) {
                            if (myChart.data.datasets[0].backgroundColor[0] === '#fff') {
                                myChart.data.datasets[0].backgroundColor = ['#5369E5', '#5369E5', '#5369E5', '#5369E5', '#5369E5'];
                                myChart.data.datasets[0].hoverBackgroundColor = ['#5369E5', '#5369E5', '#5369E5', '#5369E5', '#5369E5'];
                            }
                            else
                                myChart.data.datasets[0].backgroundColor = ['#fff', '#fff', '#fff', '#fff', '#fff'];
                        }
                        myChart.update();
                    },
                    cutout: 80,
                    rotation: 0,
                    plugins: {
                        legend: {
                            display: false,
                        },
                        tooltip: false,
                        datalabels: {
                            color: 'white',
                            display: function (ctx) {
                                return ctx.dataset.data[ctx.dataIndex] > 10;
                            },
                            font: {
                                weight: 'normal',
                            },
                            offset: 0,
                            padding: 0
                        },
                        doughnutLabel: {
                            labels: [
                                {
                                    text: () => { return (vm.model.L40) },
                                    color: '#000',
                                    font: {
                                        size: '35',
                                        family: 'Arial, Helvetica, sans-serif',
                                        weight: 'bold'
                                    }
                                },
                                {
                                    text: 'Pacientes',
                                    font: {
                                        size: '14'
                                    },
                                    color: '#000'
                                },
                                {
                                    text: 'Rotarex',
                                    font: {
                                        size: '14'
                                    },
                                    color: '#000'
                                },
                                {
                                    text: 'adicionales',
                                    font: {
                                        size: '14'
                                    },
                                    color: '#000'
                                },
                            ]
                        }
                    },
                    elements: {
                        line: {
                            fill: false
                        },
                        point: {
                            hoverRadius: 7,
                            radius: 5
                        }
                    },
                    layout: {
                        padding: 5
                    }

                },
            };

            myDonutChart = new Chart(ctx, chartConfig);
        }

        vm.initializaChart1 = () => {
            const ctx1 = document.getElementById('myChart1').getContext('2d');
            const labels1 = ["Escenario actual", "Escenario Rotarex"];
            const chartData1 = {
                labels: labels1,
                datasets: [
                    {
                        label: "Costos Tratamiento",
                        data: [vm.model.C82, vm.model.E82],
                        backgroundColor: "#0090B5"
                    },
                    {
                        label: "Costos Amputaciones",
                        data: [vm.model.C83, vm.model.E83],
                        backgroundColor: "#FDB713"
                    },
                    {
                        label: "Reint (estenosis resid)",
                        data: [vm.model.C84, vm.model.E84],
                        backgroundColor: "#712886"
                    },
                    {
                        label: "Costos Complicaciones",
                        data: [vm.model.C85, vm.model.E85],
                        backgroundColor: "#FBB679"
                    },
                    {
                        label: "Ahorros",
                        data: [vm.model.C86, vm.model.E86],
                        backgroundColor: "#02AA4D"
                    },


                ]
            };

            const chartConfig1 = {
                type: 'bar',
                data: chartData1,
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        x: {
                            stacked: true,
                        },
                        y: {
                            stacked: true,
                            ticks: {
                                // Abbreviate the millions
                                callback: function (value, index, values) {
                                    return new Intl.NumberFormat("en-US", {
                                        notation: "compact",
                                        compactDisplay: "short",
                                    }).format(value);
                                }
                            }
                        }
                    },
                    plugins: {
                        title: {
                            display: true,
                            text: 'Resultados financieros',
                            font: {
                                size: 16
                            },
                            color: '#000000'
                        },
                        subtitle: {
                            display: true,
                            position: 'bottom',
                            text: () => { return [' ', vm.currencyFormat.format(vm.model.E86), 'Ahorros en costos totales'] },
                            font: {
                                size: 16
                            }
                        },
                        legend: {
                            display: true,
                            position: "right",
                        },
                        datalabels: {
                            display: false,
                        },
                        tooltip: {
                            mode: 'x',
                            callbacks: {
                                label: function (context) {
                                    let label = context.dataset.label || '';

                                    if (label) {
                                        label += ': ';
                                    }
                                    if (context.parsed.y !== null) {
                                        label += vm.currencyFormat.format(context.parsed.y);
                                    }
                                    return label;
                                }
                            }
                        },
                    }
                },
            };

            myChart1 = new Chart(ctx1, chartConfig1);
        }

        vm.initializaChart2 = () => {
            const ctx2 = document.getElementById('myChart2').getContext('2d');
            const labels2 = ["Amputación en 30 días", ["Estenosis residual", "posible reintervención"], "Complicaciones específicas"];
            const chartData2 = {
                labels: labels2,
                datasets: [
                    {
                        label: "Escenario actual",
                        data: [vm.model.I83, vm.model.I84, vm.model.I85],
                        backgroundColor: [vm.brandColorsDark[1]]
                    },
                    {
                        label: "Escenario Rotarex",
                        data: [vm.model.J83, vm.model.J84, vm.model.J85],
                        backgroundColor: [vm.brandColorsDark[0]]
                    },

                ]
            };

            const chartConfig2 = {
                type: 'bar',
                data: chartData2,
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    },
                    plugins: {
                        title: {
                            display: true,
                            text: 'Casos de complicaciones',
                            font: {
                                size: 16
                            },
                            color: '#000000'
                        },
                        subtitle: {
                            display: true,
                            position: 'bottom',
                            text: () => { return [' ', vm.model.J86, 'Menos casos de complicaciones'] },
                            font: {
                                size: 16
                            }
                        },
                        legend: {
                            display: true,
                            position: "right",
                        },
                        datalabels: {
                            display: false,
                        },
                        tooltip: {
                            mode: 'x',
                            callbacks: {
                                label: function (context) {
                                    let label = context.dataset.label || '';

                                    if (label) {
                                        label += ': ';
                                    }
                                    if (context.parsed.y !== null) {
                                        label += vm.numberFormat.format(context.parsed.y);
                                    }
                                    return label;
                                }
                            }
                        },
                    }
                },
            };

            myChart2 = new Chart(ctx2, chartConfig2);
        }

        vm.initializaChart3 = () => {
            const ctx3 = document.getElementById('myChart3').getContext('2d');
            const labels3 = ["Amputación en 30 días", ["Estenosis residual", "posible reintervención"], "Complicaciones específicas"];
            const chartData3 = {
                labels: labels3,
                datasets: [
                    {
                        label: "Escenario actual",
                        data: [vm.model.I91, vm.model.I92, vm.model.I93],
                        backgroundColor: [vm.brandColorsDark[0], vm.brandColorsDark[1], vm.brandColorsDark[2], vm.brandColorsDark[5]],
                        backgroundColor: [vm.brandColorsDark[1]]
                    },
                    {
                        label: "Escenario Rotarex",
                        data: [vm.model.J91, vm.model.J92, vm.model.J93],
                        backgroundColor: [vm.brandColorsDark[0], vm.brandColorsDark[1], vm.brandColorsDark[2], vm.brandColorsDark[5]],
                        backgroundColor: [vm.brandColorsDark[0]]
                    }

                ]
            };

            const chartConfig3 = {
                type: 'bar',
                data: chartData3,
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    // locale: 'pt-BR'
                    scales: {
                        y: {
                            beginAtZero: true,
                            ticks: {
                                // Abbreviate the millions
                                callback: function (value, index, values) {
                                    return new Intl.NumberFormat("en-US", {
                                        notation: "compact",
                                        compactDisplay: "short",
                                    }).format(value);
                                }
                            }
                        }
                    },
                    plugins: {
                        title: {
                            display: true,
                            text: 'Costos de complicaciones',
                            font: {
                                size: 16
                            },
                            color: '#000000'
                        },
                        subtitle: {
                            display: true,
                            position: 'bottom',
                            font: {
                                size: 16
                            },
                            text: () => { return [' ', vm.currencyFormat.format(vm.model.J94), 'Menos costos de complicaciones'] }
                        },
                        legend: {
                            display: true,
                            position: "right",
                        },
                        datalabels: {
                            display: false,
                        },
                        tooltip: {
                            mode: 'x',
                            callbacks: {
                                label: function (context) {
                                    let label = context.dataset.label || '';

                                    if (label) {
                                        label += ': ';
                                    }
                                    if (context.parsed.y !== null) {
                                        label += vm.currencyFormat.format(context.parsed.y);
                                    }
                                    return label;
                                }
                            }
                        },
                    }
                },
            };

            myChart3 = new Chart(ctx3, chartConfig3);
        }

        vm.$onInit = function () {

            const accepted = sessionStorage.getItem("accepted");

            // if (!accepted || accepted === undefined || accepted === null) {
            //     var myModal = new bootstrap.Modal(document.getElementById('myModal'), { backdrop: 'static', focus: true, keyboard: false })
            //     myModal.show();
            // }
            vm.modelClone = { ...vm.model };

            console.log(vm.model);

            vm.initializaDonutChart();
            vm.initializaChart1();
            vm.initializaChart2();
            vm.initializaChart3();
        }

    }]);

myApp.directive('format', ['$filter', function ($filter) {
    return {
        require: '?ngModel',
        scope: {
            digits: '=?'
        },
        link: function (scope, elem, attrs, ctrl) {
            if (!ctrl) return;

            var format = {
                prefix: '',
                centsSeparator: '.',
                thousandsSeparator: ',',
                centsLimit: scope.digits ?? 2
            };

            ctrl.$parsers.unshift(function (value) {
                //elem.priceFormat(format);
                //console.log('parsers', elem[0].value, value, ctrl.$viewValue);
                return Number(ctrl.$viewValue.replace(".", "").replace(",", "")) / Math.pow(10, format.centsLimit);
            });

            ctrl.$formatters.unshift(function (value) {
                elem[0].value = parseFloat((ctrl.$modelValue * Math.pow(10, format.centsLimit)).toFixed(format.centsLimit));
                elem.priceFormat(format);
                //console.log('formatters', elem[0].value);
                return elem[0].value;
            })
        }
    };
}]);

(function ($) {
    $.fn.priceFormat = function (options) {
        var defaults = {
            prefix: 'US$ ',
            suffix: '',
            centsSeparator: '.',
            thousandsSeparator: ',',
            limit: false,
            centsLimit: 2,
            clearPrefix: false,
            clearSufix: false,
            allowNegative: false,
            insertPlusSign: false
        };
        var options = $.extend(defaults, options);
        return this.each(function () {
            var obj = $(this);
            var is_number = /[0-9]/;
            var prefix = options.prefix;
            var suffix = options.suffix;
            var centsSeparator = options.centsSeparator;
            var thousandsSeparator = options.thousandsSeparator;
            var limit = options.limit;
            var centsLimit = options.centsLimit;
            var clearPrefix = options.clearPrefix;
            var clearSuffix = options.clearSuffix;
            var allowNegative = options.allowNegative;
            var insertPlusSign = options.insertPlusSign;
            if (insertPlusSign) allowNegative = true;

            function to_numbers(str) {
                var formatted = '';
                for (var i = 0; i < (str.length); i++) {
                    char_ = str.charAt(i);
                    if (formatted.length == 0 && char_ == 0) char_ = false;
                    if (char_ && char_.match(is_number)) {
                        if (limit) {
                            if (formatted.length < limit) formatted = formatted + char_
                        } else {
                            formatted = formatted + char_
                        }
                    }
                }
                return formatted
            }
            function fill_with_zeroes(str) {
                while (str.length < (centsLimit + 1)) str = '0' + str;
                return str
            }
            function price_format(str) {
                var formatted = fill_with_zeroes(to_numbers(str));
                var thousandsFormatted = '';
                var thousandsCount = 0;
                if (centsLimit == 0) {
                    centsSeparator = "";
                    centsVal = ""
                }
                var centsVal = formatted.substr(formatted.length - centsLimit, centsLimit);
                var integerVal = formatted.substr(0, formatted.length - centsLimit);
                formatted = (centsLimit == 0) ? integerVal : integerVal + centsSeparator + centsVal;
                if (thousandsSeparator || $.trim(thousandsSeparator) != "") {
                    for (var j = integerVal.length; j > 0; j--) {
                        char_ = integerVal.substr(j - 1, 1);
                        thousandsCount++;
                        if (thousandsCount % 3 == 0) char_ = thousandsSeparator + char_;
                        thousandsFormatted = char_ + thousandsFormatted
                    }
                    if (thousandsFormatted.substr(0, 1) == thousandsSeparator) thousandsFormatted = thousandsFormatted.substring(1, thousandsFormatted.length);
                    formatted = (centsLimit == 0) ? thousandsFormatted : thousandsFormatted + centsSeparator + centsVal
                }
                if (allowNegative && (integerVal != 0 || centsVal != 0)) {
                    if (str.indexOf('-') != -1 && str.indexOf('+') < str.indexOf('-')) {
                        formatted = '-' + formatted
                    } else {
                        if (!insertPlusSign) formatted = '' + formatted;
                        else formatted = '+' + formatted
                    }
                }
                if (prefix) formatted = prefix + formatted;
                if (suffix) formatted = formatted + suffix;
                return formatted
            }
            function key_check(e) {
                var code = (e.keyCode ? e.keyCode : e.which);
                var typed = String.fromCharCode(code);
                var functional = false;
                var str = obj.val();
                var newValue = price_format(str + typed);
                if ((code >= 48 && code <= 57) || (code >= 96 && code <= 105)) functional = true;
                if (code == 8) functional = true;
                if (code == 9) functional = true;
                if (code == 13) functional = true;
                if (code == 46) functional = true;
                if (code == 37) functional = true;
                if (code == 39) functional = true;
                if (allowNegative && (code == 189 || code == 109)) functional = true;
                if (insertPlusSign && (code == 187 || code == 107)) functional = true;
                if (!functional) {
                    e.preventDefault();
                    e.stopPropagation();
                    if (str != newValue) obj.val(newValue)
                }
            }
            function price_it() {
                var str = obj.val();
                var price = price_format(str);
                if (str != price) obj.val(price)
            }
            function add_prefix() {
                var val = obj.val();
                obj.val(prefix + val)
            }
            function add_suffix() {
                var val = obj.val();
                obj.val(val + suffix)
            }
            function clear_prefix() {
                if ($.trim(prefix) != '' && clearPrefix) {
                    var array = obj.val().split(prefix);
                    obj.val(array[1])
                }
            }
            function clear_suffix() {
                if ($.trim(suffix) != '' && clearSuffix) {
                    var array = obj.val().split(suffix);
                    obj.val(array[0])
                }
            }
            $(this).bind('keydown.price_format', key_check);
            $(this).bind('keyup.price_format', price_it);
            $(this).bind('focusout.price_format', price_it);
            if (clearPrefix) {
                $(this).bind('focusout.price_format', function () {
                    clear_prefix()
                });
                $(this).bind('focusin.price_format', function () {
                    add_prefix()
                })
            }
            if (clearSuffix) {
                $(this).bind('focusout.price_format', function () {
                    clear_suffix()
                });
                $(this).bind('focusin.price_format', function () {
                    add_suffix()
                })
            }
            if ($(this).val().length > 0) {
                price_it();
                clear_prefix();
                clear_suffix()
            }
        })
    };
    $.fn.unpriceFormat = function () {
        return $(this).unbind(".price_format")
    };
    $.fn.unmask = function () {
        var field = $(this).val();
        var result = "";
        for (var f in field) {
            if (!isNaN(field[f]) || field[f] == "-") result += field[f]
        }
        return result
    }
})(jQuery);

Chart.register(ChartDataLabels);
