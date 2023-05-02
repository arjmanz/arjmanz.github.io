class Collection extends Array {
    sum(prop) {
        //arr.reduce((accumulator, current) => accumulator + current.x, 0);
        return this.reduce((accumulator, current) => accumulator + current[prop], 0);
    }
}
const round2dec = (val) => {
    return (Math.round(val * 100) / 100)
}


var myApp = angular.module('myApp', ['pascalprecht.translate', 'tmh.dynamicLocale']);

myApp.config(function ($translateProvider, tmhDynamicLocaleProvider) {
    $translateProvider.useLoader('$translatePartialLoader', {
        urlTemplate: './i18n/{lang}.json'
    });
    //$translateProvider.determinePreferredLanguage();
    $translateProvider.preferredLanguage('en-us');
    tmhDynamicLocaleProvider.localeLocationPattern('./assets/angular/i18n/angular-locale_{{locale}}.js');

});

myApp.directive('format', ['$filter', '$locale', function ($filter, $locale) {
    return {
        require: '?ngModel',
        scope: {
            digits: '=?'
        },
        link: function (scope, elem, attrs, ctrl) {
            if (!ctrl) return;

            var format = {
                prefix: '',
                centsSeparator: $locale.NUMBER_FORMATS.DECIMAL_SEP,
                thousandsSeparator: $locale.NUMBER_FORMATS.GROUP_SEP,
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

            scope.$on('$localeChangeSuccess', function () {
                format = {
                    ...format,
                    centsSeparator: $locale.NUMBER_FORMATS.DECIMAL_SEP,
                    thousandsSeparator: $locale.NUMBER_FORMATS.GROUP_SEP,
                    centsLimit: scope.digits ?? 2
                };
                elem.priceFormat(format);
            })
        }
    };
}]);

myApp.directive('formatCurrency', ['$filter', '$locale', function ($filter, $locale) {
    return {
        require: '?ngModel',
        scope: {
            decimals: '=?'
        },
        controller: function ($scope) {
            // check if it was defined.  If not - set a default
            $scope.decimals = angular.isDefined($scope.decimals) ? $scope.decimals : 2;
        },
        link: function (scope, elem, attrs, ctrl) {
            if (!ctrl) return;
            var fmt = (attrs["formatCurrency"]);
            console.log(attrs["formatCurrency"], scope.decimals, $locale);

            const formatValue = (modelValue) => {
                var formattedValue;
                if (modelValue) {
                    formattedValue = new Intl.NumberFormat($locale.localID,
                        { style: "decimal", maximumFractionDigits: scope.decimals, }).format(modelValue);

                } else {
                    formattedValue = '';
                }
                return formattedValue;
            }

            // $formatters is used to process value from code to view
            ctrl.$formatters.unshift(formatValue);

            // $parsers is used to process value from view to code
            ctrl.$parsers.unshift(function (viewValue) {

                var plainNumber;
                var formattedValue;

                var decimalSeparatorIndex = viewValue.lastIndexOf($locale.NUMBER_FORMATS.DECIMAL_SEP);  // $locale.NUMBER_FORMATS.DECIMAL_SEP variable is the decimal separator for the current culture
                if (decimalSeparatorIndex > 0) {
                    // if input has decimal part
                    var wholeNumberPart = viewValue.substring(0, decimalSeparatorIndex);
                    var decimalPart = viewValue.substr(decimalSeparatorIndex + 1, scope.decimals ?? 2);
                    console.log("decimal", decimalPart)
                    plainNumber = parseFloat(wholeNumberPart.replace(/[^\d]/g, '') + '.' + decimalPart).toFixed(scope.decimals ?? 2); // remove any non number characters and round to two decimal places
                    console.log("plain", plainNumber)
                    formattedValue = formatValue(plainNumber);
                    console.log(formattedValue);
                    formattedValue = formattedValue.substring(0, formattedValue.lastIndexOf($locale.NUMBER_FORMATS.DECIMAL_SEP) + 1);
                    formattedValue = formattedValue + decimalPart;
                } else {
                    // input does not have decimal part
                    plainNumber = parseFloat(viewValue.replace(/[^\d]/g, ''));
                    formattedValue = formatValue(plainNumber);     // the 0 argument for no decimal does not work (issue with Angular)

                    if (formattedValue) {
                        // remove the decimal part
                        formattedValue = formattedValue.substring(0, formattedValue.lastIndexOf($locale.NUMBER_FORMATS.DECIMAL_SEP));
                    } else {
                        formattedValue = viewValue;
                    }
                }

                elem.val(formattedValue);
                return plainNumber;
            });

            scope.$on('$localeChangeSuccess', function () {
                console.log('event received', formatValue(ctrl.$modelValue));
                ctrl.$setViewValue(formatValue(ctrl.$modelValue), 'localeChangeSuccess');
            })
        }
    };
}]);

myApp.controller('myCtrl', ['$scope', '$translatePartialLoader', '$translate', 'tmhDynamicLocale', '$locale',
    function ($scope, $translatePartialLoader, $translate, tmhDynamicLocale, $locale) {

        $translatePartialLoader.addPart('/');
        tmhDynamicLocale.set('en-us');
        $scope.Math = window.Math;

        var vm = this;

        vm.countryCode = "us";
        vm.modelClone = {};
        vm.IsChartsVisible = false;
        vm.isNpvTableVisible = false;
        vm.numberFormat = new Intl.NumberFormat({ maximumFractionDigits: 0, });
        vm.currencyFormat = new Intl.NumberFormat('en-US', { style: "currency", currency: "USD", maximumFractionDigits: 0, });

        vm.languageOptions = [
            { lang: "en", name: "English", icon: "" },
            { lang: "br", name: "Protoguese", icon: "" }
        ];

        vm.model = {
            B2: 100,
            B3: 76.6,
            B4: 9.2,
            B5: 4.4,
            B8: 1165,
            B9: 10.3,
            B11: 0.354,

            get B6() { return Math.round((this.B2 * (this.B3 / 100) * 365) / this.B5) },
            get B12() { return Math.round(this.B6 * (this.B11 / 100)) },
            get B14() { return Math.round((this.B4 / 100) * this.B6) },
            get B17() { return this.B14 * this.B8 * this.B9 },
            get B20() { return this.B14 * this.B9 },
        };


        vm.resetDefault = () => {

            vm.model.B2 = vm.modelClone.B2;
            vm.model.B3 = vm.modelClone.B3;
            vm.model.B4 = vm.modelClone.B4;
            vm.model.B5 = vm.modelClone.B5;
            vm.model.B8 = vm.modelClone.B8;
            vm.model.B9 = vm.modelClone.B9;
            vm.model.B11 = vm.modelClone.B11;
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

        vm.getNPV = (rate, values) => {
            var npv = 0;

            for (var i = 1; i <= values.length; i++) {
                npv += values[i - 1] / Math.pow(rate / 100 + 1, i);
            }

            return npv;
        }

        vm.generateChartData = () => {
            var data = [];
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

        vm.setLocaleAndLanguage = (lang) => {
            vm.changeLanguage(lang);
            vm.changeLocale(lang);
            vm.countryCode = vm.getCountryCode().toLowerCase();

        }


        vm.changeLanguage = (languageKey) => $translate.use(languageKey);;
        vm.changeLocale = (localeKey) => tmhDynamicLocale.set(localeKey);

        vm.getCountryCode = () => {
            var result = new Intl.Locale(tmhDynamicLocale.get()).region;
            return result;
        }

        vm.$onInit = function () {
            const accepted = sessionStorage.getItem("accepted");
            vm.modelClone = { ...vm.model };
        }

        $scope.$watch('vm.model', function (newVal, oldVal) {
        }, true);


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