//--------------------------------------------------------------
//  musicStructures module
//
// returns API
//    spellScale()
//    spellScale2()
//    spellChord()
//    spellDiatonicChord()
//    spellInterval()
//    spellMode()
//
//
// contains
// musicConstants.js
//
// Constants for common music structures
// Aug 27, 2016
//
// based on musicConstants.py
//
// documentation build playPracticeRoom.js scaleSpelling.js QuertyHancockAnimation.js Rhythm.js lilyPondAdapter.js -f html -o docs

/**
 * @overview 
 * This module contains utility functions to create scale and chord structures useable with Tone.js
 * @module scaleSpelling.js
 * @example
 * use the script tag to add this file
 * <script src="path/to/scaleSpelling.js"></script>
 */
 
/*****************************

these are already defined in Scale.java from jMusic

CHROMATIC_SCALE = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11},
MAJOR_SCALE = {0, 2, 4, 5, 7, 9, 11},
MINOR_SCALE = {0, 2, 3, 5, 7, 8, 10},
HARMONIC_MINOR_SCALE = {0, 2, 3, 5, 7, 8, 11},
MELODIC_MINOR_SCALE = {0, 2, 3, 5, 7, 8, 9, 10, 11}, // mix of ascend and descend
NATURAL_MINOR_SCALE = {0, 2, 3, 5, 7, 8, 10},
DIATONIC_MINOR_SCALE = {0, 2, 3, 5, 7, 8, 10},
AEOLIAN_SCALE = {0, 2, 3, 5, 7, 8, 10},
DORIAN_SCALE = {0, 2, 3, 5, 7, 9, 10},	
LYDIAN_SCALE = {0, 2, 4, 6, 7, 9, 11},
MIXOLYDIAN_SCALE = {0, 2, 4, 5, 7, 9, 10},
PENTATONIC_SCALE = {0, 2, 4, 7, 9},
BLUES_SCALE = {0, 2, 3, 4, 5, 7, 9, 10, 11},
TURKISH_SCALE = {0, 1, 3, 5, 7, 10, 11},
INDIAN_SCALE = {0, 1, 1, 4, 5, 8, 10};

######################################################################################
# these are adapted into lists in music.py

# redefine scales as Jython lists (as opposed to Java arrays - for cosmetic purposes)
AEOLIAN_SCALE        = list(AEOLIAN_SCALE) 
BLUES_SCALE          = list(BLUES_SCALE) 
CHROMATIC_SCALE      = list(CHROMATIC_SCALE) 
DIATONIC_MINOR_SCALE = list(DIATONIC_MINOR_SCALE)
DORIAN_SCALE         = list(DORIAN_SCALE) 
HARMONIC_MINOR_SCALE = list(HARMONIC_MINOR_SCALE) 
LYDIAN_SCALE         = list(LYDIAN_SCALE) 
MAJOR_SCALE          = list(MAJOR_SCALE) 
MELODIC_MINOR_SCALE  = list(MELODIC_MINOR_SCALE) 
MINOR_SCALE          = list(MINOR_SCALE) 
MIXOLYDIAN_SCALE     = list(MIXOLYDIAN_SCALE) 
NATURAL_MINOR_SCALE  = list(NATURAL_MINOR_SCALE) 
PENTATONIC_SCALE     = list(PENTATONIC_SCALE) 

****************************************************/

// the above adapted for javascript 

var CHROMATIC_SCALE = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var MAJOR_SCALE = [0, 2, 4, 5, 7, 9, 11];
var MINOR_SCALE = [0, 2, 3, 5, 7, 8, 10];
var HARMONIC_MINOR_SCALE = [0, 2, 3, 5, 7, 8, 11];
var MELODIC_MINOR_SCALE = [0, 2, 3, 5, 7, 8, 9, 10, 11]; // mix of ascend and descend
var NATURAL_MINOR_SCALE = [0, 2, 3, 5, 7, 8, 10];

var HARM_MINOR_SCALE = [0, 2, 3, 5, 7, 8, 11];
var MEL_MINOR_SCALE = [0, 2, 3, 5, 7, 9, 11];
var NAT_MINOR_SCALE = [0, 2, 3, 5, 7, 8, 10];

var DIATONIC_MINOR_SCALE = [0, 2, 3, 5, 7, 8, 10];
var AEOLIAN_SCALE = [0, 2, 3, 5, 7, 8, 10];
var DORIAN_SCALE = [0, 2, 3, 5, 7, 9, 10];
var LYDIAN_SCALE = [0, 2, 4, 6, 7, 9, 11];
var MIXOLYDIAN_SCALE = [0, 2, 4, 5, 7, 9, 10];
var PENTATONIC_SCALE = [0, 2, 4, 7, 9];
var BLUES_SCALE = [0, 2, 3, 4, 5, 7, 9, 10, 11];
var TURKISH_SCALE = [0, 1, 3, 5, 7, 10, 11];
var INDIAN_SCALE = [0, 1, 1, 4, 5, 8, 10];

// ################ additional constants Mike Sult 2016 ##################################
var MINOR_BLUES        = [0,3,5,6,7,10];
var MAJOR_BLUES        = [0,2,3,4,7,9];
var JAZZ_MEL_MINOR     = [0,2,3,5,7,9,11];
var MINOR_PENTATONIC   = [0,3,5,7,10];
var MAJOR_PENTATONIC   = [0,2,4,7,9];
var MAJOR7_PENTATONIC  = [0,2,4,7,11];
var WHOLE_TONE         = [0,2,4,6,8,10];
var HALFWHOLE_DIM      = [0,1,3,4,6,7,9,10];
var WHOLEHALF_DIM      = [0,2,3,5,6,8,9,11];

var TRITONE            = [0,6];
var MAJ_TRIAD          = [0,4,7];
var AUG_TRIAD          = [0,4,8];
var MIN_TRIAD          = [0,3,7];
var DIM_TRIAD          = [0,3,6];
var MAJOR_TRIAD        = [0,4,7];
var AUGMENTED_TRIAD    = [0,4,8];
var MINOR_TRIAD        = [0,3,7];
var DIMINISHED_TRIAD   = [0,3,6];
var MAJflat5_TRIAD     = [0,4,6];
var SUS2_TRIAD         = [0,2,7];
var SUS4_TRIAD         = [0,5,7];
var MAJ7_NO_3RD        = [0,7,11];
var MIN7_NO_3RD        = [0,7,10];
var MAJ7_NO_5TH        = [0,4,11];
var MIN7_NO_5TH       = [0,3,10];
var DOM7_NO_5TH       = [0,4,10];

var TRIAD_FAMILY = [];
TRIAD_FAMILY[0] = MAJ_TRIAD;
TRIAD_FAMILY[1] = MIN_TRIAD;
TRIAD_FAMILY[2] = DIM_TRIAD;
TRIAD_FAMILY[3] = AUG_TRIAD;
//var TRIAD_FAMILY       = [ MAJ_TRIAD, MIN_TRIAD, DIM_TRIAD, AUG_TRIAD ];

var MAJ7_CHORD         = [0,4,7,11];
var DOM7_CHORD         = [0,4,7,10];
var MIN7_CHORD         = [0,3,7,10];
var MIN7b5_CHORD       = [0,3,6,10];
var DIM7_CHORD         = [0,3,6,9];

var SEVENTH_CHORD_FAMILY = [MAJ7_CHORD] + [DOM7_CHORD] + [MIN7_CHORD] + [MIN7b5_CHORD] + [DIM7_CHORD];

var MAJ7sharp5_CHORD   = [0,4,8,11];
var DOM7flat5_CHORD    = [0,4,6,10];
var MINsharp7_CHORD    = [0,3,7,11];
var MIN6_CHORD         = [0,3,7,9];

var SO_WHAT            = [0,5,10,15,19];

//  jazz voicings
var DOM13_1       = [0,10,16,21];
var DOMSHARP9_1   = [0,4,10,15];
var MIN9_1        = [0,3,10,14];
var MAJ9_1        = [0,4,11,14];

// rootless voicings
var DOM13_NOROOT       = [10,16,19];
var DOMSHARP9_NOROOT   = [4,10,15];
var MIN9_NOROOT        = [3,10,14];
var MAJ9_NOROOT        = [4,11,14];

var SHARP_NAMES = ['B#',  'C#', 'Cx', 'D#',   'E',  'E#',  'F#', 'Fx',  'G#', 'Gx', 'A#', 'B'];
var FLAT_NAMES =  ['C',   'Db', 'D',  'Eb',   'Fb', 'F',   'Gb', 'G',   'Ab', 'A',  'Bb',  'Cb'];
var OTHER_NAMES = ['Dbb', 'Bx', 'Ebb', 'Fbb', 'Dx', 'Gbb', 'Ex', 'Abb', 'Ab', 'Bbb', 'Cbb', 'Ax'];


var MIDI_SHARP_NAMES = ['B#_0',  'C#_1', 'Cx_1', 'D#_1',   'E_1',  'E#_1',  'F#_1', 'Fx_1',  'G#_1', 'Gx_1', 'A#_1', 'B_1',
                    'B#_1', 'C#0', 'Cx0', 'D#0', 'E0', 'E#0', 'F#0', 'Fx0', 'G#0', 'Gx0', 'A#0', 'B0',
                    'B#0', 'C#1', 'Cx1', 'D#1', 'E1', 'E#1', 'F#1', 'Fx1', 'G#1', 'Gx1', 'A#1', 'B1',
                    'B#1', 'C#2', 'Cx2', 'D#2', 'E2', 'E#2', 'F#2', 'Fx2', 'G#2', 'Gx2', 'A#2', 'B2',
                    'B#2', 'C#3', 'Cx3', 'D#3', 'E3', 'E#3', 'F#3', 'Fx3', 'G#3', 'Gx3', 'A#3', 'B3',
                    'B#3', 'C#4', 'Cx4', 'D#4', 'E4', 'E#4', 'F#4', 'Fx4', 'G#4', 'Gx4', 'A#4', 'B4',
                    'B#4', 'C#5', 'Cx5', 'D#5', 'E5', 'E#5', 'F#5', 'Fx5', 'G#5', 'Gx5', 'A#5', 'B5',
                    'B#5', 'C#6', 'Cx6', 'D#6', 'E6', 'E#6', 'F#6', 'Fx6', 'G#6', 'Gx6', 'A#6', 'B6',
                    'B#6', 'C#7', 'Cx7', 'D#7', 'E7', 'E#7', 'F#7', 'Fx7', 'G#7', 'Gx7', 'A#7', 'B7',
                    'B#7', 'C#8', 'Cx8', 'D#8', 'E8', 'E#8', 'F#8', 'Fx8', 'G#8', 'Gx8', 'A#8', 'B8',
                    'B#8', 'C#9', 'Cx9', 'D#9', 'E9', 'E#9', 'F#9', 'Fx9'];
                          

var MIDI_FLAT_NAMES = ['C_1', 'Db_1', 'D_1', 'Eb_1', 'Fb_1', 'F_1', 'Gb_1', 'G_1', 'Ab_1', 'A_1', 'Bb_1', 'Cb0',
                    'C0', 'Db0', 'D0', 'Eb0', 'Fb0', 'F0', 'Gb0', 'G0', 'Ab0', 'A0', 'Bb0', 'Cb1',
                    'C1', 'Db1', 'D1', 'Eb1', 'Fb1', 'F1', 'Gb1', 'G1', 'Ab1', 'A1', 'Bb1', 'Cb2',
                    'C2', 'Db2', 'D2', 'Eb2', 'Fb2', 'F2', 'Gb2', 'G2', 'Ab2', 'A2', 'Bb2', 'Cb3',
                    'C3', 'Db3', 'D3', 'Eb3', 'Fb3', 'F3', 'Gb3', 'G3', 'Ab3', 'A3', 'Bb3', 'Cb4',
                    'C4', 'Db4', 'D4', 'Eb4', 'Fb4', 'F4', 'Gb4', 'G4', 'Ab4', 'A4', 'Bb4', 'Cb5',
                    'C5', 'Db5', 'D5', 'Eb5', 'Fb5', 'F5', 'Gb5', 'G5', 'Ab5', 'A5', 'Bb5', 'Cb6',
                    'C6', 'Db6', 'D6', 'Eb6', 'Fb6', 'F6', 'Gb6', 'G6', 'Ab6', 'A6', 'Bb6', 'Cb7',
                    'C7', 'Db7', 'D7', 'Eb7', 'Fb7', 'F7', 'Gb7', 'G7', 'Ab7', 'A7', 'Bb7', 'Cb8',
                    'C8', 'Db8', 'D8', 'Eb8', 'Fb8', 'F8', 'Gb8', 'G8', 'Ab8', 'A8', 'Bb8', 'Cb9',
                    'C9', 'Db9', 'D9', 'Eb9', 'Fb9', 'F9', 'Gb9', 'G9'];
                    


var MIDI_OTHER_NAMES = ['Dbb_1', 'Bx_0', 'Ebb_1', 'Fbb_1', 'Dx_1', 'Gbb_1', 'Ex_1', 'Abb_1', 'Ab_1', 'Bbb_1', 'Cbb0', 'Ax_1',
                    'Dbb0', 'Bx_1', 'Ebb0', 'Fbb0', 'Dx0', 'Gbb0', 'Ex0', 'Abb0', 'Ab0', 'Bbb0', 'Cbb1', 'Ax0',
                    'Dbb1', 'Bx0', 'Ebb1', 'Fbb1', 'Dx1', 'Gbb1', 'Ex1', 'Abb1', 'Ab1', 'Bbb1', 'Cbb2', 'Ax1',
                    'Dbb2', 'Bx1', 'Ebb2', 'Fbb2', 'Dx2', 'Gbb2', 'Ex2', 'Abb2', 'Ab2', 'Bbb2', 'Cbb3', 'Ax2',
                    'Dbb3', 'Bx2', 'Ebb3', 'Fbb3', 'Dx3', 'Gbb3', 'Ex3', 'Abb3', 'Ab3', 'Bbb3', 'Cbb4', 'Ax3',
                    'Dbb4', 'Bx3', 'Ebb4', 'Fbb4', 'Dx4', 'Gbb4', 'Ex4', 'Abb4', 'Ab4', 'Bbb4', 'Cbb5', 'Ax4',
                    'Dbb5', 'Bx4', 'Ebb5', 'Fbb5', 'Dx5', 'Gbb5', 'Ex5', 'Abb5', 'Ab5', 'Bbb5', 'Cbb6', 'Ax5',
                    'Dbb6', 'Bx5', 'Ebb6', 'Fbb6', 'Dx6', 'Gbb6', 'Ex6', 'Abb6', 'Ab6', 'Bbb6', 'Cbb7', 'Ax6',
                    'Dbb7', 'Bx6', 'Ebb7', 'Fbb7', 'Dx7', 'Gbb7', 'Ex7', 'Abb7', 'Ab7', 'Bbb7', 'Cbb8', 'Ax7',
                    'Dbb8', 'Bx7', 'Ebb8', 'Fbb8', 'Dx8', 'Gbb8', 'Ex8', 'Abb8', 'Ab8', 'Bbb8', 'Cbb9', 'Ax8',
                    'Dbb9', 'Bx8', 'Ebb9', 'Fbb9', 'Dx9', 'Gbb9', 'Ex9', 'Abb9'];
                    

function noteNameToMIDI(noteName)  {
    var i;
    var MIDInumber = -1; // default if not found
    for(i=0; i < MIDI_SHARP_NAMES.length; i++) {
        if( noteName == MIDI_SHARP_NAMES[i] ||
                noteName == MIDI_FLAT_NAMES[i] ||
                    noteName == MIDI_OTHER_NAMES[i] ) {
        
            MIDInumber = i;  // found it
        }
    }
    return MIDInumber;
}

// this function takes an array of notes in the form letterName/octave (scientic music notation?)
// i.e. var Cmajor = ['C3','D3','E3','F3','G3','A3','B3','C4'];
// var Eb major = TransposeSequence(Cmajor, 3);
// var A_major = TransposeSequence(Cmajor, -3);
/**
 * this function transposes an arrayOfNotes by a specified number of half steps
 * @public
 * @param {object} arrayOfNotes
 * @param {number} transposeHalfSteps
 * @returns {object} array of transposed notes
 * NOTE: doesn't deal with correct name but only the correct sounding pitch
 * @example
 * var c_scale = ["C4","D4","E4","F4","G4","A4","B4","C5"];
 * var eb_scale = TransposeSequence(c_scale, 3);
 * // eb_scale = ["D#4","F4","G4","G#4","A#4","C5","D5","D$5"];
 * // wrong spelling but sounds correct.  
 * // This spelling is OK for (guitar/mandolin) tablature but can't be used for standard notation.
 */
function TransposeSequence(arrayOfNotes, transposeHalfSteps) {
    var newArrayOfNotes = [];
    var MIDInumbers = [];
    
// change the arrayOfNotes into an array of MIDI numbers
// and transpose the MIDI number array by transposeHalfSteps
//    console.log('TransposeSequence: arrayOfNotes='+arrayOfNotes.toString());
    for(var i=0; i < arrayOfNotes.length; i++) {
        MIDInumbers[i] = ( noteNameToMIDI(arrayOfNotes[i])  + transposeHalfSteps);
    }
    

// translate the MIDI number array back into a new arrayOfNotes
// this doesn't deal with correct name but only the correct sounding pitch
// from the MIDI_SHARP_NAMES array nameset.
    for(var i=0; i < arrayOfNotes.length; i++) {
        if(MIDI_SHARP_NAMES[MIDInumbers[i]].includes('x') || 
            MIDI_SHARP_NAMES[MIDInumbers[i]].includes('B#') ||
              MIDI_SHARP_NAMES[MIDInumbers[i]].includes('E#')) {
            newArrayOfNotes[i] = MIDI_FLAT_NAMES[MIDInumbers[i]];
        } else {
            newArrayOfNotes[i] = MIDI_SHARP_NAMES[MIDInumbers[i]];
        }
    }
// return new arrayOfNotes
    return newArrayOfNotes;
}

/*************************************************
#
# scaleSpelling.js (js implementation of scaleSpelling.py)
#
# the major scale use two rules and have some illegal root names
##########
# rule 1 # 
##########
# adhere to the scale pattern for adjacent intervals
# 0 2 2 1 2 2 2 1
# where 0 = root and each number is the distance (in half steps) to the next note
#
# An alternate way of looking at the formula is
# 0 2 4 5 7 9 11 12
# where 0 = root of the scale and the other number are the offsets (in half steps)
# from the root (the cummulation of numbers from the interval pattern above). 
# This second method is used here

##########
# rule 2 # 
##########
# use all of the letter names of the music alphabet in some form (natural, sharp or flat)
# but only use each letter once per octave.  
# For example don't use both F and F# in the same major scale.
# ALSO: for major scales there is never a mixture of sharps and flats in the same scale
# i.e. D major =  D  E  F# G  A  B  C# (D) (no flat names used)
#      Db major = Db Eb F  Gb Ab Bb C (Db) (no sharp names used)
#    (even though Gb and F# are the same sound, for Db major the correct name is Gb (not F#), 
#     because the letter F has already been used)

######################
# illegal root names #
######################
# the following note names are NOT used as roots for major scales
# due to overly complex note names when following the rules
# (they result in double sharps or double flats) 
#
# G#, D#, A#, E#, B#, Fb, 
#
# (instead use the following enharmonic keys respectively)
# (Ab, Eb, Bb, F, C, E)
#
# the following note names are NOT used as roots for minor scales
# due to overly complex note names when following the rules
# (they result in double sharps or double flats) 
#
# (E#, B#, Db) 
#
# (instead use the following enharmonic keys respectively)
# (F, C, C#)
#
# NOTE: double sharps (x) and double flats (bb) are never used as roots (tonic) to major or minor scales.
*/

var DEBUG = true;
var DEBUG_LEVEL = 0;

var ALPHA_NAMES = ['A','B','C','D','E','F','G'];

var enharmonics = {
    "Cb": 'B',
    "Db": 'C#',
    "Eb": 'D#',
    "Fb": 'E',
    "Gb": 'F#',
    "Ab": 'G#',
    "Bb": 'A#',
    "B#": "C",
    "E#": "F",
    "Cx": "D",
    "Dx": "E",
    "Ex": "F#",
    "Fx": "G",
    "Gx": "A",
    "Ax": "B",
    "Bx": "C#",
    "Cbb": "A#",
    "Dbb": "C",
    "Ebb": "D",
    "Fbb": "D#",
    "Gbb": "F",
    "Abb": "G",
    "Bbb": "A"
};

var flatEnharmonics = {
    "A#": "Bb",
    "C#": "Db",
    "D#": "Eb",
//    "E": "Fb",
//    'B': "Cb",
    "F#": "Gb",
    "G#": "Ab"
};

var scaleNameToFormula = {
    "major": MAJOR_SCALE,
    "natural_minor": NAT_MINOR_SCALE,
    "melodic_minor": JAZZ_MEL_MINOR,
    "harmonic_minor": HARM_MINOR_SCALE,
    "minor_pentatonic": MINOR_PENTATONIC,
    "major_pentatonic": MAJOR_PENTATONIC,
    "major_blues": MAJOR_BLUES,
    "minor_blues": MINOR_BLUES,
    "whole_tone": WHOLE_TONE
};


//--- diatonic triads within one octave -----
var romanNumeralsToScaleDegrees = {
    "I": [1,3,5],
    "II": [2,4,6],
    "III": [3,5,7],
    "IV": [1,4,6],
    "V": [2,5,7],
    "VI": [1,3,6],
    "VII": [2,4,7]
};
//======================

//--- four note voicing of  diatonic triads -----------
var romanNumeralsToFourNoteVoicing = {
    "I": [1,10,12,15],
    "II": [2,9,11,13],
    "III": [3,10,12,14],
    "IV": [4,8,11,13],
    "V": [5,9,12,14],
    "VI": [6,8,10,13],
    "VII": [7,9,11,14]
};
//======================

var intervalNameToHalfSteps = {
    "PU": 0,
    "AU": 1,
    "mi2": 1,
    "ma2": 2,
    "A2": 3,
    "mi3": 3,
    "ma3": 4,
    "P4": 5,
    "A4": 6,
    "dim5": 6,
    "P5": 7,
    "A5": 8,
    "mi6": 8,
    "ma6": 9,
    "A6": 10,
    "dim7": 9,
    "mi7": 10,
    "ma7": 11,
    "P8": 12
}


function parseRomanNumeralsToChordFormula(romanNumeralsString) {
    var outputArray = [];
    var scaleDegrees = [];
    let delimiter = "-";
    
    // validate with regex
    
    // divide into an array of romanNumerals
    var romanNumerals = romanNumeralsString.split(delimiter);
    
    // create array of chord degrees arrays 
    // using romanNumeralsToScaleDegress dictionary
    romanNumerals.forEach( function(element, index, romanNumerals) {
        scaleDegrees = romanNumeralsToScaleDegrees[element];
        outputArray.push(scaleDegrees);
//        console.log(element + "=" + scaleDegrees);
    });
//    console.log("outputArray="+outputArray);
    return outputArray;
}


function parseRomanNumeralsToChordVoicing(romanNumeralsString, chordVoicingName) {
    var outputArray = [];
    var scaleDegrees = [];
    let delimiter = "-";
    var chordVoicingDictionary = {};
    
    if(chordVoicingName == 'triads') {
        chordVoicingDictionary = romanNumeralsToScaleDegrees;
    } else if(chordVoicingName == '4 note voicing') {
        chordVoicingDictionary = romanNumeralsToFourNoteVoicing;
    }
    
    // validate with regex
    
    // divide into an array of romanNumerals
    var romanNumerals = romanNumeralsString.split(delimiter);
    
    // create array of chord degrees arrays 
    // using chordVoicingDictionary 
    romanNumerals.forEach( function(element, index, romanNumerals) {
        scaleDegrees = chordVoicingDictionary[element];
        outputArray.push(scaleDegrees);
//        console.log(element + "=" + scaleDegrees);
    });
//    console.log("outputArray="+outputArray);
    return outputArray;
}




function printDebug(str, dbLevel) {
    if (DEBUG == true && dbLevel > DEBUG_LEVEL)
        console.log(str);
    return;
}

/**
 * this function takes a scale and extends it to three octave (one octave lower and one octave higher)
 * @public
 * @param {object} scale (array of strings)
 * @returns {object}
 * @example
 * var my_scale = ["A4","B4","C#5","D5","E5","F#5","G#5","A5"];
 * var new_scale = extendScaleToThreeOctaves(my_scale);
 * // new_scale = ["A3","B3","C#4","D4","E4","F#4","G#4",
 * //               "A4","B4","C#5","D5","E5","F#5","G#5",
 * //                "A5","B5","C#6","D6","E6","F#6","G#6","A6"]
 */
function extendScaleToThreeOctaves(scale) {
    var newScale = [];
    var newNote;
    var newNoteOctave;
    // check to see if last note is one octave above first note
    var firstNote = scale[0];
    var lastNote = scale[scale.length-1];

    var firstNoteName = firstNote.substring(0 , firstNote.length-1);
    var firstNoteOctave = Number(firstNote.substring(firstNote.length-1, firstNote.length));

    var lastNoteName = lastNote.substring(0 , lastNote.length-1);
    var lastNoteOctave = Number(lastNote.substring(lastNote.length-1, lastNote.length));
    if(firstNoteName != lastNoteName || firstNoteOctave+1 != lastNoteOctave) {
        // not a one octave scale so just return unextended version
        return scale
    }
    // make lower octave (except for last note)
    for(let i=0; i<scale.length-1; i++) {
        newNote = scale[i].substring(0 , scale[i].length-1);
        newNoteOctave = (Number(scale[i].substring(scale[i].length-1, scale[i].length))-1).toString();
        newNote = newNote.concat(newNoteOctave);
        newScale.push(newNote);
    }

    // concat scale to lower octave
    newScale = newScale.concat(scale);
    
    // concat upper octave (except for first note)
    for(let i=1; i<scale.length; i++) {
        newNote = scale[i].substring(0 , scale[i].length-1);
        newNoteOctave = (Number(scale[i].substring(scale[i].length-1, scale[i].length))+1).toString();
        newNote = newNote.concat(newNoteOctave);
        newScale.push(newNote);
    }
    return newScale;
}

function validateRoot(scale, rootChoice) {
    // This function returns true if a rootChoice for a specific scale is valid.
    // NOTE: Only works for major, natural minor, harmonic minor, melodic minor scales.

    var pattern = /[ABCDEFG]{1}[b|#]?$/
    var match = pattern.test(rootChoice)
    printDebug (match)
    if (match == false) {
        printDebug ("invalid root =" + rootChoice, 2);
        return false;
    }

    if (scale == MAJOR_SCALE) {
        if ( ['G#', 'D#', 'A#', 'E#', 'B#', 'Fb'].indexOf(rootChoice) != -1 ) {
            printDebug ("invalid root for major scale =" + rootChoice, 2);
            return false;
        }
        else
            return true;
    }
    if (scale == NAT_MINOR_SCALE || scale == HARM_MINOR_SCALE || scale == MEL_MINOR_SCALE) {
        if ( ['E#', 'B#', 'Fx', 'Cx', 'Gx', 'Db', 'Gb'].indexOf(rootChoice) != -1 ) {
            printDebug ("invalid root for minor scale =" + rootChoice, 2);
            return false;
        }
        else {
//            printDebug("else")
            return true;
        }
    }
}

var rootNameForMinorScale = {
    "E#": "F",
    "B#": "C",
    "Fx": "G",
    "Cb": "B",
    "Cx": "D",
    "Gx": "A",
    "Db": "C#",
    "Gb": "F#",
    "Ab": "G#"
};

var rootNameForMajorScale = {
    "G#": "Ab",
    "D#": "Eb",
    "A#": "Bb",
    "E#": "F",
    "B#": "C",
    "Fb": "E"
};


function fixRootName(scale, rootChoice) {
    var rootName = rootChoice;

    // I don't know why == doesn't work for MAJOR_SCALE while arraysEqual() does work
    // AND why == does work for the minor scales and arraysEqual() doesn't work
    // ??????????????????????????????????????????

    if ( arraysEqual(scale, MAJOR_SCALE) || arraysEqual(scale, MAJOR_BLUES) || arraysEqual(scale, MAJOR_PENTATONIC) ) {
//    if ( scale == MAJOR_SCALE ) {
        if ( ['G#', 'D#', 'A#', 'E#', 'B#', 'Fb'].indexOf(rootChoice) != -1 ) {
            rootName = rootNameForMajorScale[rootChoice];
//            console.log("scale="+scale+" MAJOR_SCALE="+MAJOR_SCALE)
        }
    }
    if ( arraysEqual(scale, NAT_MINOR_SCALE) ||  arraysEqual(scale, HARM_MINOR_SCALE) ||  
             arraysEqual(scale, JAZZ_MEL_MINOR) || arraysEqual(scale, MINOR_BLUES) ||
                arraysEqual(scale, MINOR_PENTATONIC) ) {
//    if ( scale == NAT_MINOR_SCALE ||  scale == HARM_MINOR_SCALE ||  scale == JAZZ_MEL_MINOR ) {
        if ( ['E#', 'B#', 'Fx', 'Cx', 'Gx', 'Db', 'Ab', 'Gb'].indexOf(rootChoice) != -1 ) {
            rootName = rootNameForMinorScale[rootChoice];
//            console.log("scale="+scale+" NAT_MINOR_SCALE="+NAT_MINOR_SCALE)
        }
    }
//    console.log("rootChoice="+rootChoice+" rootName="+rootName);
    return rootName;
}

function findIndex(letter) {
    // look for letter in FLAT_NAMES
    var i = 0;
    for (i=0; i<FLAT_NAMES.length; i++) 
       if ( letter == FLAT_NAMES[i] )
           return i;
    // if didn't find it, look in SHARP_NAMES
    for (i=0; i<SHARP_NAMES.length; i++)
       if ( letter == SHARP_NAMES[i] )
           return i;
    // still didn't find it
    return -1; 
}

function findAlphaIndex(letter) {
    // look for letter in ALPHA_NAMES
    var i;
    for (i=0; i<ALPHA_NAMES.length; i++)
       if ( letter == ALPHA_NAMES[i] )
           return i;
    // didn't find it
    return -1; 
}
       
function makeAlphaList(rootName) {
    // This function reorders the ALPHA_NAMES list so that rootName is the first element
    var i = 0;
    var letter = rootName[0];
    var startIndex = findAlphaIndex(letter);
    if (startIndex < 0)
        printDebug ("startIndex < 0", 1) 
    var newList = []
    var index = startIndex
    for (i=0; i<ALPHA_NAMES.length; i++) {
        if ( index+i > 6 )
            index = index - 7;
        newList.push(ALPHA_NAMES[index+i]);
    }
    newList.push(ALPHA_NAMES[startIndex]);
    return newList;
}


function getChromaticOffset(rootName) {
    // The function returns the number of half steps the rootName differs 
    // from the natural note of the same letter

    var modifier = 0;
    if ( rootName[-1] == rootName[0] ) {
        // no chromatic signs
        modifier = 0;
    }  else if ( rootName.length == 3 ) {
        // a double flat
        modifier = -2;
    }  else if ( rootName.length == 2 ) {
        if ( rootName[1] == '#' ) {
            // second char is a sharp (#) 
            modifier = 1;
        }  else if ( rootName[1] == 'b' ) {
            // second char is a flat (b)
            modifier = -1;
        }  else if ( rootName[1] == 'x' ) {
            // second char is a double sharp (x)
            modifier = 2;
        }
    }
    return modifier;
}


function makeNameList(scaleList, rootName) {
    // This function returns a reordered list of the scaleList with the rootName as the first element

    var modifier = 0;
    var startIndex = 0;
    var startLetterIndex = 0;
    var letter = rootName[0];
    
    startLetterIndex = findIndex(letter); 
    modifier = getChromaticOffset(rootName);
    startIndex =  startLetterIndex + modifier;
    if ( startIndex < 0 )
        startIndex = startIndex + 12;
        
    newList = [];
    index = startIndex;
    var i = 0;
    for (i=0; i<scaleList.length; i++) {
        if ( index+i > 11 )
            index = index - 12;
        newList.push(scaleList[index+i]);
    }    
    newList.push(scaleList[startIndex]);
    return newList;
}            


// (modeNum 0 is mapped to tonic), Example for scaleFormulaInput = MAJOR_SCALE
// modeNum 0 and 1 = ionian, modeNum 2 = dorian, modeNum 3 = phrygian, etc.
/**
 * this function returns an array of noteNames suitable for Tone.js use
 * @public
 * @param {string | object} scaleFormulaInput (can be either a (comma separated) string or an array of integers)
 * @param {string} rootAndOctave
 * @param {number} modeNum
 * @returns {object} array of noteNames in mode
 * @example
 * const myFormula = "0,2,4,5,7,9,11";
 * var myMode = spellMode(myFormula, "Eb4",3); // third mode of G major
 * // myMode = ['G4','Ab4',Bb4','C5','D5','Eb5','F5','G5'] (G phrygian)
 */
function spellMode(scaleFormulaInput, rootAndOctave, modeNum) { 

    var parent_root = rootAndOctave.substring(0 , rootAndOctave.length-1);
    var rootStartingOctave = rootAndOctave.substring(rootAndOctave.length-1, rootAndOctave.length);
    var parent_root_octave = (Number(rootStartingOctave)+1).toString();
    var parent_scale = spellScale(scaleFormulaInput, rootAndOctave);

    if (modeNum > parent_scale.length) {
        alert("invalid mode value.");
        return;
    }

    var mode_root = parent_scale[modeNum-1].substring(0, parent_scale[modeNum-1].length-1);
    var modeStartingOctave = parent_scale[modeNum-1].substring(parent_scale[modeNum-1].length-1, parent_scale[modeNum-1].length);
    var octave = modeStartingOctave;
    var i = 0;

    var mode = [];

    //  NOTE: both modeNum 0, 1 = parent_scale, modeNum => 2 indicates a mode of parent_scale
    // this is compatible with the musical "2 = ii, 3 = iii, 4 = IV etc." way of thinking.
    if (modeNum < 2)
        return parent_scale;
    else {
        for (i=0; i < parent_scale.length; i++) {
            if ( parent_scale[(i + (modeNum-1)) % parent_scale.length].localeCompare(rootAndOctave) != 0) // don't put the parent root (rootAndOctave) in the scale, it's octave is already there.
            { 
                mode_note = parent_scale[(i + (modeNum-1)) % parent_scale.length].substring(0 , parent_scale[(i + (modeNum-1)) % parent_scale.length].length-1);
                if ( mode_note.includes('C') && (i > 0))
                    octave = (Number(modeStartingOctave) + 1).toString();
                mode.push(mode_note + octave);
            }
        }
    }
    octave = (Number(modeStartingOctave) + 1).toString();
    mode.push(mode_root + octave);
    return mode;

}

// this creates a chord using a scaleFormula/Root and selected scale degrees 
// from that scale as defined in the scaleDegrees param
/**
 * this function returns an array of noteNames in chord suitable for Tone.js use
 * @public
 * @param {string} scaleDegrees (can be either a (comma separated) string or an array of strings)
 * @param {string} scaleFormula
 * @param {string} rootAndOctave
 * @returns {string} array of noteNames in chord
 * @example
 * var scale_degrees = "2,4,6"; // or [2,4,6]
 * var scale_formula = "0,2,4,5,7,9,11" // or [0,2,4,5,7,9,11]
 * var myChord = spellDiatonicChord(scale_degrees, scale_formula, "A4")
 * // myChord = ["B4","D5","F#5"]
 */
function spellDiatonicChord(scaleDegrees, scaleFormula, rootAndOctave) {
    let root = rootAndOctave.substring(0 , rootAndOctave.length-1)
    let startingOctave = rootAndOctave.substring(rootAndOctave.length-1, rootAndOctave.length)
    var octave = ''
    var correctName = '';
    var chord = [];
    var msg = "scaleFormula="+scaleFormula;
//    console.log(msg);
    // create the scale 3 octaves
    var myScale = spellScale2(scaleFormula, rootAndOctave);
    for(var i=0; i<scaleDegrees.length; i++) {
        chord.push(myScale[(scaleDegrees[i]-1)]);
    }
    return chord;
}

function scaleDegreesRangeMoreThanOneOctave(scaleDegrees) {
    for(var i=0; i<scaleDegrees.length; i++) {
        if(scaleDegrees[i] > 7)
            return true;
    }
    return false;
}


function spellDiatonicChordVoicing(scaleDegrees, scaleFormula, rootAndOctave) {
    let root = rootAndOctave.substring(0 , rootAndOctave.length-1)
    let startingOctave = rootAndOctave.substring(rootAndOctave.length-1, rootAndOctave.length)
    var octave = ''
    var correctName = '';
    var chord = [];
    var myScale;
    var needsWideRange = scaleDegreesRangeMoreThanOneOctave(scaleDegrees);
    var msg = "scaleFormula="+scaleFormula;
//    console.log(msg);
    // create the scale 3 octaves
    var theScale = spellScale2(scaleFormula, rootAndOctave);
    if(needsWideRange) {
        myScale = extendScaleToThreeOctaves(theScale);
    } else {
        myScale = theScale;
    }
    for(var i=0; i<scaleDegrees.length; i++) {
        chord.push(myScale[(scaleDegrees[i]-1)]);
    }
    return chord;
}



/**
 * this function returns an array of noteNames suitable for Tone.js use
 * @public
 * @param {string | object} chordFormulaInput (can be either a (comma separated) string or an array of integers)
 * @param {string} rootAndOctave
 * @param {object} scaleDegrees (an array of integers)
 * @returns {object} array of noteNames in chord
 * @example
 * var chord_formula = "0,4,7";
 * var root = "A4";
 * var scale_degrees = [1,3,5];
 * var myChord = spellChord(chord_formula, root, scale_degrees);
 * // myChord = ["A4","C#5","E5"]
 */
function spellChord(chordFormulaInput, rootAndOctave, scaleDegrees)  {
    var correctNameAndOctave = ""
    var chordFormula = new Array();
    if(typeof chordFormulaInput == 'string'){  // chordFormulaInput is a string
        chordFormula = chordFormulaInput.split(",");
//        alert("string version");
    }
    else if(typeof chordFormulaInput == 'object'){ // chordFormulaInput is an array
        chordFormula = chordFormulaInput;
//        alert("object version");
    }

    var root = rootAndOctave.substring(0 , rootAndOctave.length-1)
    var startingOctave = rootAndOctave.substring(rootAndOctave.length-1, rootAndOctave.length)
    var octave = ''
//    if( validateRoot(chordFormula, root) == false)
//        return;
    var i = 0;
    var correctName = '';
    // make modified version of the name lists, start at the root and up one octave
    var sharpnamesList = makeNameList(SHARP_NAMES, root)
    var flatnamesList = makeNameList(FLAT_NAMES, root)
    var othernamesList = makeNameList(OTHER_NAMES, root)
    var alphanamesList = makeAlphaList(root)
    var msg = "spellChord() chordFormula = " + chordFormula + " chordFormula.length = " + chordFormula.length;
//    console.log(msg);
    var chord = [];
    octave = startingOctave
    for (i=0; i<chordFormula.length; i++) {
        msg = "chordFormula[" + i + "] = " + chordFormula[i] + " scaleDegrees[" +i + "] = " + scaleDegrees[i];
//        console.log(msg);

        // scaleDegree values start at 1 (i.e. 1,3,5 etc.) 
        // so to use with a zero indexed array we have to subtract 1.
        var index = scaleDegrees[i]-1;
        
        // check index for negative (shouldn't happen but just in case()
        if (index < 0) {
            console.log("ERROR: scaleDegrees["+i+"] is negative ("+index+"). resetting index to 0.");
            index = 0;
        }
        
        if ( sharpnamesList[Number(chordFormula[i])].includes(alphanamesList[index]) ) {
            correctName = sharpnamesList[Number(chordFormula[i])];
            msg = "sharpnamesList: correctName="+correctName + " alphanamesList["+index+"]=" + alphanamesList[index];
        }  else if (flatnamesList[Number(chordFormula[i])].includes(alphanamesList[index]) ) {
            correctName = flatnamesList[Number(chordFormula[i])];
            msg = "flatnamesList: correctName="+correctName + " alphanamesList["+index+"]=" + alphanamesList[index];
        }  else if (othernamesList[Number(chordFormula[i])].includes(alphanamesList[index]) ) {
            correctName = othernamesList[Number(chordFormula[i])];
            msg = "othernamesList: correctName="+correctName + " alphanamesList["+index+"]=" + alphanamesList[index];
        }

        // check to see if we need to change to a new octave
        octave = (Number(startingOctave) + getOctaveOffset(root, scaleDegrees[i]) ).toString();
        correctNameAndOctave = correctName.concat(octave);
//        console.log(msg);
        chord.push(correctNameAndOctave);
    }
    return chord;
}

function getOctaveOffset(root, scaleDegree) {
    var octaveOffset = 0;
	if(  (root.includes("B")  && scaleDegree > 1) || (root.includes("A") && scaleDegree > 2) ||
		   (root.includes("G") && scaleDegree > 3) || (root.includes("F") && scaleDegree > 4) ||
		   (root.includes("E") && scaleDegree > 5) || (root.includes("D") && scaleDegree > 6) ||
		   (root.includes("C") && scaleDegree > 7) ) {
		octaveOffset = 1;
	}
	return octaveOffset;
}


function spellChordProgression(scale, rootAndOctave, scaleDegreeFormula)  {
    var myScale = [];
    var chordProgressionOutput = [];
    var chordFormula = [];
    var aChord = [];
    var msg = "spellChordProgression(), scale = " + scale;
//    console.log(msg);

    if(typeof scale == 'string'){  // scale is a string
        myScale = scale.split(",");
//        alert("string version");
    }
    else if(typeof scale == 'object'){ // scale is an array
        myScale = scale;
//        alert("object version");
    }
    msg = "myScale.length = " + myScale.length + " scale.length = " + scale.length;
//    console.log(msg);
    for(let i=0; i<scaleDegreeFormula.length; i++) {
        scaleDegrees = scaleDegreeFormula[i]
        msg = "scaleDegreeFormula[" + i + "] = " + scaleDegrees + " rootAndOctave=" + rootAndOctave;
//        console.log(msg);
//        aChord = spellDiatonicChord(scaleDegrees, scale, rootAndOctave);
//        aChord = spellDiatonicChord(scaleDegrees, myScale, rootAndOctave);
        aChord = spellDiatonicChordVoicing(scaleDegrees, myScale, rootAndOctave);
        chordProgressionOutput.push(aChord);
    }
    return chordProgressionOutput;
}

/**
 * this function returns an array of noteNames suitable for Tone.js use
 * @public
 * @param {object} intervalFormulaInput  (array of integers)
 * @param {string} rootAndOctave
 * @returns {object} array of interval noteNames
 * @example 
 * var interval_formula = [0,7];
 * var myInterval = spellInterval(interval_formula, "Bb4")
 * // myInterval = ["Bb4","F5"]
 */
function spellInterval(intervalFormulaInput, rootAndOctave) {  // intervalFormulaInput can be either a string or an array
    var correctNameAndOctave = ""
    var intervalFormula = new Array();
    if(typeof intervalFormulaInput == 'string'){  // intervalFormulaInput is a string
        intervalFormula = intervalFormulaInput.split(",");
//        alert("string version");
    }
    else if(typeof intervalFormulaInput == 'object'){ // intervalFormulaInput is an array
        intervalFormula = intervalFormulaInput;
//        alert("object version");
    }

    var root = rootAndOctave.substring(0 , rootAndOctave.length-1)
    var startingOctave = rootAndOctave.substring(rootAndOctave.length-1, rootAndOctave.length)
    var octave = ''
//    printDebug("rootAndOctave="+ rootAndOctave + "  root=" + root + " octave=" + startingOctave , 3)
    if( validateRoot(intervalFormula, root) == false)
        return;
    var i = 0;
    var correctName = '';
    // make modified version of the name lists, start at the root and up one octave
    var sharpnamesList = makeNameList(SHARP_NAMES, root)
    var flatnamesList = makeNameList(FLAT_NAMES, root)
    var othernamesList = makeNameList(OTHER_NAMES, root)
    var alphanamesList = makeAlphaList(root)
    console.log('alphanamesList='+alphanamesList);
//    printDebug (root + "\n" + sharpnamesList + "\n" + flatnamesList + "\n" + othernamesList + "\n" + alphanamesList, 2)
//    printDebug(intervalFormula, 3)
//    printDebug(Number(intervalFormula[3]),2)
    var interval = new Array()
    octave = startingOctave
    var MIDI_firstNote = -1; // default for not found
    // find the MIDI number of the rootAndOctave
    for (i=0; i<MIDI_SHARP_NAMES.length; i++) {
        if(rootAndOctave == MIDI_SHARP_NAMES[i] || rootAndOctave == MIDI_FLAT_NAMES[i] )
            MIDI_firstNote = i;
    }
    if(MIDI_firstNote == -1) // error
        return interval = ["C4","C4"];
        
    // index will be used to lookup name of second note of the interval
    var index = MIDI_firstNote + intervalFormula[1];

    // Analyze the intervalFormula to determine the most normal interval name for the second note
    // i.e. if the first note is A and intervalFormula is 4 half steps create a ma3, A-C# and NOT a Dim4, A-Db
    // RULES: 1 hs = mi2 (not A1), 2 hs = ma2 (not Dim3), 3 hs = mi3 or A2, 4hs = ma3 (not Dim4),
    // 5 hs = P4 (not Aug3), 6 hs = Aug5 or Dim5, 7 hs = P5, 8 hs = mi6 (not Aug5), 
    // 9 hs = ma6 or dim7 (if doubleSharps or doubleFlats aren't required), 
    // 10 hs = mi7 or Aug6, 11 hs = ma7 (not Dim8)
    var intervalNoteName;

// ASCENDING INTERVALS
if(intervalFormula[1] > 0) {
    if ( (intervalFormula[1] == 1) || (intervalFormula[1] == 2) ) {
        intervalNoteName = alphanamesList[1]; // min or maj 2nd
    }
    else if ( (intervalFormula[1] == 3) ) {
        var num = randint(1,4);
        if ( num > 1)
            intervalNoteName = alphanamesList[2]; // mi3
        else
            intervalNoteName = alphanamesList[1]; // Aug2
    }
    else if ( (intervalFormula[1] == 4) ) {
        intervalNoteName = alphanamesList[2]; // ma3
    }
    else if ( (intervalFormula[1] == 5) ) {
        intervalNoteName = alphanamesList[3]; // P4
    }
    else if ( (intervalFormula[1] == 6) ) {
        var num = randint(1,2);
        if ( num == 1)
            intervalNoteName = alphanamesList[3]; // Aug4
        else
            intervalNoteName = alphanamesList[4]; // Dim5
    }
    else if ( (intervalFormula[1] == 7) ) {
        intervalNoteName = alphanamesList[4]; // P5
    }
    else if ( (intervalFormula[1] == 8) ) {
        intervalNoteName = alphanamesList[5]; // mi6
    }
    else if ( (intervalFormula[1] == 9) ) {
        var num = randint(1,4);
        if ( num > 1)
            intervalNoteName = alphanamesList[5]; // ma6
        else {
            if ( rootAndOctave.includes("C#") || rootAndOctave.includes("D#") ||
                    rootAndOctave.includes("F#") || rootAndOctave.includes("G#") || rootAndOctave.includes("A#") ) {
                intervalNoteName = alphanamesList[6]; // Dim7
            }
            else {
                intervalNoteName = alphanamesList[5]; // ma6
            }
        }
    }
    else if ( (intervalFormula[1] == 10) ) {
        var num = randint(1,4);
        if ( num > 1)
            intervalNoteName = alphanamesList[6]; // mi7
        else {
            if ( !rootAndOctave.includes("Db") && !rootAndOctave.includes("Eb") &&
                    !rootAndOctave.includes("Gb") && !rootAndOctave.includes("Ab") && !rootAndOctave.includes("Bb") ) {
                intervalNoteName = alphanamesList[5]; // Aug6
            }
            else {
                intervalNoteName = alphanamesList[6]; // mi7
            }
        }
    }
    else if ( (intervalFormula[1] == 11) ) {
        intervalNoteName = alphanamesList[6]; // ma7
    }
} else {
// DESCENDING INTERVAL
    if ( (intervalFormula[1] == -1) || (intervalFormula[1] == -2) ) {
        intervalNoteName = alphanamesList[alphanamesList.length-2]; // min or maj 2nd
    }
    else if ( (intervalFormula[1] == -3) ) {
        var num = randint(1,4);
        console.log('randint='+num);
        if ( num > 1)
            intervalNoteName = alphanamesList[alphanamesList.length-3]; // mi3
        else
            intervalNoteName = alphanamesList[alphanamesList.length-2]; // Aug2
    }
    else if ( (intervalFormula[1] == -4) ) {
        intervalNoteName = alphanamesList[alphanamesList.length-3]; // ma3
    }
    else if ( (intervalFormula[1] == -5) ) {
        intervalNoteName = alphanamesList[alphanamesList.length-4]; // P4
    }
    else if ( (intervalFormula[1] == -6) ) {
        var num = randint(1,2);
        if ( num == 1)
            intervalNoteName = alphanamesList[alphanamesList.length-4]; // Aug4
        else
            intervalNoteName = alphanamesList[alphanamesList.length-5]; // Dim5
    }
    else if ( (intervalFormula[1] == -7) ) {
        intervalNoteName = alphanamesList[alphanamesList.length-5]; // P5
    }
    else if ( (intervalFormula[1] == -8) ) {
        intervalNoteName = alphanamesList[alphanamesList.length-6]; // mi6
    }
    else if ( (intervalFormula[1] == -9) ) {
        var num = randint(1,4);
        if ( num > 1)
            intervalNoteName = alphanamesList[alphanamesList.length-6]; // ma6
        else {
            if ( rootAndOctave.includes("Bb") || rootAndOctave.includes("C") ||
                    rootAndOctave.includes("Eb") || rootAndOctave.includes("F") || rootAndOctave.includes("G") ) {
                intervalNoteName = alphanamesList[alphanamesList.length-7]; // Dim7
            }
            else {
                intervalNoteName = alphanamesList[alphanamesList.length-6]; // ma6
            }
        }
    }
    else if ( (intervalFormula[1] == -10) ) {
        var num = randint(1,4);
        if ( num > 1)
            intervalNoteName = alphanamesList[alphanamesList.length-7]; // mi7
        else {
            if ( !rootAndOctave.includes("B") && !rootAndOctave.includes("C#") &&
                    !rootAndOctave.includes("E") && !rootAndOctave.includes("F#") && !rootAndOctave.includes("G#") ) {
                intervalNoteName = alphanamesList[alphanamesList.length-6]; // Aug6
            }
            else {
                intervalNoteName = alphanamesList[alphanamesList.length-7]; // mi7
            }
        }
    }
    else if ( (intervalFormula[1] == -11) ) {
        intervalNoteName = alphanamesList[alphanamesList.length-7]; // ma7
    }
}
    console.log(intervalNoteName);
    // now get the correct name
    if ( MIDI_SHARP_NAMES[index].includes(intervalNoteName) )
        correctNameAndOctave = MIDI_SHARP_NAMES[index];
    else if (MIDI_FLAT_NAMES[index].includes(intervalNoteName) )
        correctNameAndOctave = MIDI_FLAT_NAMES[index];
    else if (MIDI_OTHER_NAMES[index].includes(intervalNoteName) )
        correctNameAndOctave = MIDI_OTHER_NAMES[index];
    
    console.log(correctNameAndOctave);
//    correctNameAndOctave = MIDI_SHARP_NAMES[index];
    interval.push(rootAndOctave);
    interval.push(correctNameAndOctave);
    
    return interval;
}

function determineIntervalQualityName(intervalNum, halfSteps) {
    var intervalQualityName = "";
    // intervalNum is 0 indexed: 
    // intervalNum = 1 = unison, intervalNum = 1 = 2nds, intervalNum = 2 = 3rds, etc. 
    if(intervalNum == 0) { // unison
        if(halfSteps == 0)
            intervalQualityName = "P";
        else if(halfSteps == -1)
            intervalQualityName = "dim";
        else if(halfSteps == 1)
            intervalQualityName = "A";   

    } else if(intervalNum == 1) { // 2nds
        if(halfSteps == 1)
            intervalQualityName = "mi";
        else if(halfSteps == 2)
            intervalQualityName = "ma";
        else if(halfSteps == 3)
            intervalQualityName = "A";

    } else if(intervalNum == 2) { // 3rds
        if(halfSteps == 2)
            intervalQualityName = "dim";
        else if(halfSteps == 3)
            intervalQualityName = "mi";
        else if(halfSteps == 4)
            intervalQualityName = "ma";
        else if(halfSteps == 5)
            intervalQualityName = "A";   

    } else if(intervalNum == 3) { // 4ths
        if(halfSteps == 4)
            intervalQualityName = "dim";
        else if(halfSteps == 5)
            intervalQualityName = "P";
        else if(halfSteps == 6)
            intervalQualityName = "A";

    } else if(intervalNum == 4) { // 5ths
        if(halfSteps == 6)
            intervalQualityName = "dim";
        else if(halfSteps == 7)
            intervalQualityName = "P";
        else if(halfSteps == 8)
            intervalQualityName = "A";   
    
    } else if(intervalNum == 5) { // 6ths
        if(halfSteps == 7)
            intervalQualityName = "dim";
        else if(halfSteps == 8)
            intervalQualityName = "mi";
        else if(halfSteps == 9)
            intervalQualityName = "ma";
        else if(halfSteps == 10)
            intervalQualityName = "A";   

    } else if(intervalNum == 6) { // 7ths
        if(halfSteps == 9)
            intervalQualityName = "dim";
        else if(halfSteps == 10)
            intervalQualityName = "mi";
        else if(halfSteps == 11)
            intervalQualityName = "ma";
        else if(halfSteps == 12)
            intervalQualityName = "A";   

    } else if(intervalNum == 7) { // octaves
        if(halfSteps == 12)
            intervalQualityName = "P";
        else if(halfSteps == 11)
            intervalQualityName = "dim";
        else if(halfSteps == 13)
            intervalQualityName = "A";   
    
    }
    return intervalQualityName;

}


function getEnharmonic(note) {
//    console.log("getEnharmonic()");
    if (note === undefined)
        return;
    var letterName = note.slice(0,-1);
    var octave = note.slice(-1);
    var enharmonicName = enharmonics[letterName] ? enharmonics[letterName] : letterName;
    if(letterName.includes("B") && enharmonicName.includes("C") )
       octave = Number(octave)+1;
    if(letterName.includes("C") && enharmonicName.includes("B") )
       octave = Number(octave)-1;
    var theNote  = enharmonicName + octave;

    if(debug) {
        console.log(note);
        console.log(letterName);
        console.log(octave);
        console.log(enharmonicName);
        console.log(theNote);
    }

    return theNote;
}

// getEnharmonic will return a (maybe) modified version of "note" that will be used as the name
// of the note when used with drawNote().  The clickable keyboard will register black keys with sharp names.
// when drawing keys with flats these names need to be changed to enharmonic flat names.
function getFlatEnharmonic(note) {
//    console.log("getFlatEnharmonic()");
    if (note === undefined)
        return;
    var letterName = note.slice(0,-1);
    var octave = note.slice(-1);
    var enharmonicName = flatEnharmonics[letterName] ? flatEnharmonics[letterName] : letterName;
    if(letterName.includes("B") && enharmonicName.includes("C") )
       octave = Number(octave)+1;
    if(letterName.includes("C") && enharmonicName.includes("B") )
       octave = Number(octave)-1;
    var theNote  = enharmonicName + octave;

    if(debug) {
        console.log(note);
        console.log(letterName);
        console.log(octave);
        console.log(enharmonicName);
        console.log(theNote);
    }

    return theNote;
}


var scaleDegree = function(scaleFormula, aNote) {
    var index;
    for(var i=0; i<scaleFormula.length; i++) {
        if(aNote == scaleFormula[i])
            index = i;
    }
    return index;
}

function patternizeScale(patternFormula, scaleFormula, scaleNames) {
    var pattern = [];

    // sanity check
    if(scaleFormula.length != scaleNames.length)
        return scaleNames;
    
    var noteNamesMap = new Map();
    for(var i=0; i<scaleFormula.length; i++) {
        noteNamesMap.set(scaleFormula[i], scaleNames[i]);
    }
//    console.log("noteNamesMap.get(2)="+noteNamesMap.get(2));
    // noteNamesMap is only one octave
    // keep track of any necessary changes in octave numbers
    // if pattern[i] > 12: maybe change octave number depending on 
    // letter name of scaleName[scaleName.length-1] (last element)
    // if pattern[i] < 0 maybe change octave, depending on same.
    var adjustOctave = 0;
    for(var i=0; i<patternFormula.length; i++) {
        if(patternFormula[i] > 12 || patternFormula[i] < 0) {
            if(patternFormula[i] > 12) {
                var adjustedPatternFormula = patternFormula[i] % 12;
                adjustOctave = 1;
            } else {
                var adjustedPatternFormula = patternFormula[i] + 12;
                adjustOctave = -1;
            }
            // adjust octave
//            console.log("adjustedPatternFormula="+adjustedPatternFormula+" adjustOctave="+adjustOctave);
            var noteName = noteNamesMap.get(adjustedPatternFormula);
            var name = noteName.substring(0 , noteName.length-1);
            var startingOctave = noteName.substring(noteName.length-1, noteName.length);
            var correctNameAndOctave = name.concat((Number(startingOctave)+adjustOctave).toString()); 
            pattern.push(correctNameAndOctave);
        } else {
//            console.log(noteNamesMap.get(patternFormula[i]));
            pattern.push(noteNamesMap.get(patternFormula[i]));
        }
    }
//    console.log(pattern);
    return pattern;
}

function spellPattern(scaleFormulaInput, rootAndOctave, pattern) {
    var scale = spellScale(scaleFormulaInput, rootAndOctave);
    var patternFormula;
    var scaleFormula = [];
    var myPattern = [];

    if(typeof scaleFormulaInput == 'string'){  // scaleFormulaInput is a string
        scaleFormula = scaleFormulaInput.split(",");
    }
    else if(typeof scaleFormulaInput == 'object'){ // scaleFormulaInput is an array
        scaleFormula = scaleFormulaInput;
    }

    var patternFunc = patternFunctions[pattern];
    patternFormula = patternMap(patternFunc, scaleFormula);
    
    // merge patternFormula and scaleFormula by creating an array of patternFormula.length
    // and use the value of scaleDegree[scaleFormula, patternFormula[i]) to determine the index
    // to decipher the lettername from scale (one octave scale returned from spellScale)
    // i.e. in a loop thru i < patternFormula.length:
    // index = scaleDegree[scaleFormula, patternFormula[i]]; // check for octave change
    // if (index > 12 || index < 0) // adjust octaves when needed
    // notename = scale[index]
    // append correct octave
    myPattern = patternizeScale(patternFormula, scaleFormula, scale);
    return myPattern;

}

/**
 * this function returns an array of noteNames suitable for Tone.js use
 * @public
 * @param {string | object} scaleFormulaInput (can be either a (comma separated) string or an array of integers)
 * @param {string} rootAndOctave
 * @returns {object} array of noteNames
 * @example
 * const myFormula = "0,2,4,5,7,9,11";
 * var myScale = spellScale(myFormula, "Ab4");
 * // myScale = ['Ab4',Bb4','C5','Db5','Eb5','F5','G5','Ab5']
 */
function spellScale(scaleFormulaInput, rootAndOctave) {  // scaleFormulaInput can be either a string or an array
    var correctNameAndOctave = "";
    var offset = 0;
    var scaleFormula = new Array();
    
    var prevLetter = "";
    if(typeof scaleFormulaInput == 'string'){  // scaleFormulaInput is a string
        scaleFormula = scaleFormulaInput.split(",");
//        alert("string version");
    }
    else if(typeof scaleFormulaInput == 'object'){ // scaleFormulaInput is an array
        scaleFormula = scaleFormulaInput;
//        alert("object version");
    }

    var root = rootAndOctave.substring(0 , rootAndOctave.length-1);
    var startingOctave = rootAndOctave.substring(rootAndOctave.length-1, rootAndOctave.length);
    var MIDI_root = noteNameToMIDI(rootAndOctave);
//    var octave = ''
//    printDebug("rootAndOctave="+ rootAndOctave + "  root=" + root + " octave=" + startingOctave , 3)
    root = fixRootName(scaleFormula, root);
    if( validateRoot(scaleFormula, root) == false)
        return;
    var i = 0;
//    var correctName = '';
    var scale = new Array()
//    octave = startingOctave
    var alphanamesList = makeAlphaList(root)
    // index will be used to lookup names
    var index;
    
    for (i=0; i<scaleFormula.length; i++) {
        
        index = MIDI_root + scaleFormula[i];
        
//        if(scaleFormula == MAJOR_SCALE || scaleFormula == NATURAL_MINOR_SCALE || scaleFormula == HARMONIC_MINOR_SCALE 
//                || scaleFormula == JAZZ_MEL_MINOR ) {  

        if(arraysEqual(scaleFormula, MAJOR_SCALE) || arraysEqual(scaleFormula, NATURAL_MINOR_SCALE) || 
            arraysEqual(scaleFormula, HARMONIC_MINOR_SCALE) || arraysEqual(scaleFormula, JAZZ_MEL_MINOR) ) { 

// with patternized scales, i will grow larger than alphanameList.length.  also i won't reflect the scale degree
// need a function that takes scaleFormulaInput and scaleFormulaInput[i] and returns a correct index for alphanamesList
// alpha_index = getScaleDegree(scaleFormula, scaleFormula[i])

            if ( MIDI_SHARP_NAMES[index].includes(alphanamesList[i]) )
                correctNameAndOctave = MIDI_SHARP_NAMES[index];
            else if (MIDI_FLAT_NAMES[index].includes(alphanamesList[i]) )
                correctNameAndOctave = MIDI_FLAT_NAMES[index];
            else if (MIDI_OTHER_NAMES[index].includes(alphanamesList[i]) )
                correctNameAndOctave = MIDI_OTHER_NAMES[index];

/*-------------------------------------
            // if this is whole tone scale, fix all doubleSharps and B#,E#,Cb,Fb to be regular names
            if(scaleFormula == WHOLE_TONE) {
                if( correctNameAndOctave.includes("x") || correctNameAndOctave.includes("bb") || 
                    correctNameAndOctave.includes("B#") || correctNameAndOctave.includes("E#") ||
                        correctNameAndOctave.includes("Cb") || correctNameAndOctave.includes("Fb") )
                    correctNameAndOctave = getEnharmonic[correctNameAndOctave];
            }
-------------------------------------*/
        }


//        else if (scaleFormula == WHOLE_TONE) {
        else if ( arraysEqual(scaleFormula, WHOLE_TONE) ) {
           // if previous letter was D# or A#, then skip a letter (so the "correctNameAndOctave" won't become E# or B#)          
            if( prevLetter.includes("D#") || prevLetter.includes("A#") || prevLetter == "B4" ) 
                offset += 1;

            if ( MIDI_SHARP_NAMES[index].includes(alphanamesList[i+offset]) )
                correctNameAndOctave = MIDI_SHARP_NAMES[index];
            else if (MIDI_FLAT_NAMES[index].includes(alphanamesList[i+offset]) )
                correctNameAndOctave = MIDI_FLAT_NAMES[index];
            else if (MIDI_OTHER_NAMES[index].includes(alphanamesList[i+offset]) )
                correctNameAndOctave = MIDI_OTHER_NAMES[index];

            prevLetter = correctNameAndOctave;                
        }

//        else if (scaleFormula == MINOR_PENTATONIC) {
        else if ( arraysEqual(scaleFormula, MINOR_PENTATONIC) ) {
           // skip a letter from i=0 to i=1           
           // skip a letter from i=3 to i=4
            if(i == 1 || i == 4) 
                offset += 1;
                
//            index = MIDI_root + scaleFormula[i];
            if ( MIDI_SHARP_NAMES[index].includes(alphanamesList[i+offset]) )
                correctNameAndOctave = MIDI_SHARP_NAMES[index];
            else if (MIDI_FLAT_NAMES[index].includes(alphanamesList[i+offset]) )
                correctNameAndOctave = MIDI_FLAT_NAMES[index];
            else if (MIDI_OTHER_NAMES[index].includes(alphanamesList[i+offset]) )
                correctNameAndOctave = MIDI_OTHER_NAMES[index];
                
        }
//        else if(scaleFormula == MAJOR_PENTATONIC) {
        else if( arraysEqual(scaleFormula, MAJOR_PENTATONIC) ) {
           // skip a letter from i=2 to i=3           
           // skip a letter from i=4 to i=5
            if(i == 3 || i == 5) 
                offset += 1;

//            index = MIDI_root + scaleFormula[i];
            if ( MIDI_SHARP_NAMES[index].includes(alphanamesList[i+offset]) )
                correctNameAndOctave = MIDI_SHARP_NAMES[index];
            else if (MIDI_FLAT_NAMES[index].includes(alphanamesList[i+offset]) )
                correctNameAndOctave = MIDI_FLAT_NAMES[index];
            else if (MIDI_OTHER_NAMES[index].includes(alphanamesList[i+offset]) )
                correctNameAndOctave = MIDI_OTHER_NAMES[index];
                
        }
//        else if (scaleFormula == MINOR_BLUES) {
        else if ( arraysEqual(scaleFormula, MINOR_BLUES) ) {
           // skip a letter from i=0 to i=1
           // allow chromatic from i=2 to i=3 ( #4 not b5)
           // skip a letter from i=4 to i=5
            if(i == 1 || i == 5) 
                offset = offset + 1;
            else if(i == 3)
                offset = offset - 1;

//            index = MIDI_root + scaleFormula[i];
            if ( MIDI_SHARP_NAMES[index].includes(alphanamesList[i+offset]) )
                correctNameAndOctave = MIDI_SHARP_NAMES[index];
            else if (MIDI_FLAT_NAMES[index].includes(alphanamesList[i+offset]) )
                correctNameAndOctave = MIDI_FLAT_NAMES[index];
            else if (MIDI_OTHER_NAMES[index].includes(alphanamesList[i+offset]) )
                correctNameAndOctave = MIDI_OTHER_NAMES[index];
                
        }
//        else if(scaleFormula == MAJOR_BLUES) {
        else if( arraysEqual(scaleFormula, MAJOR_BLUES) ) {
           // skip a letter from i=3 to i=4
           // allow chromatic from i=1 to i=2 (#2 not b3)
           // skip a letter from i=5 to i=6
            if(i == 4 || i == 6)  
                offset = offset + 1;
            else if(i == 2)
                offset = offset - 1;
                
//            index = MIDI_root + scaleFormula[i];
            if ( MIDI_SHARP_NAMES[index].includes(alphanamesList[i+offset]) )
                correctNameAndOctave = MIDI_SHARP_NAMES[index];
            else if (MIDI_FLAT_NAMES[index].includes(alphanamesList[i+offset]) )
                correctNameAndOctave = MIDI_FLAT_NAMES[index];
            else if (MIDI_OTHER_NAMES[index].includes(alphanamesList[i+offset]) )
                correctNameAndOctave = MIDI_OTHER_NAMES[index];              
        }

        scale.push(correctNameAndOctave);
    }

    correctNameAndOctave = root.concat((Number(startingOctave)+1).toString()); 
    scale.push(correctNameAndOctave);    
    return scale;
}


function arraysEqual(a, b) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length != b.length) return false;

    // If you don't care about the order of the elements inside
    // the array, you should sort both arrays here.

    for (var i = 0; i < a.length; ++i) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}



/**
 * this function returns an array of noteNames suitable for Tone.js use
 * @public
 * @param {string | object} scaleFormulaInput (can be either a (comma separated) string or an array of integers)
 * @param {string} rootAndOctave
 * @returns {object} array of noteNames
 * @example
 * const myFormula = "0,2,4,5,7,9,11";
 * var myScale = spellScale(myFormula, "G4");
 * // myScale = ['G4','A4',B4','C5','D5','E5','F#5','G5']
 */
function spellScale2(scaleFormulaInput, rootAndOctave) {  // scaleFormulaInput can be either a string or an array
    var correctNameAndOctave = "";
    var offset = 0;
    var scaleFormulaStringArray = [];
    var scaleFormula = [];
    if(typeof scaleFormulaInput == 'string'){  // scaleFormulaInput is a string
//        scaleFormula = scaleFormulaInput.split(",");
        scaleFormulaStringArray = scaleFormulaInput.split(",");
        scaleFormulaStringArray.forEach( function(element) {
            scaleFormula.push(Number(element));
        });
//        console.log("spellScale2() string version");
    }
    else if(typeof scaleFormulaInput == 'object'){ // scaleFormulaInput is an array
        scaleFormula = scaleFormulaInput;
//        console.log("spellScale2() object version");
    }

    var root = rootAndOctave.substring(0 , rootAndOctave.length-1)
    var startingOctave = rootAndOctave.substring(rootAndOctave.length-1, rootAndOctave.length)
    var octave = ''
//    printDebug("rootAndOctave="+ rootAndOctave + "  root=" + root + " octave=" + startingOctave , 3);
    root = fixRootName(scaleFormula, root);
    if( validateRoot(scaleFormula, root) == false)
        return;
    var i = 0;
    var correctName = '';
    // make modified version of the name lists, start at the root and up one octave
    var sharpnamesList = makeNameList(SHARP_NAMES, root)
    var flatnamesList = makeNameList(FLAT_NAMES, root)
    var othernamesList = makeNameList(OTHER_NAMES, root)
    var alphanamesList = makeAlphaList(root)
//    printDebug (root + "\n" + sharpnamesList + "\n" + flatnamesList + "\n" + othernamesList + "\n" + alphanamesList, 2)
//    printDebug(scaleFormula, 2)
//    printDebug(Number(scaleFormula[3]),2)
    var scale = new Array()
    octave = startingOctave
    for (i=0; i<scaleFormula.length; i++) {
//        console.log("scaleFormula="+scaleFormula+ " MAJOR_SCALE="+MAJOR_SCALE);
//        console.log("scaleFormula["+i+"]="+scaleFormula[i]);
//        console.log("MAJOR_SCALE["+i+"]="+MAJOR_SCALE[i]);
//        console.log("scaleFormula["+i+"] == MAJOR_SCALE["+i+"]");
//        console.log(scaleFormula[i] == MAJOR_SCALE[i]);
//        console.log(arraysEqual(scaleFormula, MAJOR_SCALE));
        if(arraysEqual(scaleFormula, MAJOR_SCALE) || arraysEqual(scaleFormula, NATURAL_MINOR_SCALE) || 
            arraysEqual(scaleFormula, HARMONIC_MINOR_SCALE) || arraysEqual(scaleFormula, JAZZ_MEL_MINOR) || 
                arraysEqual(scaleFormula, WHOLE_TONE) ) 
        {
            if ( sharpnamesList[Number(scaleFormula[i])].includes(alphanamesList[i]) )
                correctName = sharpnamesList[Number(scaleFormula[i])];
            else if (flatnamesList[Number(scaleFormula[i])].includes(alphanamesList[i]) )
                correctName = flatnamesList[Number(scaleFormula[i])];
            else if (othernamesList[Number(scaleFormula[i])].includes(alphanamesList[i]) )
                correctName = othernamesList[Number(scaleFormula[i])];
                
            var msg = "sharpnamesList[Number(scaleFormula[i])]="+sharpnamesList[Number(scaleFormula[i])]+"\nalphanamesList[i]="+alphanamesList[i];
//            console.log(msg);
            // if this is whole tone scale, fix all doubleSharps and B#,E#,Cb,Fb to be regular names
            if(scaleFormula == WHOLE_TONE) {
                if( correctName.includes("x") || correctName.includes("bb") || 
                    correctName.includes("B#") || correctName.includes("E#") ||
                        correctName.includes("Cb") || correctName.includes("Fb") )
                    correctName = enharmonics[correctName];
            }

        }
        else if ( arraysEqual(scaleFormula, MINOR_PENTATONIC) ) {
           // skip a letter from i=0 to i=1           
           // skip a letter from i=3 to i=4
            if(i==1 || i==4) 
                offset += 1;
//            console.log(i+offset);
            if ( sharpnamesList[Number(scaleFormula[i])].includes(alphanamesList[i+offset]) )
                correctName = sharpnamesList[Number(scaleFormula[i])];
            else if (flatnamesList[Number(scaleFormula[i])].includes(alphanamesList[i+offset]) )
                correctName = flatnamesList[Number(scaleFormula[i])];
            else if (othernamesList[Number(scaleFormula[i])].includes(alphanamesList[i+offset]) )
                correctName = othernamesList[Number(scaleFormula[i])];
        
        }
        else if( arraysEqual(scaleFormula, MAJOR_PENTATONIC) ) {
           // skip a letter from i=2 to i=3           
           // skip a letter from i=4 to i=5
            if(i==3 || i==5) 
                offset += 1;
//            console.log(i+offset);
            if ( sharpnamesList[Number(scaleFormula[i])].includes(alphanamesList[i+offset]) )
                correctName = sharpnamesList[Number(scaleFormula[i])];
            else if (flatnamesList[Number(scaleFormula[i])].includes(alphanamesList[i+offset]) )
                correctName = flatnamesList[Number(scaleFormula[i])];
            else if (othernamesList[Number(scaleFormula[i])].includes(alphanamesList[i+offset]) )
                correctName = othernamesList[Number(scaleFormula[i])];
        
        }
        else if ( arraysEqual(scaleFormula, MINOR_BLUES) ) {
           // skip a letter from i=0 to i=1
           // allow chromatic from i=2 to i=3 ( #4 not b5)
           // skip a letter from i=4 to i=5
            if(i==1 || i==5) 
                offset = offset + 1;
            else if(i==3)
                offset = offset - 1;
                
//            console.log(i+offset);
            if ( sharpnamesList[Number(scaleFormula[i])].includes(alphanamesList[i+offset]) )
                correctName = sharpnamesList[Number(scaleFormula[i])];
            else if (flatnamesList[Number(scaleFormula[i])].includes(alphanamesList[i+offset]) )
                correctName = flatnamesList[Number(scaleFormula[i])];
            else if (othernamesList[Number(scaleFormula[i])].includes(alphanamesList[i+offset]) )
                correctName = othernamesList[Number(scaleFormula[i])];       
        }
        else if( arraysEqual(scaleFormula, MAJOR_BLUES) ) {
           // skip a letter from i=3 to i=4
           // allow chromatic from i=1 to i=2 (#2 not b3)
           // skip a letter from i=5 to i=6
            if(i==4 || i==6) 
                offset = offset + 1;
            else if(i==2)
                offset = offset - 1;
                
//            console.log(i+offset);
            if ( sharpnamesList[Number(scaleFormula[i])].includes(alphanamesList[i+offset]) )
                correctName = sharpnamesList[Number(scaleFormula[i])];
            else if (flatnamesList[Number(scaleFormula[i])].includes(alphanamesList[i+offset]) )
                correctName = flatnamesList[Number(scaleFormula[i])];
            else if (othernamesList[Number(scaleFormula[i])].includes(alphanamesList[i+offset]) )
                correctName = othernamesList[Number(scaleFormula[i])];
        
        }
/*------------------------------------------
-----------------------------*/

        // check to see if we have the (letter C AND i > 0) OR (letter D AND root is B AND i is less than 2)

//        if( (correctName.includes('C') && i>0) || (correctName.includes('D') && rootAndOctave.includes("B") && i<2) )
//            octave = (Number(startingOctave)+1).toString();

        octave = (Number(startingOctave) + getOctaveOffset(root, i+1) ).toString();
//        console.log("correctName="+correctName);
        correctNameAndOctave = correctName.concat(octave);
        scale.push(correctNameAndOctave);
    }
    correctNameAndOctave = root.concat((Number(startingOctave)+1).toString()) 
    scale.push(correctNameAndOctave);    
    return scale;
}

//==============================================================

//-------------------------------------------------------------
// patternMap(f,a) has 2 parameters: 'f' (function) and 'a' (array)
// f can be a musical pattern generator i.e. broken thirds or arpeggiation
// that can read the array 'a' and return a new array with the pattern 
// applied to the array (i.e. 'a' = scale or chord)
//
// the patterns assume that the array is a scale or chord
// their names are derived from what happens when the array is 
// a common scale i.e. major scale.
//
// Other array structures will yield different results
// 
// the following pattern functions are defined:
// up = the array is played beginning to end.
// down - array is played in reverse
// upDown - up and down (no repeat of highest note)
// downUp - from octave, down and up (no repeat of lowest note)
// upPlusOneDown - up to the ninth then down
// downPlusOneUp - from octave, down to the note below the low root the back up
// alternateUp - broken thirds up
// alternateDown - broken thirds down
// alternateUpDown - broken third up and down
// alternateDownUp - from octave, broken thirds down and up.
//-------------------------------------------------------------
function patternMap(f,a) {
  var result = [],  i; // Create a new Array
  for (i = 0; i < a.length; i++)
//    result = result.concat(down(a[i],i,a));
    result = result.concat(f(a[i],i,a));
  return result;
}

var up = function(x,i,a) {
    return x;
};

var down = function(x,i,a) {
    return a[(a.length-1)-i];
};

var upDown = function(x,i,a) {
    var downScale = patternMap(down,a);
    if(i == a.length-1)
        return [x].concat(downScale.slice(1));
    else
        return x;
};

var downUp = function(x,i,a) {
    var downScale = patternMap(down,a)
    if(i == a.length-1)
        return [downScale[i]].concat(a.slice(1));
    else 
        return downScale[i];
};

var upPlusOneDown = function(x,i,a) {
    if(i == a.length-1) {
        var plusOne = [x].concat(a[1]+a[a.length-1]);
        var myArray = plusOne.concat(patternMap(down,a));
        return myArray;
    }
    else
        return x;
};

var downPlusOneUp = function(x,i,a) {
    var downScale = patternMap(down,a);
    if(i == downScale.length-1) {
        var plusOne = [downScale[i]].concat(downScale[1]-downScale[0]);
        var myArray = plusOne.concat(a);
        return myArray;
    }
    else
        return downScale[i];
};

var alternateUp = function(x, i, a) {
    var third;
    // calc the broken thirds
    if(i <= a.length-3) {
        third = a[i+2];
    } // on the second to last note add a note above the original array
    else if(i == a.length-2) {
        third = a[1] + a[a.length-1];
    } // on the last note just return the single note without additional third.
    else if(i == a.length-1) {
      return [x];
    }
    return [x,third];
}; 

var alternateDown = function(x, i, a) {
    var downScale = patternMap(down, a);
    var third;
    // calc the broken thirds
    if(i <= downScale.length-3) {
        third = downScale[i+2];
    } // on the second to last note add a note above the original array
    else if(i == downScale.length-2) {
        third = downScale[1] - downScale[0];
    } // on the last note just return the single note without additional third.
    else if(i == downScale.length-1) {
      return [downScale[i]];
    }
    return [downScale[i],third];
}; 

var alternateUpDown = function(x,i,a) {
    var third;
    var down = patternMap(alternateDown, a);
    if(i == a.length-1) {
        return [x].concat(down.slice(1));    
    } else {
		// calc the broken thirds
		if(i <= a.length-3) {
			third = a[i+2];
		} // on the second to last note add a note above the original array
		else if(i == a.length-2) {
			third = a[1] + a[a.length-1];
		} 
		return [x,third];
    }
};

var alternateDownUp = function(x,i,a) {
    var third;
    var downScale = patternMap(down, a);
    var up = patternMap(alternateUp, a);
    if(i == a.length-1) {
        return [downScale[i]].concat(up.slice(1));
    } else {
		if(i <= downScale.length-3) {
			third = downScale[i+2];
		} // on the second to last note add a note above the original array
		else if(i == downScale.length-2) {
			third = downScale[1] - downScale[0];
		}
		return [downScale[i],third];
    }
};

var patternFunctions = { 
    "up": up,
    "down": down,
    "upDown": upDown,
    "downUp": downUp,
    "upPlusOneDown": upPlusOneDown,
    "downPlusOneUp": downPlusOneUp,
    "alternateUp": alternateUp,
    "alternateDown": alternateDown,
    "alternateUpDown": alternateUpDown,
    "alternateDownUp": alternateDownUp
};



//----------------- end pattern functions -------------------------    

//==============================================================*/


function test_spellScale() {
    var scale1root = 'Cx4';
    var scale2root = 'Db4';
    var scale3root = 'G4';
    var scale4root = 'A#4';
    var scale5root = 'D#4';
    var scale6root = 'Eb4';
    var modeOfScale6 = 3;

    var majorScale = [0,2,4,5,7,9,11];
    var natminorScale = [0,2,3,5,7,8,10];
    var harminorScale = [0,2,3,5,7,8,11];
    var melminorScale = [0,2,3,5,7,9,11];
    var scale1 = spellScale(majorScale, scale1root);  // this should fail (Cx is bad name for any scale root)
    var scale2 = spellScale(natminorScale, scale2root);  // this should fail (Db is bad name for minor key root)
    var scale3 = spellScale(harminorScale, scale3root);  // G harmonic minor is spelled G A Bb C D Eb F# G
    var scale4 = spellScale(melminorScale, scale4root);  // A# melodic minor is spelled A# B# C# D# E# Fx Gx A#
    var scale5 = spellScale(harminorScale, scale5root);  // D# harmonic minor is spelled D# E# F# G# A# B Cx D#
    var scale6 = spellMode(harminorScale, scale6root, modeOfScale6);  // 3rd mode of Eb harmonic minor is spelled Gb Ab Bb Cb D Eb F Gb
    
    var msg = 'root=' + scale1root + ' scale1=' + scale1 +
          '\nroot=' + scale2root + ' scale2=' + scale2 +
          '\nroot=' + scale3root + ' scale3=' + scale3 +
          '\nroot=' + scale4root + ' scale4=' + scale4 +
          '\nroot=' + scale5root + ' scale5=' + scale5 +
          '\nroot=' + scale6root + ' mode=' + modeOfScale6.toString() + ' scale6=' + scale6;

    if (scale1 == null) // this should not have created a scale
        msg += '\nscale1 passes the test';
    else
        msg += '\nscale1 fails the test';


    if (scale2 == null) // this should not have created a scale
        msg += '\nscale2 passes the test';
    else
        msg += '\nscale2 fails the test';

    if (scale3 == 'G4,A4,Bb4,C5,D5,Eb5,F#5,G5')
        msg += '\nscale3 passes the test';
    else
        msg += '\nscale3 fails the test';

    if (scale4 == 'A#4,B#4,C#5,D#5,E#5,Fx5,Gx5,A#5')
        msg += '\nscale4 passes the test';
    else
        msg += '\nscale4 fails the test';

    if (scale5 == 'D#4,E#4,F#4,G#4,A#4,B4,Cx5,D#5')
        msg += '\nscale5 passes the test';
    else
        msg += '\nscale5 fails the test';

    if (scale6 == 'Gb4,Ab4,Bb4,Cb5,D5,Eb5,F5,Gb5')
        msg += '\nscale6 passes the test';
    else
        msg += '\nscale6 fails the test';
    
    printDebug(msg, 3);
}

function main() {
    test_spellScale()    
}    
    
    
//if (__name__ == '__main__')
// main();