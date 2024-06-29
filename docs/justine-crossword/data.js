
const crosswordGrid = [
    ["", "D", "A", "D", "", "B", "L", "O", "B", "", "A", "T", "O", "M", ""],
    ["C", "O", "T", "E", "", "R", "O", "P", "E", "", "N", "A", "V", "A", "L"],
    ["L", "I", "O", "N", "", "I", "O", "T", "A", "", "G", "U", "A", "N", "O"],
    ["A", "L", "L", "", "D", "O", "T", "", "N", "I", "L", "", "L", "A", "W"],
    ["N", "Y", "L", "O", "N", "", "", "", "", "R", "E", "D", "", "", ""],
    ["", "", "", "R", "A", "M", "", "B", "E", "E", "", "O", "A", "T", "H"],
    ["R", "A", "T", "E", "", "A", "T", "O", "P", "", "", "G", "I", "R", "O"],
    ["U", "F", "O", "", "", "P", "A", "R", "I", "S", "", "", "R", "E", "M"],
    ["D", "R", "A", "T", "", "", "C", "O", "C", "O", "", "D", "Y", "K", "E"],
    ["D", "O", "D", "O", "", "D", "O", "N", "", "W", "O", "O", "", "", ""],
    ["", "", "", "G", "N", "U", "", "", "", "", "L", "E", "G", "A", "L"],
    ["L", "A", "G", "", "I", "O", "N", "", "B", "A", "D", "", "A", "N", "I"],
    ["A", "L", "O", "N", "E", "", "O", "P", "E", "N", "", "R", "I", "E", "L"],
    ["D", "I", "R", "A", "C", "", "W", "E", "A", "N", "", "A", "L", "L", "Y"],
    ["", "T", "Y", "P", "E", "", "S", "A", "M", "E", "", "D", "Y", "E", ""],
];

const wordStarts = [{
        row: 0,
        col: 1,
        number: 1
    },
    {
        row: 0,
        col: 2,
        number: 2
    },
    {
        row: 0,
        col: 3,
        number: 3
    },
    {
        row: 0,
        col: 5,
        number: 4
    },
    {
        row: 0,
        col: 6,
        number: 5
    },
    {
        row: 0,
        col: 7,
        number: 6
    },
    {
        row: 0,
        col: 8,
        number: 7
    },
    {
        row: 0,
        col: 10,
        number: 8
    },
    {
        row: 0,
        col: 11,
        number: 9
    },
    {
        row: 0,
        col: 12,
        number: 10
    },
    {
        row: 0,
        col: 13,
        number: 11
    },
    {
        row: 1,
        col: 0,
        number: 12
    },
    {
        row: 1,
        col: 5,
        number: 13
    },
    {
        row: 1,
        col: 10,
        number: 14
    },
    {
        row: 1,
        col: 14,
        number: 15
    },
    {
        row: 2,
        col: 0,
        number: 16
    },
    {
        row: 2,
        col: 5,
        number: 17
    },
    {
        row: 2,
        col: 10,
        number: 18
    },
    {
        row: 3,
        col: 0,
        number: 19
    },
    {
        row: 3,
        col: 4,
        number: 20
    },
    {
        row: 3,
        col: 8,
        number: 21
    },
    {
        row: 3,
        col: 9,
        number: 22
    },
    {
        row: 3,
        col: 12,
        number: 23
    },
    {
        row: 4,
        col: 0,
        number: 24
    },
    {
        row: 4,
        col: 3,
        number: 25
    },
    {
        row: 4,
        col: 9,
        number: 26
    },
    {
        row: 4,
        col: 11,
        number: 27
    },
    {
        row: 5,
        col: 3,
        number: 28
    },
    {
        row: 5,
        col: 5,
        number: 29
    },
    {
        row: 5,
        col: 7,
        number:  30
    },
    {
        row: 5,
        col: 8,
        number: 31
    },
    {
        row: 5,
        col: 11,
        number: 32
    },
    {
        row: 5,
        col: 12,
        number: 33
    },
    {
        row: 5,
        col: 13,
        number: 34
    },
    {
        row: 5,
        col: 14,
        number: 35
    },
    {
        row: 6,
        col: 0,
        number: 36
    },
    {
        row: 6,
        col: 1,
        number: 37
    },
    {
        row: 6,
        col: 2,
        number: 38
    },
    {
        row: 6,
        col: 5,
        number: 39
    },
    {
        row: 6,
        col: 6,
        number: 40
    },
    {
        row: 6,
        col: 11,
        number: 41
    },
    {
        row: 7,
        col: 0,
        number: 42
    },
    {
        row: 7,
        col: 5,
        number: 43
    },
    {
        row: 7,
        col: 9,
        number: 44
    },
    {
        row: 7,
        col: 12,
        number: 45
    },
    {
        row: 8,
        col: 0,
        number: 46
    },
    {
        row: 8,
        col: 3,
        number: 47
    },
    {
        row: 8,
        col: 6,
        number: 48
    },
    {
        row: 8,
        col: 11,
        number: 49
    },
    {
        row: 9,
        col: 0,
        number: 50
    },
    {
        row: 9,
        col: 5,
        number: 51
    },
    {
        row: 9,
        col: 9,
        number: 52
    },
    {
        row: 9,
        col: 10,
        number: 53
    },
    {
        row: 10,
        col: 3,
        number: 54
    },
    {
        row: 10,
        col: 4,
        number: 55
    },
    {
        row: 10,
        col: 10,
        number: 56
    },
    {
        row: 10,
        col: 12,
        number: 57
    },
    {
        row: 10,
        col: 13,
        number: 58
    },
    {
        row: 10,
        col: 14,
        number: 59
    },
    {
        row: 11,
        col: 0,
        number: 60
    },
    {
        row: 11,
        col: 1,
        number: 61
    },
    {
        row: 11,
        col: 2,
        number: 62
    },
    {
        row: 11,
        col: 4,
        number: 63
    },
    {
        row: 11,
        col: 6,
        number: 64
    },
    {
        row: 11,
        col: 8,
        number: 65
    },
    {
        row: 11,
        col: 9,
        number: 66
    },
    {
        row: 11,
        col: 12,
        number: 67
    },
    {
        row: 12,
        col: 0,
        number: 68
    },
    {
        row: 12,
        col: 3,
        number: 69
    },
    {
        row: 12,
        col: 6,
        number: 70
    },
    {
        row: 12,
        col: 7,
        number: 71
    },
    {
        row: 12,
        col: 11,
        number: 72
    },
    {
        row: 13,
        col: 0,
        number: 73
    },
    {
        row: 13,
        col: 6,
        number: 74
    },
    {
        row: 13,
        col: 11,
        number: 75
    },
    {
        row: 14,
        col: 1,
        number: 76
    },
    {
        row: 14,
        col: 6,
        number: 77
    },
    {
        row: 14,
        col: 11,
        number: 78
    },
];

var answers = [
    //across
    {
        "index": 0,
        "number": "1",
        "direction": "across",
        "word": "DAD",
        "cells": ["0-1", "0-2", "0-3", ],
        'clue': "Big Ed's relation to you"
    },
    {
        "index": 1,
        "number": "4",
        "direction": "across",
        "word": "BLOB",
        "cells": ["0-5", "0-6", "0-7", "0-8"],
        'clue': "Amorphous mass"
    },
    {
        "index": 2,
        "number": "8",
        "direction": "across",
        "word": "ATOM",
        "cells": ["0-10", "0-11", "0-12", "0-13"],
        'clue': "Tiniest bit of matter"
    },
    {
        "index": 3,
        "number": "12",
        "direction": "across",
        "word": "COTE",
        "cells": ["1-0", "1-1", "1-2", "1-3"],
        'clue': "Shelter for Skye's friends"
    },
    {
        "index": 4,
        "number": "13",
        "direction": "across",
        "word": "ROPE",
        "cells": ["1-5", "1-6", "1-7", "1-8"],
        'clue': "Ties you up in knots"
    },
    {
        "index": 5,
        "number": "14",
        "direction": "across",
        "word": "NAVAL",
        "cells": ["1-10", "1-11", "1-12", "1-13", "1-14"],
        'clue': "Base Sam worked on as an apprentice"
    },
    {
        "index": 6,
        "number": "16",
        "direction": "across",
        "word": "LION",
        "cells": ["2-0", "2-1", "2-2", "2-3"],
        'clue': "Feline Hamlet"
    },
    {
        "index": 7,
        "number": "17",
        "direction": "across",
        "word": "IOTA",
        "cells": ["2-5", "2-6", "2-7", "2-8"],
        'clue': "Tiny amount"
    },
    {
        "index": 8,
        "number": "18",
        "direction": "across",
        "word": "GUANO",
        "cells": ["2-10", "2-11", "2-12", "2-13", "2-14"],
        'clue': "Bat fertilizer"
    },
    {
        "index": 9,
        "number": "19",
        "direction": "across",
        "word": "ALL",
        "cells": ["3-0", "3-1", "3-2"],
        'clue': "How much of my heart I give to you"
    },
    {
        "index": 10,
        "number": "20",
        "direction": "across",
        "word": "DOT",
        "cells": ["3-4", "3-5", "3-6"],
        'clue': "You do this to i's"
    },
    {
        "index": 11,
        "number": "21",
        "direction": "across",
        "word": "NIL",
        "cells": ["3-8", "3-9", "3-10"],
        'clue': "Games of Everdell you have won"
    },
    {
        "index": 12,
        "number": "23",
        "direction": "across",
        "word": "LAW",
        "cells": ["3-12", "3-13", "3-14"],
        'clue': "Your absolute favourite thing to study"
    },
    {
        "index": 13,
        "number": "24",
        "direction": "across",
        "word": "NYLON",
        "cells": ["4-0", "4-1", "4-2", "4-3", "4-4"],
        'clue': "Leggy material"
    },
    {
        "index": 14,
        "number": "26",
        "direction": "across",
        "word": "RED",
        "cells": ["4-9", "4-10", "4-11"],
        'clue': "Best lipstick colour on you"
    },
    {
        "index": 15,
        "number": "28",
        "direction": "across",
        "word": "RAM",
        "cells": ["5-3", "5-4", "5-5"],
        'clue': "Horny beast"
    },
    {
        "index": 16,
        "number": "30",
        "direction": "across",
        "word": "BEE",
        "cells": ["5-7", "5-8", "5-9"],
        'clue': "Second best hive insect"
    },
    {
        "index": 17,
        "number": "32",
        "direction": "across",
        "word": "OATH",
        "cells": ["5-11", "5-12", "5-13", "5-14"],
        'clue': "Sworn declaration"
    },
    {
        "index": 18,
        "number": "36",
        "direction": "across",
        "word": "RATE",
        "cells": ["6-0", "6-1", "6-2", "6-3"],
        'clue': "I put you at 10/10"
    },
    {
        "index": 19,
        "number": "39",
        "direction": "across",
        "word": "ATOP",
        "cells": ["6-5", "6-6", "6-7", "6-8"],
        'clue': "Where I want you in relation to me"
    },
    {
        "index": 20,
        "number": "41",
        "direction": "across",
        "word": "GIRO",
        "cells": ["6-11", "6-12", "6-13", "6-14"],
        'clue': "Circular motion around a central point"
    },
    {
        "index": 21,
        "number": "42",
        "direction": "across",
        "word": "UFO",
        "cells": ["7-0", "7-1", "7-2"],
        'clue': "Sky saucer"
    },
    {
        "index": 22,
        "number": "43",
        "direction": "across",
        "word": "PARIS",
        "cells": ["7-5", "7-6", "7-7", "7-8", "7-9"],
        'clue': "Our spontaneous vacation destination"
    },
    {
        "index": 23,
        "number": "45",
        "direction": "across",
        "word": "REM",
        "cells": ["7-12", "7-13", "7-14"],
        'clue': "Your favourite type of sleep"
    },
    {
        "index": 24,
        "number": "46",
        "direction": "across",
        "word": "DRAT",
        "cells": ["8-0", "8-1", "8-2", "8-3"],
        'clue': "Mild curse"
    },
    {
        "index": 25,
        "number": "48",
        "direction": "across",
        "word": "COCO",
        "cells": ["8-6", "8-7", "8-8", "8-9"],
        'clue': "Bravest dog"
    },
    {
        "index": 26,
        "number": "49",
        "direction": "across",
        "word": "DYKE",
        "cells": ["8-11", "8-12", "8-13", "8-14"],
        'clue': "Prevents flooding"
    },
    {
        "index": 27,
        "number": "50",
        "direction": "across",
        "word": "DODO",
        "cells": ["9-0", "9-1", "9-2", "9-3"],
        'clue': "Extinct bird, part of my old musical nom de plume"
    },
    {
        "index": 28,
        "number": "51",
        "direction": "across",
        "word": "DON",
        "cells": ["9-5", "9-6", "9-7"],
        'clue': "The Godfather"
    },
    {
        "index": 29,
        "number": "52",
        "direction": "across",
        "word": "WOO",
        "cells": ["9-9", "9-10", "9-11"],
        'clue': "The purpose of this crossword"
    },
    {
        "index": 30,
        "number": "54",
        "direction": "across",
        "word": "GNU",
        "cells": ["10-3", "10-4", "10-5"],
        'clue': "A large African antelope"
    },
    {
        "index": 31,
        "number": "56",
        "direction": "across",
        "word": "LEGAL",
        "cells": ["10-10", "10-11", "10-12", "10-13", "10-14"],
        'clue': "Nickname, with <em>7 Down</em>"
    },
    {
        "index": 32,
        "number": "60",
        "direction": "across",
        "word": "LAG",
        "cells": ["11-0", "11-1", "11-2"],
        'clue': "Delay in time"
    },
    {
        "index": 33,
        "number": "63",
        "direction": "across",
        "word": "ION",
        "cells": ["11-4", "11-5", "11-6"],
        'clue': "A charged atom"
    },
    {
        "index": 34,
        "number": "65",
        "direction": "across",
        "word": "BAD",
        "cells": ["11-8", "11-9", "11-10"],
        'clue': "Negative (but in a hot way)"
    },
    {
        "index": 35,
        "number": "67",
        "direction": "across",
        "word": "ANI",
        "cells": ["11-12", "11-13", "11-14"],
        'clue': "Member of the cuckoo family"
    },
    {
        "index": 36,
        "number": "68",
        "direction": "across",
        "word": "ALONE",
        "cells": ["12-0", "12-1", "12-2", "12-3", "12-4"],
        'clue': "How I feel without you"
    },
    {
        "index": 37,
        "number": "70",
        "direction": "across",
        "word": "OPEN",
        "cells": ["12-6", "12-7", "12-8", "12-9"],
        'clue': "Our communication style (don't laugh)"
    },
    {
        "index": 38,
        "number": "72",
        "direction": "across",
        "word": "RIEL",
        "cells": ["12-11", "12-12", "12-13", "12-14"],
        'clue': "Cambodian money"
    },
    {
        "index": 39,
        "number": "73",
        "direction": "across",
        "word": "DIRAC",
        "cells": ["13-0", "13-1", "13-2", "13-3", "13-4"],
        'clue': "Quantum physicist Paul ___"
    },
    {
        "index": 40,
        "number": "74",
        "direction": "across",
        "word": "WEAN",
        "cells": ["13-6", "13-7", "13-8", "13-9"],
        'clue': "Separate gradually"
    },
    {
        "index": 41,
        "number": "75",
        "direction": "across",
        "word": "ALLY",
        "cells": ["13-11", "13-12", "13-13", "13-14"],
        'clue': "Your relation to me in a fantasy romance novel"
    },
    {
        "index": 42,
        "number": "76",
        "direction": "across",
        "word": "TYPE",
        "cells": ["14-1", "14-2", "14-3", "14-4"],
        'clue': "You are my ____"
    },
    {
        "index": 43,
        "number": "77",
        "direction": "across",
        "word": "SAME",
        "cells": ["14-6", "14-7", "14-8", "14-9"],
        'clue': "Not <em>all</em> our hobbies, but our values"
    },
    {
        "index": 44,
        "number": "78",
        "direction": "across",
        "word": "DYE",
        "cells": ["14-11", "14-12", "14-13"],
        'clue': "Colour infuser"
    },
    //down
    {
        "index": 45,
        "number": "1",
        "direction": "down",
        "word": "DOILY",
        "cells": ["0-1", "1-1", "2-1", "3-1", "4-1"],
        'clue': "Lingerie for furniture"
    },
    {
        "index": 46,
        "number": "2",
        "direction": "down",
        "word": "ATOLL",
        "cells": ["0-2", "1-2", "2-2", "3-2", "4-2"],
        'clue': "Kind of island in place of swimming pigs"
    },
    {
        "index": 47,
        "number": "3",
        "direction": "down",
        "word": "DEN",
        "cells": ["0-3", "1-3", "2-3"],
        'clue': "Secluded spot made from sofa pillows"
    },
    {
        "index": 48,
        "number": "4",
        "direction": "down",
        "word": "BRIO",
        "cells": ["0-5", "1-5", "2-5", "3-5"],
        'clue': "British slang for energy or enthusiasm"
    },
    {
        "index": 49,
        "number": "5",
        "direction": "down",
        "word": "LOOT",
        "cells": ["0-6", "1-6", "2-6", "3-6"],
        'clue': "Pirate booty"
    },
    {
        "index": 50,
        "number": "6",
        "direction": "down",
        "word": "OPT",
        "cells": ["0-7", "1-7", "2-7"],
        'clue': "Make a choice"
    },
    {
        "index": 51,
        "number": "7",
        "direction": "down",
        "word": "BEAN",
        "cells": ["0-8", "1-8", "2-8", "3-8"],
        'clue': "Nickname, with <em>56 Across</em>"
    },
    {
        "index": 52,
        "number": "8",
        "direction": "down",
        "word": "ANGLE",
        "cells": ["0-10", "1-10", "2-10", "3-10", "4-10"],
        'clue': "Maths perspective"
    },
    {
        "index": 53,
        "number": "9",
        "direction": "down",
        "word": "TAU",
        "cells": ["0-11", "1-11", "2-11"],
        'clue': "19th letter of the Greek alphabet"
    },
    {
        "index": 54,
        "number": "10",
        "direction": "down",
        "word": "OVAL",
        "cells": ["0-12", "1-12", "2-12", "3-12"],
        'clue': "Failed circle"
    },
    {
        "index": 55,
        "number": "11",
        "direction": "down",
        "word": "MANA",
        "cells": ["0-13", "1-13", "2-13", "3-13"],
        'clue': "Hawaiian spiritual energy"
    },
    {
        "index": 56,
        "number": "15",
        "direction": "down",
        "word": "LOW",
        "cells": ["1-14", "2-14", "3-14"],
        'clue': "You touch the toe even when you feel like this"
    },
    {
        "index": 57,
        "number": "12",
        "direction": "down",
        "word": "CLAN",
        "cells": ["1-0", "2-0", "3-0", "4-0"],
        'clue': "Brady's family, now that he is a Laird"
    },
    {
        "index": 58,
        "number": "20",
        "direction": "down",
        "word": "DNA",
        "cells": ["3-4", "4-4", "5-4"],
        'clue': "It means we would have cute kids"
    },
    {
        "index": 59,
        "number": "22",
        "direction": "down",
        "word": "IRE",
        "cells": ["3-9", "4-9", "5-9"],
        'clue': "What bad drivers inspire in Bean"
    },
    {
        "index": 60,
        "number": "25",
        "direction": "down",
        "word": "ORE",
        "cells": ["4-3", "5-3", "6-3"],
        'clue': "Raw metal"
    },
    {
        "index": 61,
        "number": "27",
        "direction": "down",
        "word": "DOG",
        "cells": ["4-11", "5-11", "6-11"],
        'clue': "Scout and Artemis"
    },
    {
        "index": 62,
        "number": "29",
        "direction": "down",
        "word": "MAP",
        "cells": ["5-5", "6-5", "7-5"],
        'clue': "Decorations above the holiday home"
    },
    {
        "index": 63,
        "number": "30",
        "direction": "down",
        "word": "BORON",
        "cells": ["5-7", "6-7", "7-7", "8-7", "9-7"],
        'clue': "Element"
    },
    {
        "index": 64,
        "number": "31",
        "direction": "down",
        "word": "EPIC",
        "cells": ["5-8", "6-8", "7-8", "8-8"],
        'clue': "One of your favourite types of romance"
    },
    {
        "index": 65,
        "number": "33",
        "direction": "down",
        "word": "AIRY",
        "cells": ["5-12", "6-12", "7-12", "8-12"],
        'clue': "Breezy"
    },
    {
        "index": 66,
        "number": "34",
        "direction": "down",
        "word": "TREK",
        "cells": ["5-13", "6-13", "7-13", "8-13"],
        'clue': "What we'll go on in the Lake District"
    },
    {
        "index": 67,
        "number": "35",
        "direction": "down",
        "word": "HOME",
        "cells": ["5-14", "6-14", "7-14", "8-14"],
        'clue': "Wherever you are"
    },
    {
        "index": 68,
        "number": "36",
        "direction": "down",
        "word": "RUDD",
        "cells": ["6-0", "7-0", "8-0", "9-0"],
        'clue': "Ant Man's other name"
    },
    {
        "index": 69,
        "number": "37",
        "direction": "down",
        "word": "AFRO",
        "cells": ["6-1", "7-1", "8-1", "9-1"],
        'clue': "Big hair"
    },
    {
        "index": 70,
        "number": "38",
        "direction": "down",
        "word": "TOAD",
        "cells": ["6-2", "7-2", "8-2", "9-2"],
        'clue': "Type of husband"
    },
    {
        "index": 71,
        "number": "40",
        "direction": "down",
        "word": "TACO",
        "cells": ["6-6", "7-6", "8-6", "9-6"],
        'clue': "Californian food"
    },
    {
        "index": 72,
        "number": "44",
        "direction": "down",
        "word": "SOW",
        "cells": ["7-9", "8-9", "9-9"],
        'clue': "We swam with one in the Bahamas"
    },
    {
        "index": 73,
        "number": "47",
        "direction": "down",
        "word": "TOG",
        "cells": ["8-3", "9-3", "10-3"],
        'clue': "My favorite duvet-thickness unit"
    },
    {
        "index": 74,
        "number": "49",
        "direction": "down",
        "word": "DOE",
        "cells": ["8-11", "9-11", "10-11"],
        'clue': "Your eyes"
    },
    {
        "index": 75,
        "number": "51",
        "direction": "down",
        "word": "DUO",
        "cells": ["9-5", "10-5", "11-5"],
        'clue': "We are an unstoppable ___"
    },
    {
        "index": 76,
        "number": "53",
        "direction": "down",
        "word": "OLD",
        "cells": ["9-10", "10-10", "11-10"],
        'clue': "Thirty years is pretty ____"
    },
    {
        "index": 77,
        "number": "55",
        "direction": "down",
        "word": "NIECE",
        "cells": ["10-4", "11-4", "12-4", "13-4", "14-4"],
        'clue': "June"
    },
    {
        "index": 78,
        "number": "57",
        "direction": "down",
        "word": "GAILY",
        "cells": ["10-12", "11-12", "12-12", "13-12", "14-12"],
        'clue': "Joyfully and brightly"
    },
    {
        "index": 79,
        "number": "58",
        "direction": "down",
        "word": "ANELE",
        "cells": ["10-13", "11-13", "12-13", "13-13", "14-13"],
        'clue': "Anoint"
    },
    {
        "index": 80,
        "number": "59",
        "direction": "down",
        "word": "LILY",
        "cells": ["10-14", "11-14", "12-14", "13-14"],
        'clue': "Favourite frog flower"
    },
    {
        "index": 81,
        "number": "60",
        "direction": "down",
        "word": "LAD",
        "cells": ["11-0", "12-0", "13-0"],
        'clue': "Just a boy"
    },
    {
        "index": 82,
        "number": "61",
        "direction": "down",
        "word": "ALIT",
        "cells": ["11-1", "12-1", "13-1", "14-1"],
        'clue': "Landed lightly"
    },
    {
        "index": 83,
        "number": "62",
        "direction": "down",
        "word": "GORY",
        "cells": ["11-2", "12-2", "13-2", "14-2"],
        'clue': "What you don't like so much about <em>House of the Dragon</em>"
    },
    {
        "index": 84,
        "number": "64",
        "direction": "down",
        "word": "NOWS",
        "cells": ["11-6", "12-6", "13-6", "14-6"],
        'clue': "The plural present"
    },
    {
        "index": 85,
        "number": "65",
        "direction": "down",
        "word": "BEAM",
        "cells": ["11-8", "12-8", "13-8", "14-8"],
        'clue': "What I do when I see you"
    },
    {
        "index": 86,
        "number": "66",
        "direction": "down",
        "word": "ANNE",
        "cells": ["11-9", "12-9", "13-9", "14-9"],
        'clue': "Queen of England in the early 1700s"
    },
    {
        "index": 87,
        "number": "69",
        "direction": "down",
        "word": "NAP",
        "cells": ["12-3", "13-3", "14-3"],
        'clue': "Your favourite daytime activity"
    },
    {
        "index": 88,
        "number": "71",
        "direction": "down",
        "word": "PEA",
        "cells": ["12-7", "13-7", "14-7"],
        'clue': "Would make you uncomfortable in a mattress"
    },
    {
        "index": 89,
        "number": "72",
        "direction": "down",
        "word": "RAD",
        "cells": ["12-11", "13-11", "14-11"],
        'clue': "Good but nuclear"
    }
]