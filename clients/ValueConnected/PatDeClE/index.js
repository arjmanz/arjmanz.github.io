
class Collection extends Array {
  sum(prop) {
    //arr.reduce((accumulator, current) => accumulator + current.x, 0);
    return this.reduce((accumulator, current) => accumulator + current[prop], 0);
  }
}
const round2dec = (val) => {
  return (Math.round(val * 100) / 100)
}

var myApp = angular.module('myApp', ['ngRoute', 'ngSanitize', 'pascalprecht.translate', 'tmh.dynamicLocale']);

myApp.config(function ($translateProvider, tmhDynamicLocaleProvider, $routeProvider) {
  $translateProvider.useLoader('$translatePartialLoader', {
    urlTemplate: './i18n/{lang}.json'
  });
  //$translateProvider.determinePreferredLanguage();
  $translateProvider.preferredLanguage('en-us');
  $translateProvider.usePostCompiling(true);
  //$translateProvider.useSanitizeValueStrategy('escape')
  $translateProvider.useSanitizeValueStrategy('sanitize')

  tmhDynamicLocaleProvider.localeLocationPattern('./assets/angular/i18n/angular-locale_{{locale}}.js');

  $routeProvider
    .when('/:lang', {
      templateUrl: '/',
      controller: 'myCtrl',
      controllerAs: 'vm'
    });

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


myApp.controller('myCtrl', ['$scope', '$translatePartialLoader', '$translate', 'tmhDynamicLocale', '$locale', '$routeParams', '$filter',
  function ($scope, $translatePartialLoader, $translate, tmhDynamicLocale, $locale, $routeParams, $filter) {

    $translatePartialLoader.addPart('/');
    tmhDynamicLocale.set('en-US');
    $scope.Math = window.Math;

    var vm = this;

    vm.currency = "USD";
    vm.currencySymbol = "$";
    vm.lang = $routeParams.current;
    vm.IsChartsVisible = false;
    vm.isNpvTableVisible = false;
    vm.numberFormat = new Intl.NumberFormat('en-US', { maximumFractionDigits: 0, });
    vm.currencyFormat = new Intl.NumberFormat('en-US', { style: "currency", currency: "USD", maximumFractionDigits: 0, });
    vm.$translate = $filter('translate');
    vm.languageOptions = [
      { lang: "en", name: "English", icon: "" },
      { lang: "br", name: "Protoguese", icon: "" }
    ];


    vm.model = {
      // B2: 100,
      // B3: 61,
      // B4: 8,
      // B5: 4.7,
      // B6: 3.8,
      // B9: 920,
      // B10: 1450,
      // B11: 1512,
      // B13: 4.8,
      // B15: 33,
      // B16: 0.389262,

      B2: 0,
      B3: 0,
      B4: 0,
      B5: 0,
      B6: 0,
      B9: 0,
      B10: 0,
      B11: 0,
      B13: 0,
      B15: 0,
      B16: 0,

      get B7() { return Math.round((this.B2 * (this.B3 / 100) * 365) / this.B5) },
      get B19() { return Math.round((this.B4 / 100) * this.B7) },
      get B20() { return Math.round(this.B19 * (this.B15 / 100)) },
      get B21() { return Math.round(this.B7 * (this.B16 / 100)) },

      get C19() { return Math.round(this.B19 * (this.B13)) },
      get C20() { return Math.round(this.B20 * (this.B6)) },

      get D19() { return Math.round(this.C19 * (this.B9)) },
      get D20() { return Math.round(this.C20 * (this.B10)) },
      get D21() { return Math.round(this.B21 * (this.B11)) },
      get D22() { return this.D19 + this.D20 + this.D21 },

      get H2() { return this.D19 },
      get H3() { return this.D20 },
      get H4() { return this.D21 },
      get H21() { return this.C19 },
      get H22() { return this.C20 },
      get H23() { return this.H21 + this.H22 },


    };

    vm.fetchData = async () => {
      const response = await fetch('./data.json');
      const json = await response.json();

      vm.currency = json.Currency;
      vm.currencySymbol = json.CurrencySymbol;
      vm.currencyFormat = new Intl.NumberFormat('en-US', { style: "currency", currency: vm.currency, maximumFractionDigits: 0, });

      vm.model.B2 = json.B2;
      vm.model.B3 = json.B3;
      vm.model.B4 = json.B4;
      vm.model.B5 = json.B5;
      vm.model.B6 = json.B6;
      vm.model.B9 = json.B9;
      vm.model.B10 = json.B10;
      vm.model.B11 = json.B11;
      vm.model.B13 = json.B13;
      vm.model.B15 = json.B15;
      vm.model.B16 = json.B16;

      vm.modelClone = { ...json };



    }

    vm.generateChartData = () => {

      var data1 = [[vm.model.H21], [vm.model.H22]];
      var data2 = [[vm.model.H2], [vm.model.H3]];

      myChart1.config.data.datasets[0].data = data1[0];
      myChart1.config.data.datasets[1].data = data1[1];
      myChart2.config.data.datasets[0].data = data2[0];
      myChart2.config.data.datasets[1].data = data2[1];

    }

    vm.initializaChart1 = () => {
      const ctx1 = document.getElementById('myChart1').getContext('2d');
      const labels1 = [""];
      const chartData1 = {
        labels: labels1,
        datasets: [
          {
            label: "Increased MedSurg LOS",
            data: [vm.model.H21],
            backgroundColor: ["#001871"],
            maxBarThickness: 150,
          },
          {
            label: "Increased ICU LOS",
            data: [vm.model.H22],
            backgroundColor: ["#00b097"],
            maxBarThickness: 150,
          },
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
            x: {
              stacked: true,
            },
            y: {
              stacked: true,
              beginAtZero: true
            }
          },
          plugins: {
            legend: {
              position: 'bottom',
            },
            title: {
              display: true,
              //text: 'Total costs per treatment group: 1st year',
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
                    label += vm.numberFormat.format(context.parsed.y);
                  }
                  return label;
                }
              }
            },
            datalabels: {
              display: false,
              formatter: function (value, context) {
                return `${value > 0 ? vm.numberFormat.format(value) : ""}`;
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

    vm.initializaChart2 = () => {
      const ctx2 = document.getElementById('myChart2').getContext('2d');
      const labels2 = [""];
      const chartData2 = {
        labels: labels2,
        datasets: [
          {
            label: "Increased MedSurg LOS",
            data: [vm.model.H2],
            backgroundColor: ["#001871"],
            maxBarThickness: 150,
          },
          {
            label: "Increased ICU LOS",
            data: [vm.model.H3],
            backgroundColor: ["#00b097"],
            maxBarThickness: 150,
          }
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
          locale: 'pt-BR',
          plugins: {
            title: {
              display: true,
            },
            legend: {
              position: 'bottom',
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

    vm.resetDefault = () => {

      vm.model.B2 = vm.modelClone.B2;
      vm.model.B3 = vm.modelClone.B3;
      vm.model.B4 = vm.modelClone.B4;
      vm.model.B5 = vm.modelClone.B5;
      vm.model.B6 = vm.modelClone.B6;
      vm.model.B9 = vm.modelClone.B9;
      vm.model.B10 = vm.modelClone.B10;
      vm.model.B11 = vm.modelClone.B11;
      vm.model.B13 = vm.modelClone.B13;
      vm.model.B15 = vm.modelClone.B15;
      vm.model.B16 = vm.modelClone.B16;

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

    vm.$onInit = async function () {
      vm.initializaChart1();
      vm.initializaChart2();
      await vm.fetchData();
      $scope.$apply();
    }

    $scope.$watch('vm.model', function (newVal, oldVal) {

      vm.generateChartData();
      myChart1.update();
      myChart2.update();

      for (let e of document.querySelectorAll('input[type="range"].slider-progress')) {
        e.style.setProperty('--value', e.value);
        e.style.setProperty('--min', e.min == '' ? '0' : e.min);
        e.style.setProperty('--max', e.max == '' ? '100' : e.max);
        //e.addEventListener('input', () => e.style.setProperty('--value', e.value));
      }

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

