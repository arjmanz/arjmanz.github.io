
let throttle_timer;

let C5 = 100;           // # Beds representing Avg. Daily Census (ADC)
let C6 = 4.7;           // Average Length of Stay (ALOS)
let C9 = 61.00;         // Occupancy Rate (%)
let C12 = 8.97;         // Average Pressure Injury Incidence Rate
let C14 = 4;            // Increased LOS days per patient due to having a PI
let C16 = 920.00;       // Average Direct Variable Cost per day
let C19 = 49.02;         // Percent of Patients at risk to develop a PI
let C22 = 32.70;        // Percent of hospitalized patients with malnutrition
let C24 = "2.6X";          // Malnourished patients have an increased odd of developing a PI
let C26 = 34.00;        // Percent of all hospitalized patients that are incontinent
let C28 = "3X";         // Incontinent patients have an increased odds of developing a PI 

const initialize = function () {
  registerInitialValues();
  setupInputRange();
  setupEventListeners();

  triggerUpdate();

  $('[data-toggle="tooltip"]').tooltip();

}

const setupEventListeners = function () {
  $('input[type=text]').on('keyup change', function (e) {
    throttledUpdate(e);
  });
  
  $('input[type=number]').on('keyup change', function (e) {
    throttledUpdate(e);
  });

  $('input[type=range]').on('input change', function (e) {
    throttledUpdate(e);
  });

  $('a[data-clear]').on('click', function () {
    clearInput($(this).data('clear'));
  });

  $('#reset_to_defaults').on('click', function () {
    resetToDefaults();
  });
}

const registerInitialValues = function () {

  $("#C5").data('default_value', C5);
  $("#C6").data('default_value', C6);
  $("#C9").data('default_value', C9);
  $("#C12").data('default_value', C12);
  $("#C14").data('default_value', C14);
  $("#C16").data('default_value', C16);
  $("#C19").data('default_value', C19);

}

const resetToDefaults = function () {
  $('input').each(function () {
    $(this).val($(this).data('default_value'));
  })

  $('input[type=range]').each(function () {
    $(this).slider('refresh');
  })

  triggerUpdate();
}

const clearInput = function (name) {
  $('[name="' + name + '"]').val('');
  triggerUpdate();
}

const getValue = function (input_name, default_value) {
  if (default_value === undefined) {
    default_value = null;
  }

  var val = $('input[name="' + input_name + '"]').val() || default_value;

  if (!isNaN(val)) {
    return val;
  }
  else {
    all_inputs_are_valid = false;
    return false;
  }
}

const updateNumber = function (id, value) {
  $('#' + id).html(value.toLocaleString('en-US'));
}

const updateUSD = function (id, value) {
  $('#' + id).html('$' + value.toLocaleString('en-US'));
}

const updateInvalid = function (id) {
  $('#' + id).html('--');
}

const updateLabel = function (id, value) {
  $('#' + id).html(value);
}

const throttledUpdate = function (e) {
  if (throttle_timer) {
    return;
  }

  throttle_timer = setTimeout(function () {
    triggerUpdate(e);
  }, 200);
}

const setupInputRange = function () {
  $('#C9').slider({
    formatter: function (value) {
      return value + '%';
    },
    ticks: [0, 100],
    ticks_labels: ['0%', '100%']
  });

  $('#C12').slider({
    formatter: function (value) {
      return value + '%';
    },
    ticks: [0, 50],
    ticks_labels: ['0%', '50%']
  });

  $('#C19').slider({
    formatter: function (value) {
      return value + '%';
    },
    ticks: [0, 100],
    ticks_labels: ['0%', '100%']
  });
}

const triggerUpdate = function (e) {
  throttle_timer = null;
  all_inputs_are_valid = true;

  C5 = getValue('C5');
  C6 = getValue('C6');
  C9 = getValue('C9');
  C12 = getValue('C12');
  C14 = getValue('C14');
  C16 = getValue('C16');
  C19 = getValue('C19');
  
  if (all_inputs_are_valid) {

    let C7 = (C5 * 365) * C9 / C6;
    let C8 = C7 * C6;                                 // # of Annual Patient Days  
    let C13 = Math.round(C7 * C12 / 10000);           // Number of Patients who have a PI
    let C15 = Math.round((C7 * C12 / 10000) * C14);   // Increased LOS Days related to having a PI
    let C20 = Math.round(C7 * C19 / 10000);                       // Number of Patients at risk to develop a PI
    let C17 = Math.round(((C7 * C12 / 10000) * C14) * C16);                              // Annual costs for all PI (# Inc. LOS Days   X  $$ Dir. Var. Cost per day)
    let C23 = Math.round(C7 * C22/ 10000);         // Number of hospitalized patients with malnutrition
    let C27 = Math.round(C7 * C26 / 10000);           // Number of hospitalized patients that are incontinent

    updateNumber('C7', Math.round(C7/100));
    updateNumber('C13', C13);
    updateNumber('C15', C15);
    updateNumber('C17', C17);
    updateNumber('C20', C20);
    updateNumber('C23', C23);
    updateNumber('C24', C24);
    updateNumber('C27', C27);
    updateNumber('C28', C28);

  }
  else {

    updateInvalid('B15');
    updateInvalid('B18');
    updateInvalid('B21');

    updateInvalid('B12');


  }
}

$(document).ready(function () {
  initialize();
});