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

        vm.brandColorsNormal = ["#004593", "#F27707", "#FFE000", "#81C341", "#00B8B0", "#B7016B"];
        vm.brandColorsDark = ["#023970", "#D15421", "#FDB713", "#02AA4D", "#009988", "#B7016B"];
        vm.chartColors = ["#FBB679", "#FFF78C", "#CAE3AA", "#A9DCD6", "#ADDFEB", "8CC6EC", "F4C9DF"];
        vm.IsChartsVisible = false;
        vm.isNpvTableVisible = false;
        vm.numberFormat = new Intl.NumberFormat('en-US', { maximumFractionDigits: 0, });
        vm.currencyFormat = new Intl.NumberFormat('en-US', { style: "currency", currency: "USD", maximumFractionDigits: 0, });

        vm.model = {

            F5: 25,
            F6: 25,
            F7: 25,
            F8: 25,

            L5: 2500000,
            L7: 5000000,
            L8: 7000000,
            R5: 7000000,
            R6: 7000000,

            C12: 25,
            D14: 9000000,
            D15: 1,
            D16: 0,
            D17: 1240700,
            D18: 0,
            D19: 860360,
            D20: 1100000,
            D21: 1000000,
            D25: 1.9,
            D26: 98,
            D27: 3.9,

            H12: 25,
            I14: 8500000,
            I15: 1,
            I16: 500000,
            I17: 1240700,
            I18: 0,
            I19: 860360,
            I20: 1100000,
            I21: 1000000,
            I25: 7.1,
            I26: 83,
            I27: 29,

            M12: 25,
            N14: 204000,
            N15: 1,
            N16: 500000,
            N17: 1240700,
            N18: 1049000,
            N19: 600000,
            N20: 1100000,
            N21: 1000000,
            N25: 13.7,
            N26: 73.53,
            N27: 65.4,

            R12: 25,
            S14: 1100000,
            S15: 1,
            S16: 2914721,
            S17: 1240700,
            S18: 0,
            S19: 860360,
            S20: 4000000,
            S21: 1000000,
            S25: 12,
            S26: 65,
            S27: 2,

            get F3() { return this.C12 + this.H12 + this.M12 + this.R12 },
            get L6() { return this.S22 },
            // get C12() { return Math.round((this.F5 / 100) * this.F3) },
            // get H12() { return Math.round((this.F6 / 100) * this.F3) },
            // get M12() { return Math.round((this.F7 / 100) * this.F3) },
            // get R12() { return Math.round((this.F8 / 100) * this.F3) },

            get F9() { return this.F5 + this.F6 + this.F6 + this.F8 },
            get D22() { return (this.D14 * this.D15) + (this.D16 + this.D17 + this.D18 + this.D19 + this.D20 + this.D21) },
            get D29() { return Math.round((this.D25 / 100) * this.C12) },
            get D30() { return Math.round((this.D26 / 100) * this.C12) },
            get D31() { return Math.round(this.C12 - this.D30) },
            get D32() { return Math.round((this.D27 / 100) * this.C12) },

            get I22() { return (this.I14 * this.I15) + (this.I16 + this.I17 + this.I18 + this.I19 + this.I20 + this.I21) },
            get I29() { return Math.round((this.I25 / 100) * this.H12) },
            get I30() { return Math.round((this.I26 / 100) * this.H12) },
            get I31() { return Math.round(this.H12 - this.I30) },
            get I32() { return Math.round((this.I27 / 100) * this.H12) },

            get N22() { return (this.N14 * this.N15) + (this.N16 + this.N17 + this.N18 + this.N19 + this.N20 + this.N21) },
            get N29() { return Math.round((this.N25 / 100) * this.M12) },
            get N30() { return Math.round((this.N26 / 100) * this.M12) },
            get N31() { return Math.round(this.M12 - this.N30) },
            get N32() { return Math.round((this.N27 / 100) * this.M12) },

            get S22() { return (this.S14 * this.S15) + (this.S16 + this.S17 + this.S18 + this.S19 + this.S20 + this.S21) },
            get S29() { return Math.round((this.S25 / 100) * this.R12) },
            get S30() { return Math.round((this.S26 / 100) * this.R12) },
            get S31() { return Math.round(this.R12 - this.S30) },
            get S32() { return Math.round((this.S27 / 100) * this.R12) },

            get D35() { return this.C12 * this.D22 * 12 },
            get D37() { return this.D29 * this.L5 * 12 },
            get D39() { return this.D31 * this.L6 * 12 },
            get D41() { return this.D32 * this.L8 * 12 },
            get D43() { return this.D35 + this.D37 + this.D39 + this.D41 },

            get I35() { return this.H12 * this.I22 * 12 },
            get I37() { return this.I29 * this.L5 * 12 },
            get I39() { return this.I31 * this.L6 * 12 },
            get I41() { return this.I32 * this.L8 * 12 },
            get I43() { return this.I35 + this.I37 + this.I39 + this.I41 },

            get N35() { return this.M12 * this.N22 * 12 },
            get N37() { return this.N29 * this.L5 * 12 },
            get N39() { return this.N31 * this.L6 * 12 },
            get N41() { return this.N32 * this.L8 * 12 },
            get N43() { return this.N35 + this.N37 + this.N39 + this.N41 },

            get S35() { return this.R12 * this.S22 * 12 },
            get S37() { return this.S29 * this.L5 * 12 },
            get S39() { return this.S31 * this.L6 * 12 },
            get S41() { return this.S32 * this.L8 * 12 },
            get S43() { return this.S35 + this.S37 + this.S39 + this.S41 },

            get D48() { return this.D43 },
            get D49() { return this.I43 },
            get D50() { return this.N43 },
            get D51() { return this.S43 },

            get D78() { return this.D37 + this.D39 + this.D41 },
            get D79() { return this.I37 + this.I39 + this.I41 },
            get D80() { return this.N37 + this.N39 + this.N41 },
            get D81() { return this.S37 + this.S39 + this.S41 },

            get D110() { return this.D32 },
            get D111() { return this.I32 },
            get D112() { return this.N32 },
            get D113() { return this.S32 },


        };



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


        $scope.$watch('vm.model', function (newVal, oldVal) {

            vm.generateChartData();
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
            var data1 = [vm.model.D48, vm.model.D49, vm.model.D50, vm.model.D51];
            var data2 = [vm.model.D78, vm.model.D79, vm.model.D80, vm.model.D81];
            var data3 = [vm.model.D110, vm.model.D111, vm.model.D112, vm.model.D113];

            myChart1.config.data.datasets[0].data =data1;
            myChart2.config.data.datasets[0].data =data2;
            myChart3.config.data.datasets[0].data =data3;
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


        initializaChart1 = () => {
            const ctx1 = document.getElementById('myChart1').getContext('2d');
            const labels1 = ["Rotarex", "Otras Trombectomías", "Embolectomy catheter", "POBA"];
            const chartData1 = {
                labels: labels1,
                datasets: [
                    {
                        data: [vm.model.D48, vm.model.D49, vm.model.D50, vm.model.D51],
                        backgroundColor: [vm.brandColorsDark[0], vm.brandColorsDark[1], vm.brandColorsDark[2], vm.brandColorsDark[5]]
                    }
                ]
            };

            const chartConfig1 = {
                type: 'bar',
                data: chartData1,
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    locale: 'pt-BR',
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    },
                    plugins: {
                        title: {
                            display: true,
                            text: 'Resultado financiero en 12 meses',
                            font: {
                                size: 16
                            }
                        },
                        legend: {
                            display: false
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

            myChart1 = new Chart(ctx1, chartConfig1);
        }

        initializaChart2 = () => {
            const ctx2 = document.getElementById('myChart2').getContext('2d');
            const labels2 = ["Rotarex", "Otras Trombectomías", "Embolectomy catheter", "POBA"];
            const chartData2 = {
                labels: labels2,
                datasets: [
                    {
                        data: [vm.model.D78, vm.model.D79, vm.model.D80, vm.model.D81],
                        backgroundColor: [vm.brandColorsDark[0], vm.brandColorsDark[1], vm.brandColorsDark[2], vm.brandColorsDark[5]]
                    }
                ]
            };

            const chartConfig2 = {
                type: 'bar',
                data: chartData2,
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    locale: 'pt-BR',
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    },
                    plugins: {
                        title: {
                            display: true,
                            text: 'Costos adicionales  (no reembolsables) en 12 meses',
                            font: {
                                size: 16
                            }
                        },
                        legend: {
                            display: false
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
            const labels3 = ["Rotarex", "Otras Trombectomías", "Embolectomy catheter", "POBA"];
            const chartData3 = {
                labels: labels3,
                datasets: [
                    {
                        data: [vm.model.D110, vm.model.D111, vm.model.D112, vm.model.D113],
                        backgroundColor: [vm.brandColorsDark[0], vm.brandColorsDark[1], vm.brandColorsDark[2], vm.brandColorsDark[5]],
                        color: ["#333"]
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
                            beginAtZero: true
                        }
                    },
                    plugins: {
                        title: {
                            display: true,
                            text: 'Casos de complicaciones',
                            font: {
                                size: 16
                            }
                        },
                        legend: {
                            display: false
                        },
                        datalabels: {
                            display: 'auto',
                            formatter: function (value, context) {
                                return `${value > 0 ? vm.numberFormat.format(value) : ""}`;
                            },
                            color: 'white',
                            font: {
                                weight: 'bold',
                            },
                            offset: 0,
                            padding: 0,
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

            initializaChart1();
            initializaChart2();
            initializaChart3();
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
