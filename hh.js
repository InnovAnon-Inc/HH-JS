const ModeGenerator = { 2, 2, 1, 2, 2, 2, 1 };
assert (sum (ModeGenerator) == 12); // 12-semitone scale

const Modes = {
  "Ionian"      : 0,
  "Dorian"      : 1, // rotate left by 1 the ModeGenerator
  "Phrygian"    : 2,
  "Lydian"      : 3,
  "Mixolydian"  : 4,
  "Aeolian"     : 5,
  "Locrian"     : 6,
};

var mode = 0; // [0 - 6]

// TODO syntax
function getModeGenerator (ModeGenerator, mode) {
 var a = ModeGenerator[0, mode + 1];
 var b = ModeGenerator[mode + 1, ModeGenerator.length];
 return a + b;
}

var mg = getModeGenerator (ModeGenerator, mode);

function getBrighterMode (amount, mode) {
 return (mode + amount * 3) % Modes.length;
}
function getDarkerMode (amount, mode) {
 return (mode + amount * 4) % Modes.length; 
}

// ----------

var key = 0; // [0 - 11]

function getSemitones (key, mg) {
  var semitones = { key };
  for (var i = 0; i < mg.length; i++)
    semitones[i + 1] = semitones[i] + mg[i];
}

var semitones = getSemitones (key, mg);

// ----------








//


/*
function semitoneToIntervalName (semitone, mode) {
  var octave = intDiv (semitone, 12);
  var 
}

function Scale {
  var intervalNames = { "P1", "m2", "M2", "m3", "M3", "P4"
};
*/

/*
const IntervalToSemitones = {
  "P1" : 0,
  "m2" : 1,
  "M2" : 2,
  "m3" : 3,
  "M3" : 4,
  "P4" : 5,
  "A4" : 6, "d5" : 6,
  "P5" : 7,
  "m6" : 8,
  "M6" : 9,
  "m7" : 10,
  "M7" : 11
};

// TODO intervalToSemitone (interval) {}

const SemitonesToIntervals = {
  0 : ("P1"),
  1 : ("m2"),
  2 : ("M2"),
  3 : ("m3"),
  4 : ("M3"),
  5 : ("P4"),
  6 : ("A4", "d5"),
  7 : ("P5"),
  8 : ("m6"),
  9 : ("M6"),
  10 : ("m7"),
  11 : ("M7")
};

// TODO semitoneToInterval (semitone) {}

const PrimeLimit5_SymmetricScale1 = {
  "P1" : 1/1,
  "m2" : 16/15,
  "M2" : 9/8,
  "m3" : 6/5,
  "M3" : 5/4,
  "P4" : 4/3,
  "A4" : 45/32,
  "d5" : 64/45,
  "P5" : 3/2,
  "m6" : 8/5,
  "M6" : 5/3,
  "m7" : 16/9,
  "M7" : 15/8
};

// TODO intervalToRatio (interval) {}

const PrimeLimit5_SymmetricScale2 = {
  "P1" : 1/1,
  "m2" : 16/15,
  "M2" : 10/9,
  "m3" : 6/5,
  "M3" : 5/4,
  "P4" : 4/3,
  "A4" : 45/32,
  "d5" : 64/45,
  "P5" : 3/2,
  "m6" : 8/5,
  "M6" : 5/3,
  "m7" : 9/5,
  "M7" : 15/8
};

const PrimeLimit5_AsymmetricScale_Standard = {
  "P1" : 1/1,
  "m2" : 16/15,
  "M2" : 9/8,
  "m3" : 6/5,
  "M3" : 5/4,
  "P4" : 4/3,
  "A4" : 45/32,
  "d5" : 64/45,
  "P5" : 3/2,
  "m6" : 8/5,
  "M6" : 5/3,
  "m7" : 9/5,
  "M7" : 15/8
};

const PrimeLimit5_AsymmetricScale_Extended = {
  "P1" : 1/1,
  "m2" : 16/15,
  "M2" : 9/8,
  "m3" : 6/5,
  "M3" : 5/4,
  "P4" : 4/3,
  "A4" : 25/18,
  "d5" : 36/25,
  "P5" : 3/2,
  "m6" : 8/5,
  "M6" : 5/3,
  "m7" : 9/5,
  "M7" : 15/8
};

const PrimeLimit7 = {
  "P1" : 1/1,
  "m2" : 15/14,
  "M2" : 8/7,
  "m3" : 6/5,
  "M3" : 5/4,
  "P4" : 4/3,
  "A4" : 7/5,
  "d5" : 10/7,
  "P5" : 3/2,
  "m6" : 8/5,
  "M6" : 5/3,
  "m7" : 7/4,
  "M7" : 15/8
};

const PrimeLimit17_1 = {
  "P1" : 1/1,
  "m2" : 14/13,
  "M2" : 8/7,
  "m3" : 6/5,
  "M3" : 5/4,
  "P4" : 4/3,
  "A4" : 7/5,
  "d5" : 10/7,
  "P5" : 3/2,
  "m6" : 8/5,
  "M6" : 5/3,
  "m7" : 7/4,
  "M7" : 13/7
};

const PrimeLimit_2 = {
  "P1" : 1/1,
  "m2" : 14/13,
  "M2" : 8/7,
  "m3" : 6/5,
  "M3" : 5/4,
  "P4" : 4/3,
  "A4" : 17/12,
  "d5" : 10/7,
  "P5" : 3/2,
  "m6" : 8/5,
  "M6" : 5/3,
  "m7" : 7/4,
  "M7" : 13/7
};

const PrimeLimit17_3 = {
  "P1" : 1/1,
  "m2" : 14/13,
  "M2" : 8/7,
  "m3" : 6/5,
  "M3" : 5/4,
  "P4" : 4/3,
  "A4" : 7/5,
  "d5" : 24/17,
  "P5" : 3/2,
  "m6" : 8/5,
  "M6" : 5/3,
  "m7" : 7/4,
  "M7" : 13/7
};

const PrimeLimit_4 = {
  "P1" : 1/1,
  "m2" : 14/13,
  "M2" : 8/7,
  "m3" : 6/5,
  "M3" : 5/4,
  "P4" : 4/3,
  "A4" : 17/12,
  "d5" : 24/17,
  "P5" : 3/2,
  "m6" : 8/5,
  "M6" : 5/3,
  "m7" : 7/4,
  "M7" : 13/7
};
*/
/*
var baseFrequency = 432;
var intervalsToRatios = PrimeLimit5_SymmetricScale1;

function intDiv (a, b) {
 var result = a / b;
 if (result >= 0)
  return Math.floor (result);
 else
  return Math.ceil (result);
}

function semitoneToRatio (semitone, intervalsToRatios) {
  var d = intDiv (semitone, intervalsToRatios.length);
  var r = semitone % intervalsToRatios.length;
  return (2 ** d) * intervalsToRatios[r];
}

var key = 0; // [0 - 11]
const ModeGenerator = { 2, 2, 1, 2, 2, 2, 1 };
var mode = 0; // [0 - 6]


function getScale (key, mode, ModeGenerator) {
  var semitones = {};
  semitones[0] = key + mode;
  for (var i = 0; i < mg.length; i++)
    semitones[i + 1] = semitones[i] + mg[i];
}
var scale = getScale (key, mg);
*/



alert ("success");
