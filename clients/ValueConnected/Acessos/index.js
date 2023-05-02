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


            B2: 12,
            B6: 60, C6: 20, D6: 80, E6: 10,
            B7: 60, C7: 15, D7: 75, E7: 20,
            get F6() { return this.B6 + this.C6 + this.D6 + this.E6 },
            get F7() { return this.B7 + this.C7 + this.D7 + this.E7 },

            B11: 60, C11: 20, D11: 80, E11: 10,
            B12: 60, C12: 15, D12: 75, E12: 20,
            get F11() { return this.B11 + this.C11 + this.D11 + this.E11 },
            get F12() { return this.B12 + this.C12 + this.D12 + this.E12 },

            B15: 150, C15: 3000, D15: 8000, E15: 15000,
            B16: 750, C16: 750, D16: 750, E16: 750,
            B17: 0, C17: 2500, D17: 2500, E17: 5000,
            B18: 0, C18: 10000, D18: 0, E18: 10000,
            B19: 4000, C19: 4000, D19: 4000, E19: 4000,
            B20: 0, C20: 0, D20: 0, E20: 0,
            B21: 0, C21: 3500, D21: 3500, E21: 3500,
            B22: 450, C22: 650, D22: 650, E22: 0,

            B25: 56, C25: 4, D25: 4, E25: 1,
            B26: 0, C26: 32, D26: 0, E26: 0,
            B27: 0, C27: 0, D27: 36, E27: 0,
            B28: 0, C28: 4, D28: 4, E28: 1,

            B37: 56, C37: 4, D37: 4, E37: 1, F37: 0.1,
            B38: 0, C38: 32, D38: 0, E38: 0,
            B39: 0, C39: 0, D39: 36, E39: 0,
            B40: 0, C40: 4, D40: 4, E40: 1,

            F32: 35000, G32: 1, H32: 0, I32: 1,
            F33: 40000, G33: 1, H33: 0, I33: 1,
            F34: 30000, G34: 1, H34: 0, I34: 1,
            F35: 10000, G35: 1, H35: 0, I35: 1,

            get B32() { return this.B37 / 100 },
            get C32() { return this.C37 / 100 },
            get D32() { return this.D37 / 100 },
            get E32() { return this.E37 / 100 },

            get B33() { return this.B38 / 100 },
            get C33() { return this.C38 / 100 },
            get D33() { return this.D38 / 100 },
            get E33() { return this.E38 / 100 },

            get B34() { return this.B39 / 100 },
            get C34() { return this.C39 / 100 },
            get D34() { return this.D39 / 100 },
            get E34() { return this.E39 / 100 },

            get B35() { return this.B40 / 100 },
            get C35() { return this.C40 / 100 },
            get D35() { return this.D40 / 100 },
            get E35() { return this.E40 / 100 },

        };

        vm.resetDefault = () => {


        }


        $scope.$watch('vm.model', function (newVal, oldVal) {

            vm.generateChartData();

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


        vm.initializaChart1 = () => {
            const ctx1 = document.getElementById('myChart1').getContext('2d');
            const labels1 = ["E. Actual", "E. Power Port"];
            const chartData1 = {
                labels: labels1,
                datasets: [
                    {
                        label: "Instalación",
                        data: [98778000, 95868000],
                        backgroundColor: "#0090B5"
                    },
                    {
                        label: "Honorarios",
                        data: [30720000, 23040000],
                        backgroundColor: "#FDB713"
                    },
                    {
                        label: "Est. hospitalaria",
                        data: [18324000, 16986000],
                        backgroundColor: "#712886"
                    },
                    {
                        label: "At. Amb. y otros",
                        data: [36215000, 34660000],
                        backgroundColor: "#FBB679"
                    },
                    {
                        label: "Complicaciones",
                        data: [36215000, 34660000],
                        backgroundColor: "#BFB8B3"
                    },
                    {
                        label: "Ahorros",
                        data: [36215000, 34660000],
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
                            text: '',
                            font: {
                                size: 16
                            },
                            color: '#000000'
                        },
                        subtitle: {
                            display: true,
                            position: 'bottom',
                            text: () => { return ['', 'Escenario Power Port genera ahorros de', '$13,483,000', '', 'Reducción de 7% ', 'en relaciónal EscenarioActual'] },
                            font: {
                                size: 14
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
            const labels2 = ["E. Actual", "E. Power Port"];
            const chartData2 = {
                labels: labels2,
                datasets: [
                    {
                        data: [5, 3],
                        backgroundColor: [vm.brandColorsDark[1]]
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
                            text: '',
                            font: {
                                size: 16
                            },
                            color: '#000000'
                        },
                        subtitle: {
                            display: true,
                            position: 'bottom',
                            text: () => { return ['Número de comolicaciones evitadas en', 'el escenario Power Port', '56'] },
                            font: {
                                size: 14
                            }
                        },
                        legend: {
                            display: false,
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
            const labels3 = ["E. Actual", "E. Power Port"];
            const chartData3 = {
                labels: labels3,
                datasets: [
                    {
                        label: "Periférico",
                        data: [vm.model.I91, vm.model.I92],
                        backgroundColor: [vm.brandColorsDark[0]],

                    },
                    {
                        label: "PICC",
                        data: [vm.model.J91, vm.model.J92],
                        backgroundColor: [vm.brandColorsDark[1]],

                    },
                    {
                        label: "Power Port",
                        data: [vm.model.J91, vm.model.J92],
                        backgroundColor: [vm.brandColorsDark[2]],

                    },
                    {
                        label: "Ahorros",
                        data: [vm.model.J91, vm.model.J92],
                        backgroundColor: [vm.brandColorsDark[3]],

                    }

                ]
            };

            const chartConfig3 = {
                type: 'bar',
                data: chartData3,
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
                            text: '',
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

            if (!accepted || accepted === undefined || accepted === null) {
                var myModal = new bootstrap.Modal(document.getElementById('myModal'), { backdrop: 'static', focus: true, keyboard: false })
                myModal.show();
            }
            vm.modelClone = { ...vm.model };

            console.log(vm.model);

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
