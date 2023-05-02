var myApp = angular.module('myApp', [])
    .controller('myCtrl', ['$scope', function ($scope) {
        // Do something with myService

        var vm = this;

        vm.model = {
            C3: 5.5,
            C13: 12.1,
            C14: 14,
            C27: 50,
            C28: 25,
            B1: 10000.00,
            B6: 5.62,
            B7: 13.33,
            B10: 3,
            B11: 500,
            B12: 250,
            B18: 5.62,
            B19: 13.33,
            B24: 3,
            B22: 1379.75,
            B25: 500,
            B29: 250,
            I1: 50,
            I7: 0,
            I14: 50,
            I26: 0,
            K1: 1,
            K14: 1,
            get B3() { return this.C3 / 100 },
            get B4() { return Math.round(this.B3 * this.B1) },
            get B8() { return this.B6 + this.B7 },
            get B13() { return this.C13 / 100 },
            get B14() { return this.C14 / 100 },
            get B20() { return this.B18 + this.B19 },
            get B27() { return this.C27 / 100 },
            get B28() { return this.C28 / 100 },
            get B15() { return Math.round(this.B14 * this.B1) },
            get D13() { return Math.round(this.B13 * this.B4) },
            get I3() { return this.L3 * this.B10 },
            get I6() { return this.L3 * this.B8 },
            get I9() { return (this.I11 < this.J11 ? this.J11 - this.I11 : 0) },
            get I8() { return this.I3 * this.B11 },
            get I11() { return this.I6 + this.I7 + this.I8 },
            get I16() { return this.L16 * this.B24 },
            get I19() { return this.I16 * this.B25 },
            get I20() { return this.L16 * this.B22 },
            get I21() { return this.I19 + this.I20 },
            get I25() { return this.L16 * this.B20 },
            get I27() { return this.I19 },
            get I28() { return this.I20 },
            get I29() { return (this.I31 < this.J31 ? this.J31 - this.I31 : 0) },
            get I31() { return this.I25 + this.I26 + this.I27 + this.I28 },
            get I32() { return this.I25 + this.I26 + this.I27 + this.I28 + this.I29 },
            get J1() { return this.I1 / 100 },
            get J3() { return (this.D13 + this.L2) * this.B10 },
            get J6() { return this.L2 * this.B8 },
            get J7() { return this.L1 * this.B12 },
            get J8() { return this.J3 * this.B11 },
            get J9() { return (this.J11 <= this.I11 ? this.I11 - this.J11 : 0) },
            get J11() { return this.J6 + this.J7 + this.J8 },
            get J14() { return this.I14 / 100 },
            get J16() { return Math.round((this.L15 * this.B24) + (this.L14 * this.B24 * (1 - this.B27))) },
            get J19() { return this.J16 * this.B25 },
            get J20() { return Math.round((this.L15 * this.B22) + (this.L14 * this.B22 * (1 - this.B28)), 0) },
            get J21() { return this.J19 + this.J20 },
            get J25() { return this.L15 * this.B20 },
            get J26() { return this.L14 * this.B29 },
            get J27() { return this.J19 },
            get J28() { return this.J20 },
            get J29() { return (this.J31 <= this.I31 ? this.I31 - this.J31 : 0) },
            get J31() { return this.J25 + this.J26 + this.J27 + this.J28 },
            get J32() { return this.J25 + this.J26 + this.J27 + this.J28 + this.J29 },
            get K3() { return (this.I3 >= this.J3 ? (this.I3 - this.J3) : 0) },
            get K8() { return (this.I8 >= this.J8 ? (this.I8 - this.J8) : 0) },
            get K19() { return (this.I19 >= this.J19 ? this.I19 - this.J19 : 0) },
            get L1() { return Math.round(this.J1 * this.B4) },
            get L2() { return Math.round(this.B4 - this.L1) },
            get L3() { return this.L1 + this.L2 },
            get L14() { return Math.round(this.J14 * this.B15, 0) },
            get L15() { return this.B15 - this.L14 },
            get L16() { return this.L14 + this.L15 },

        };

        $scope.$watch('vm.model', function (newVal, oldVal) {
            vm.generateChartData();
            myChart.update();
            console.log(vm.model);
        }, true);

        vm.generateChartData = () => {
            var data = [
                [Math.round(vm.model.I6), Math.round(vm.model.J6)],
                [Math.round(vm.model.I7), Math.round(vm.model.J7)],
                [Math.round(vm.model.I8), Math.round(vm.model.J8)],
                [Math.round(vm.model.I9), Math.round(vm.model.J9)]
            ];
            myChart.config.data.datasets[0].data = data[0];
            myChart.config.data.datasets[1].data = data[1];
            myChart.config.data.datasets[2].data = data[2];
            myChart.config.data.datasets[3].data = data[3];

        }

        vm.$onInit = function () {
            const ctx = document.getElementById('myChart').getContext('2d');
            const labels = ["Grupo convencional", "Grupo Xpert® testes"];
            const chartData = {
                labels: labels,
                datasets: [
                    {
                        label: 'Testes convencionais',
                        data: [50, 50],
                        backgroundColor: "#DF6020",
                        borderWidth: 1,
                        borderColor: "#DF6020"
                    },
                    {
                        label: 'Xpert® testes',
                        data: [50, 50],
                        backgroundColor: "#74A333",
                        borderWidth: 1,
                        borderColor: "#74A333",
                        borderSkipped: false

                    },
                    {
                        label: 'Isolamento',
                        data: [50, 50],
                        backgroundColor: "#0079C1",
                        borderWidth: 1,
                        borderColor: "#0079C1",
                        borderSkipped: false
                    },
                    {
                        label: 'Redução',
                        data: [50, 50],
                        backgroundColor: "#fff",
                        borderWidth: 2,

                        borderSkipped: 'bottom'
                    }
                ]
            };

            const chartConfig = {
                type: 'bar',
                data: chartData,
                options: {
                    responsive: true,
                    locale: 'pt-BR',
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
                            position: 'bottom',
                        },
                        title: {
                            display: false,
                            text: 'Chart.js Bar Chart'
                        },
                        tooltip: {
                            mode: 'x'
                        },
                    }
                },
            };

            myChart = new Chart(ctx, chartConfig);
            this.generateChartData();
            myChart.update();

            var myModal = new bootstrap.Modal(document.getElementById('myModal'), { backdrop: 'static', focus: true })
            myModal.show();

            console.log(vm.model)
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
                centsSeparator: ',',
                thousandsSeparator: '.',
                centsLimit: scope.digits ?? 2
            };

            ctrl.$parsers.unshift(function (value) {
                //elem.priceFormat(format);
                console.log('parsers', elem[0].value, value, ctrl.$viewValue);
                return Number(ctrl.$viewValue.replace(".", "").replace(",", "")) / Math.pow(10, format.centsLimit);
            });

            ctrl.$formatters.unshift(function (value) {
                elem[0].value =  parseFloat((ctrl.$modelValue * Math.pow(10, format.centsLimit)).toFixed(format.centsLimit));
                elem.priceFormat(format);
                console.log('formatters', elem[0].value);
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