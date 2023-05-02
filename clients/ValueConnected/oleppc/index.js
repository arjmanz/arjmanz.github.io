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

        vm.IsChartsVisible = false;
        vm.isNpvTableVisible = false;
        vm.numberFormat = new Intl.NumberFormat('en-US', { maximumFractionDigits: 0, });
        vm.currencyFormat = new Intl.NumberFormat('en-US', { style: "currency", currency: "USD", maximumFractionDigits: 0, });

        vm.model = {
            cfTable: new Collection(),

            B48: "PPC Cases",
            B49: "Additional MedSurg LOS",
            B50: "Additional ICU LOS",
            B51: "Additional Ventilation days",

            H76: "Devices and circuits",
            H77: "Circuits only",
            H78: "Circuits only",
            H79: "Circuits only",
            H80: "Circuits only",


            B1: 1748,
            B2: 28.4,
            C7: 20.2,
            C8: 11.3,
            C9: 3.0,
            C10: 10,
            C12: 920,
            C13: 1450,
            C14: 231,
            I2: 100,
            I7: 2,
            I8: 3.92,
            I10: 27,
            I12: 95,
            I13: 1,
            I14: 9500,
            I15: 5,
            I16: 595,
            N8: 31,
            N9: 1.6,
            N10: 10,
            N11: 2,
            N12: 2.7,
            E86: 5,
            T88: 5,
            T89: 10,
            T90: 15,
            T91: 20,
            T92: 25,
            T93: 30,
            T94: 35,
            T95: 40,
            T96: 50,

            get I9() { return this.I10 },
            get T99() { return this.S99 / this.I57 },
            get B3() { return Math.round(this.B1 * (this.B2 / 100)) },
            get B110() { return Math.round((this.E52 > 0 ? (this.E52 / 4.7) : 0)) },
            get B111() { return (this.E54 > 0 ? Math.round(this.E54 / 3.8) : 0) },
            get I3() { return this.B3 - this.I4 },
            get I4() { return Math.round((this.I2 / 100) * this.B3) },
            get N14() { return (1 - (this.N8 / 100)) * (this.C8 / 100) },
            get N15() { return this.C9 - this.N9 },
            get N16() { return (1 - (this.N10 / 100)) * (this.C10 / 100) },
            get N17() { return this.I7 - this.N11 },
            get N18() { return this.I8 - this.N12 },

            get C22() { return (this.B2 / 100) },
            get L22() { return (this.B2 / 100) },

            get B27() { return Math.round(this.C22 * this.B1) - this.E27 },
            get B29() { return Math.round(this.B1 * (1 - (this.C7 / 100)) * (this.C8 / 100)) },
            get B30() { return Math.ceil(this.B29 * this.C9) },
            get B35() { return Math.round((this.C10 / 100) * this.B29) },

            get E27() { return Math.round(this.B1 * this.C22 * (this.C7 / 100)) },
            get E29() { return Math.ceil(this.E27 * (this.I9 / 100)) },
            get E30() { return this.E27 - this.E29 },
            get E31() { return Math.ceil(this.E29 * this.I8) },
            get E32() { return this.E31 },
            get E34() { return Math.round(this.B1 * (this.C7 / 100) * (this.C8 / 100)) },
            get E35() { return this.B35 },
            get E36() { return this.E34 + this.E35 },
            get E37() { return Math.round(this.E36 * this.I7) },
            get E39() { return Math.ceil(this.E35 * (this.I10 / 100)) },
            get E40() { return Math.ceil(this.E39 * this.I8) },
            get E41() { return Math.round(this.E40) },
            get E43() { return this.E32 + this.E37 + this.E41 },
            get E44() { return this.E31 + this.E40 },

            get I18() { return Math.ceil((this.I4 / 12) / this.I15) },
            get I19() { return this.I4 },
            get I20() { return this.I18 },
            get I27() { return this.B27 - this.J27 },
            get J18() { return this.I18 * this.I14 },
            get J19() { return this.I19 * this.I12 },
            get J20() { return this.I20 * this.I16 },
            get J21() { return this.J18 + this.J19 },
            get J22() { return this.J19 + this.J20 },
            get J27() { return Math.round(this.B27 * (this.I2 / 100)) },
            get I29() { return Math.round((this.I27 / (this.I27 + this.J27)) * (this.B1 * (1 - (this.C7 / 100)) * (this.C8 / 100))) },
            get J29() { return Math.round((this.J27 / (this.I27 + this.J27)) * (this.B1 * (1 - (this.C7 / 100)) * this.N14)) },
            get I30() { return Math.ceil(this.I29 * this.C9) },
            get J30() { return Math.ceil(this.J29 * this.N15) },
            get I35() { return Math.round((this.C10 / 100) * this.I29) },
            get J35() { return Math.round(this.N16 * this.J29) },


            get M27() { return this.E27 - this.N27 },
            get N27() { return Math.round(this.B1 * this.L22 * (this.C7 / 100) * (this.I2 / 100)) },
            get M29() { return Math.ceil(this.M27 * (this.I9 / 100)) },
            get N29() { return Math.ceil(this.N27 * (this.I9 / 100)) },
            get M30() { return this.M27 - this.M29 },
            get N30() { return this.N27 - this.N29 },
            get M31() { return Math.ceil(this.M29 * this.I8) },
            get N31() { return Math.ceil(this.N29 * this.N18) },
            get M32() { return this.M31 },
            get N32() { return this.N31 },

            get M34() { return Math.round((this.M27 / (this.M27 + this.N27)) * (this.B1 * (this.C7 / 100) * (this.C8 / 100))) },
            get N34() { return Math.round((this.N27 / (this.M27 + this.N27)) * (this.B1 * (this.C7 / 100) * this.N14)) },
            get M35() { return this.I35 },
            get N35() { return this.J35 },
            get M36() { return this.M34 + this.M35 },
            get N36() { return this.N34 + this.N35 },
            get M37() { return Math.ceil(this.M36 * this.I7) },
            get N37() { return Math.ceil(this.N36 * this.N17) },

            get M39() { return Math.ceil(this.M35 * (this.I10 / 100)) },
            get N39() { return Math.ceil(this.N35 * (this.I10 / 100)) },
            get M40() { return Math.ceil(this.M39 * this.I8) },
            get N40() { return Math.ceil(this.N39 * this.N18) },
            get M41() { return this.M40 },
            get N41() { return this.N40 },
            get M43() { return this.M32 + this.M37 + this.M41 },
            get M44() { return this.M31 + this.M40 },
            get N41() { return this.N40 },
            get N43() { return this.N32 + this.N37 + this.N41 },
            get N44() { return this.N31 + this.N40 },

            get C51() { return this.B29 + this.E34 }, get D51() { return ((this.I29 + this.J29) + (this.M34 + this.N34)) }, get E51() { return (this.C51 > this.D51 ? this.C51 - this.D51 : 0) },
            get C52() { return this.B30 }, get D52() { return this.I30 + this.J30 }, get E52() { return this.C52 - this.D52 },
            get C53() { return this.B35 }, get D53() { return this.I35 + this.J35 }, get E53() { return (this.C53 > this.D53) ? (this.C53 - this.D53) : 0 },
            get C54() { return this.E43 }, get D54() { return this.M43 + this.N43 }, get E54() { return this.C54 > this.D54 ? this.C54 - this.D54 : 0 },
            get C55() { return this.E44 }, get D55() { return this.M44 + this.N44 }, get E55() { return this.C55 > this.D55 ? this.C55 - this.D55 : 0 },

            get H51() { return this.C52 * this.C12 }, get I51() { return this.D52 * this.C12 }, get J51() { return this.D52 * this.C12 }, get L51() { return (this.H51 > this.I51) ? (this.H51 - this.I51) : 0 },
            get H52() { return this.C54 * this.C13 }, get I52() { return this.D54 * this.C13 }, get J52() { return this.D54 * this.C13 }, get L52() { return (this.H52 > this.I52) ? (this.H52 - this.I52) : 0 },
            get H53() { return this.C55 * this.C14 }, get I53() { return this.D55 * this.C14 }, get J53() { return this.D55 * this.C14 }, get L53() { return (this.H53 > this.I53) ? (this.H53 - this.I53) : 0 },
            get H54() { return 0 }, get I54() { return this.J21 }, get J54() { return this.J22 },
            get H55() { return (this.H57 < this.I57) ? (this.I57 - this.H57) : 0 }, get I55() { return (this.I57 <= this.H57) ? (this.H57 - this.I57) : 0 }, get J55() { return (this.J57 <= this.H57) ? this.H57 - this.J57 : 0 },
            get H57() { return (this.H51 + this.H52 + this.H53 + this.H54) }, get I57() { return (this.I51 + this.I52 + this.I53 + this.I54) }, get J57() { return (this.J51 + this.J52 + this.J53 + this.J54) },
            get H58() { return (this.H51 + this.H52 + this.H53 + this.H54 + this.H55) }, get I58() { return (this.I51 + this.I52 + this.I53 + this.I54 + this.I55) }, get J58() { return (this.J51 + this.J52 + this.J53 + this.J54 + this.J55) },

            get G79() { return this.L51 + this.L52 + this.L53 },
            get G80() { return this.G79 },
            get G81() { return this.G80 },
            get G82() { return this.G81 },
            get G83() { return this.G82 },
            get G84() { return this.G80 + this.G81 + this.G82 + this.G83 },

            get I79() { return this.J21 },
            get I80() { return this.J22 },
            get I81() { return this.I80 },
            get I82() { return this.I81 },
            get I83() { return this.I82 },
            get I84() { return this.I79 + this.I80 + this.I81 + this.I82 + this.I83 },

            get J79() { return this.G79 - this.I79 },
            get J80() { return this.G80 - this.I80 },
            get J81() { return this.G81 - this.I81 },
            get J82() { return this.G82 - this.I82 },
            get J83() { return this.G83 - this.I83 },
            get J84() { return this.J79 + this.J80 + this.J81 + this.J82 + this.J83 },

            get J87() { return this.S99 },
            get J88() { return this.I82 },
            get J89() { return this.J87 - this.J88 },
            get J90() { return this.S111 },
            get J91() { return this.I83 },
            get J92() { return this.J90 - this.J91 },
            get J93() { return this.S123 },
            get J94() { return this.I81 },
            get J95() { return this.J93 - this.J94 },
            get J96() { return this.S135 },
            get J97() { return this.I82 },
            get J98() { return this.J96 - this.J97 },
            get J99() { return this.S147 },
            get J100() { return this.I83 },
            get J101() { return this.J99 - this.J100 },
            get J102() { return this.J87 + this.J90 + this.J93 + this.J96 + this.J99 },
            get J103() { return this.J88 + this.J91 + this.J94 + this.J97 + this.J100 },
            get J104() { return vm.getNPV(this.E86, [this.J89, this.J92, this.J95, this.J98, this.J101]) },

            get M88() { return this.J89 },
            get M89() { return this.M88 + this.J92 },
            get M90() { return this.M89 + this.J95 },
            get M91() { return this.M90 + this.J98 },
            get M92() { return this.M91 + this.J101 },

            get S99() { return this.cfTable.filter(x => x.year == 1).sum("savings") },
            get S111() { return this.cfTable.filter(x => x.year == 2).sum("savings") },
            get S123() { return this.cfTable.filter(x => x.year == 3).sum("savings") },
            get S135() { return this.cfTable.filter(x => x.year == 4).sum("savings") },
            get S147() { return this.cfTable.filter(x => x.year == 5).sum("savings") },


            get G114() { return this.S99 }, get I114() { return this.I79 }, get J114() { return this.G114 - this.I114 },
            get G115() { return this.G80 }, get I115() { return this.I80 }, get J115() { return this.G115 - this.I115 },
            get G116() { return this.G81 }, get I116() { return this.I81 }, get J116() { return this.G116 - this.I116 },
            get G117() { return this.G82 }, get I117() { return this.I82 }, get J117() { return this.G117 - this.I117 },
            get G118() { return this.G83 }, get I118() { return this.I83 }, get J118() { return this.G118 - this.I118 },
            get G119() { return this.G115 + this.G116 + this.G117 + this.G118 },
            get I119() { return this.I114 + this.I115 + this.I116 + this.I117 + this.I118 },
            get J119() { return this.J114 + this.J115 + this.J116 + this.J117 + this.J118 },



            get H114() { return "Devices and circuits" },
            get H115() { return "Circuits and warranty" },
            get H116() { return "Circuits and warranty" },
            get H117() { return "Circuits and warranty" },
            get H118() { return "Circuits and warranty" },
            get H119() { return "OLE therapy" },
        };

        vm.getCashFlowFieldValue = (month, field) => {
            var result = 0;
            var year = Math.ceil(month / 12);
            if (field == "cost") {
                if (month == 1) {
                    result = vm.model.J18 + (vm.model.J19 / 12)
                } else if (month < 13) {
                    result = (vm.model.J19 / 12)

                } else {
                    result = (vm.model.J22 / 12)
                }
            } else if (field == "savings") {
                switch (year) {
                    case 1:
                        if (month == 1) result = (vm.model.G79 / 12) * (vm.model.T88 / 100);
                        else if (month == 2) result = (vm.model.G79 / 12) * (vm.model.T89 / 100);
                        else if (month == 3) result = (vm.model.G79 / 12) * (vm.model.T90 / 100);
                        else if (month == 4) result = (vm.model.G79 / 12) * (vm.model.T91 / 100);
                        else if (month == 5) result = (vm.model.G79 / 12) * (vm.model.T92 / 100);
                        else if (month == 6) result = (vm.model.G79 / 12) * (vm.model.T93 / 100);
                        else if (month == 7) result = (vm.model.G79 / 12) * (vm.model.T94 / 100);
                        else if (month == 8) result = (vm.model.G79 / 12) * (vm.model.T95 / 100);
                        else if (month == 9) result = (vm.model.G79 / 12) * (vm.model.T96 / 100);
                        else result = vm.model.G79 / 12;
                        break;
                    case 2:
                        result = vm.model.G80 / 12;
                        break;
                    case 3:
                        result = vm.model.G81 / 12;
                        break;
                    case 4:
                        result = vm.model.G82 / 12;
                        break;
                    case 5:
                        result = vm.model.G83 / 12;
                        break;
                }
            }

            return result;
        }

        vm.generateCashFlowTable = () => {
            var cfTable = new Collection();
            var prevRow = {};
            for (x = 1; x <= 60; x++) {
                var yr = Math.ceil(x / 12);
                var row = {
                    year: yr,
                    month: x,
                    cost: vm.getCashFlowFieldValue(x, "cost"),
                    savings: vm.getCashFlowFieldValue(x, "savings"),
                    net: 0
                }
                row.net = x == 1 ? row.savings - row.cost : prevRow.net + (row.savings - row.cost);
                cfTable.push(row);
                prevRow = row;
            }
            vm.model.cfTable = cfTable;

        }

        vm.resetDefault = () => {

            vm.model.B1 = vm.modelClone.B1;
            vm.model.B2 = vm.modelClone.B2;
            vm.model.C7 = vm.modelClone.C7;
            vm.model.C8 = vm.modelClone.C8;
            vm.model.C9 = vm.modelClone.C9;
            vm.model.C10 = vm.modelClone.C10;
            vm.model.C12 = vm.modelClone.C12;
            vm.model.C13 = vm.modelClone.C13;
            vm.model.C14 = vm.modelClone.C14;
            vm.model.I2 = vm.modelClone.I2;
            vm.model.I7 = vm.modelClone.I7;
            vm.model.I8 = vm.modelClone.I8;
            vm.model.I9 = vm.modelClone.I9;
            vm.model.I10 = vm.modelClone.I10;
            vm.model.I12 = vm.modelClone.I12;
            vm.model.I13 = vm.modelClone.I13;
            vm.model.I14 = vm.modelClone.I14;
            vm.model.I15 = vm.modelClone.I15;
            vm.model.N8 = vm.modelClone.N8;
            vm.model.N9 = vm.modelClone.N9;
            vm.model.N10 = vm.modelClone.N10;
            vm.model.N11 = vm.modelClone.N11;
            vm.model.N12 = vm.modelClone.N12;
        }

        vm.toggleChart = () => {

            vm.IsChartsVisible = !vm.IsChartsVisible;
            // setTimeout(() => {
            //     if (vm.IsChartsVisible) {
            //         myChart1.update('show');
            //         myChart2.update('show');
            //     } else {
            //         myChart.update('show');
            //     }
            // }, 1000)
        }

        $scope.$watch('vm.model', function (newVal, oldVal) {

            vm.generateCashFlowTable();
            vm.generateChartData();
            myChart.update();
            myChart1.update();
            myChart2.update();
            myChart3.update();

        }, true);

        vm.getNPV = (rate, values) => {
            var npv = 0;

            for (var i = 1; i <= values.length; i++) {
                npv += values[i - 1] / Math.pow(rate / 100 + 1, i);
            }

            return npv;
        }

        vm.generateChartData = () => {

            var data = [
                [
                    `$${new Intl.NumberFormat().format(vm.model.L52)}`,
                    `$${new Intl.NumberFormat().format(vm.model.J119.toFixed(0))}`,
                    `$${new Intl.NumberFormat().format(Math.round(vm.model.J114).toFixed(0))}`,
                    `$${new Intl.NumberFormat().format(Math.round(vm.model.L51))}`,
                    `$${new Intl.NumberFormat().format(vm.model.L53)}`
                ],
                [
                    Math.round(vm.model.E54),
                    `${new Intl.NumberFormat().format(vm.model.E51.toFixed(0))}`,
                    Math.round(vm.model.E52),
                    Math.round(vm.model.E55), 0
                ]
            ];

            var data1 = [
                [vm.model.C51, vm.model.C52, vm.model.C53, vm.model.C54, vm.model.C55],
                [vm.model.D51, vm.model.D52, vm.model.D53, vm.model.D54, vm.model.D55]
            ];

            var data2 = [
                [vm.model.H51.toFixed(2), vm.model.I51.toFixed(2), vm.model.J51.toFixed(2)],
                [vm.model.H52.toFixed(2), vm.model.I52.toFixed(2), vm.model.J52.toFixed(2)],
                [vm.model.H53.toFixed(2), vm.model.I53.toFixed(2), vm.model.J53.toFixed(2)],
                [vm.model.H54.toFixed(2), vm.model.I54.toFixed(2), vm.model.J54.toFixed(2)],
                [vm.model.H55.toFixed(2), vm.model.I55.toFixed(2), vm.model.J55.toFixed(2)],
            ];

            let data3 = [];
            vm.model.cfTable.forEach((curr, index, arr) => {
                data3.push(curr.net);
            });

            myChart.config.data.datasets[0].values = data[0];
            myChart.config.data.datasets[1].values = data[1];

            myChart1.config.data.datasets[0].data = data1[0];
            myChart1.config.data.datasets[1].data = data1[1];

            myChart2.config.data.datasets[0].data = data2[0];
            myChart2.config.data.datasets[1].data = data2[1];
            myChart2.config.data.datasets[2].data = data2[2];
            myChart2.config.data.datasets[3].data = data2[3];
            myChart2.config.data.datasets[4].data = data2[4];

            myChart3.config.data.datasets[0].data = data3;

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


        initializaChart = () => {
            const ctx = document.getElementById('myChart').getContext('2d');
            const labels = [vm.model.B48, ['Additional', 'MedSurg LOS'], ['Additional', 'ICU LOS'], ['Additional', 'Ventilation days']];

            const chartData = {
                labels: ['A', 'b', 'c', 'd'],
                datasets: [
                    {
                        //backgroundColor: ['#337ab7', '#337ab7', '#337ab7', '#337ab7'],
                        backgroundColor: ['#fff', '#fff', '#fff', '#fff', '#fff'],
                        data: [25, 12.5, 12.5, 25, 25],
                        labels: [
                            "Savings from \navoided ICU \nstays",
                            "Total 5-year net savings,\n including OLE \ntherapy costs",
                            "Net Savings 1st year, \nincluding OLE therapy \ncosts",
                            "Savings \nfrom avoided \nhospitalization \ndays",
                            "Savings from avoided \nventilation days"],
                        values: [Math.round(vm.model.L49), Math.round(vm.model.J84), Math.round(vm.model.L54 * 100), Math.round(vm.model.L51), Math.round(vm.model.L50)],
                        datalabels: {
                            labels: {
                                value: {
                                    align: 'top',
                                    font: { size: 16 },
                                    borderColor: 'white',
                                    borderRadius: 4,
                                    color: 'white',
                                    formatter: function (value, ctx) {
                                        return ctx.dataset.values[ctx.dataIndex];
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
                    {
                        backgroundColor: ['#001871', '#001871', '#001871', '#001871'],
                        data: [25, 25, 25, 25],
                        labels: [
                            "Additional ICU \nhospitalization \ndays avoided",
                            "Annual cases avoided",
                            "Additional \nhospitalization \ndays avoided",
                            "Additional ventilation \ndays avoided"
                        ],
                        values: [Math.round(vm.model.E53), Math.round(vm.model.J114), Math.round(vm.model.E52), Math.round(vm.model.E54), 0],
                        datalabels: {
                            labels: {
                                value: {
                                    align: 'top',
                                    font: { size: 18 },
                                    color: 'white',
                                    formatter: function (value, ctx) {
                                        return ctx.dataset.values[ctx.dataIndex];
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
                    rotation: 45,
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
                                    text: () => { return (vm.model.I4) },
                                    color: '#000',
                                    font: {
                                        size: '35',
                                        family: 'Arial, Helvetica, sans-serif',
                                        weight: 'bold'
                                    }
                                },
                                {
                                    text: 'Annual ',
                                    font: {
                                        size: '14'
                                    },
                                    color: '#000'
                                },
                                {
                                    text: 'OLE patients',
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

            myChart = new Chart(ctx, chartConfig);
        }

        initializaChart1 = () => {
            const ctx1 = document.getElementById('myChart1').getContext('2d');
            const labels1 = [vm.model.B48, ['Additional', 'MedSurg LOS'], ['Unplanned', 'ICU transfers'], ['Additional', 'ICU LOS'], ['Additional', 'Ventilation days']];
            const chartData1 = {
                labels: labels1,
                datasets: [
                    {
                        label: "Current",
                        data: [vm.model.C51, vm.model.C52, vm.model.C53, vm.model.C54, vm.model.C55],
                        backgroundColor: "#5369E5",

                    },
                    {
                        label: "OLE Group",
                        data: [vm.model.D51, vm.model.D52, vm.model.D53, vm.model.D54, vm.model.D55],
                        backgroundColor: "#001871",

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
                        y: {
                            beginAtZero: true
                        }
                    },
                    plugins: {
                        title: {
                            display: true,
                            text: 'Annual burden per treatment group',
                            position: 'top',
                            font: {
                                size: 16,
                                weight: "bold",
                            }
                        },
                        legend: {
                            position: 'right',
                        },
                        datalabels: {
                            color: '#000',
                            font: {
                                weight: 'bold',
                            },
                            offset: 0,
                            padding: 0,
                            align: 'end',
                            anchor: 'end'
                        },
                    }
                },
            };

            myChart1 = new Chart(ctx1, chartConfig1);
        }

        initializaChart2 = () => {
            const ctx2 = document.getElementById('myChart2').getContext('2d');
            const labels2 = ["Current", "OLE Group (year 1)", "OLE Group (Years 2-5)"];
            const chartData2 = {
                labels: labels2,
                datasets: [
                    {
                        label: "Additional MedSurg costs",
                        data: [vm.model.H51, vm.model.I51, vm.model.J51],
                        backgroundColor: "#5369E5",
                    },
                    {
                        label: "Additional ICU costs",
                        data: [vm.model.H52, vm.model.I52, vm.model.J52],
                        backgroundColor: "#201547",
                    },
                    {
                        label: 'Additional Ventilation costs',
                        data: [vm.model.H53, vm.model.I53, vm.model.J53],
                        backgroundColor: "#DBE2E9",
                        datalabels: { color: "#201547" }
                    },
                    {
                        label: 'OLE treatment costs',
                        data: [vm.model.H54, vm.model.I54, vm.model.J54],
                        backgroundColor: "#98A4AE",
                        datalabels: { color: "#000", }
                    },
                    {
                        label: 'Cost-savings',
                        data: [vm.model.H55, vm.model.I55, vm.model.J55],
                        backgroundColor: "#59BEC9",
                        datalabels: { color: "#000", }
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
                        x: {
                            stacked: true,
                        },
                        y: {
                            stacked: true
                        }
                    },
                    plugins: {
                        legend: {
                            position: 'right',
                            reverse: true
                        },
                        title: {
                            display: true,
                            text: 'Annual total costs per treatment group',
                            position: 'top',
                            font: {
                                size: 16,
                                weight: "bold",
                            }
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
                        datalabels: {
                            display: 'auto',
                            formatter: function (value, context) {
                                return `${value > 0 ? vm.currencyFormat.format(value) : ""}`;
                            },
                            color: 'white',
                            font: {
                                weight: 'bold',
                            },
                            offset: 0,
                            padding: 0
                        },
                    }
                },
            };

            myChart2 = new Chart(ctx2, chartConfig2);
        }

        initializaChart3 = () => {
            const ctx3 = document.getElementById('myChart3').getContext('2d');

            let labels3 = [];
            let datasetValues = [];

            vm.model.cfTable.forEach((curr, index, arr) => {
                labels3.push(curr.month);
                datasetValues.push(curr.net);
            });

            const chartData3 = {
                labels: labels3,
                datasets: [
                    {
                        data: datasetValues,
                        backgroundColor: "#201547",
                    },
                ]
            };

            const chartConfig3 = {
                type: 'bar',
                data: chartData3,
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
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
                        },

                    },
                    plugins: {
                        legend: {
                            position: '',
                        },
                        title: {
                            display: true,
                            text: '5-year Cash Flow',
                            position: 'top',
                            font: {
                                size: 16,
                                weight: "bold",
                            }
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
                        datalabels: {
                            display: false,
                            formatter: function (value, context) {
                                return `${vm.currencyFormat.format(value)}`;
                            },
                            color: 'white',
                            font: {
                                weight: 'bold',
                            },
                            offset: 0,
                            padding: 0
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
            vm.generateCashFlowTable();
            initializaChart();
            initializaChart1();
            initializaChart2();
            initializaChart3();

            console.log(vm.model);
            // console.table(vm.model.cfTable);

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
                return Number(ctrl.$viewValue.replace(/[.,\s]/g, '')) / Math.pow(10, format.centsLimit);
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