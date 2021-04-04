export const STATE_DATA = {
  nodeDataArray: [
    { key: 0, text: "Start", loc: "0 0", category: "Start" },
    { key: 1, text: "Cone", loc: "200 -100"},
    { key: 2, text: "Bread", loc: "200 100" },
    { key: 3, text: "Cone\nStickyrice", loc: "400 -100" },
    { key: 4, text: "Bread\nStickyrice", loc: "400 100" },
    { key: 5, text: "Cone\nChocolate", loc: "600 -250" },
    { key: 6, text: "Cone\nVanilla", loc: "600 -100" },
    { key: 7, text: "Bread\nChocolate", loc: "600 100" },
    { key: 8, text: "Bread\nVanilla", loc: "600 250" },
    { key: 9, text: "Cone\nStickyrice\nChocolate", loc: "800 -250" },
    { key: 10, text: "Cone\nStickyrice\nVanilla", loc: "800 -100" },
    { key: 11, text: "Bread\nStickyrice\nChocolate", loc: "800 100" },
    { key: 12, text: "Bread\nStickyrice\nVanilla", loc: "800 250"},
    { key: 13, text: "Confirm", loc: "1000 0", category: "Confirm" },
  ],
  linkDataArray: [
    // From Start
    { key: -1, from: 0, to: 0, text: " ", visibleText: false , points: [40, 15, 60, 15, 60, 50, 30, 50, 30, 30] },
    { key: -2, from: 0, to: 1, text: "Cone", visibleText: false },
    { key: -3, from: 0, to: 2, text: "Bread", visibleText: false },

    // From Cone
    { key: -4, from: 1, to: 1, text: " ", visibleText: false, points: [240, -85, 260, -85, 260, -50, 230, -50, 230, -70] },
    { key: -5, from: 1, to: 2, text: "bread", visibleText: false, points: [210, -55, 210, 55] },
    { key: -6, from: 1, to: 3, text: "stickyrice", visibleText: false, points: [243, -110, 357, -110] },
    { key: -7, from: 1, to: 5, text: "chocolate", visibleText: false,  points: [200, -145, 200 , -270, 560, -270] },
    { key: -8, from: 1, to: 6, text: "vanilla", visibleText: false, points: [225, -135, 225, -200, 475, -200, 475, -120, 560, -120] },

    // From Bread
    { key: -9, from: 2, to: 1, text: "cone", visibleText: false, points: [190, 55, 190, -55] },
    { key: -10, from: 2, to: 2, text: " ", visibleText: false, points: [240, 85, 260, 85, 260, 50, 230, 50, 230, 70] },
    { key: -11, from: 2, to: 4, text: "stickyrice", visibleText: false },
    { key: -12, from: 2, to: 7, text: "chocolate", visibleText: false, points: [225, 135, 225, 200, 475, 200, 475, 120, 560, 120] },
    { key: -13, from: 2, to: 8, text: "vanilla", visibleText: false,  points: [200, 145, 200 , 270, 560, 270] },

    //From Cone/Stickyrice
    { key: -14, from: 3, to: 1, text: "stickyrice", visibleText: false },
    { key: -15, from: 3, to: 3, text: "cone, confirm", visibleText: false, points: [440, -85, 460, -85, 460, -50, 430, -50, 430, -70] },
    { key: -16, from: 3, to: 4, text: "bread", visibleText: false, points: [410, -55, 410, 55] },
    { key: -17, from: 3, to: 9, text: "chocolate", visibleText: false, points: [400, -145, 400, -180, 780, -180, 780, -212.5] },
    { key: -18, from: 3, to: 10, text: "vanilla", visibleText: false, points: [425, -135, 425, -165, 775, -165, 775, -135] },

    //From Bread/Stickyrice
    { key: -19, from: 4, to: 2, text: "stickyrice", visibleText: false, points: [357, 110, 243, 110] },
    { key: -20, from: 4, to: 3, text: "cone", visibleText: false, points: [390, 55, 390, -55] },
    { key: -21, from: 4, to: 4, text: "bread, confirm", visibleText: false, points: [440, 85, 460, 85, 460, 50, 430, 50, 430, 70] },
    { key: -22, from: 4, to: 11, text: "chocolate", visibleText: false, points: [425, 135, 425, 165, 775, 165, 775, 135] },
    { key: -23, from: 4, to: 12, text: "vanilla", visibleText: false, points: [400, 145, 400, 180, 780, 180, 780, 212.5] },

    //From Cone/Chocolate
    { key: -24, from: 5, to: 3, text: "chocolate", visibleText: false, points: [560, -230, 212.5, -230, 212.5, -142] },
    { key: -25, from: 5, to: 5, text: "cone", visibleText: false, points: [640, -235, 660, -235, 660, -200, 630, -200, 630, -220] },
    { key: -26, from: 5, to: 6, text: "vanilla", visibleText: false, points: [610, -205, 610, -145] },
    { key: -27, from: 5, to: 7, text: "bread", visibleText: false, points: [555, -250, 530, -250, 530, 80, 560, 80] },
    { key: -28, from: 5, to: 9, text: "stickyrice", visibleText: false, points: [640, -270, 760, -270] },
    { key: -29, from: 5, to: 13, text: "confirm", visibleText: false, points: [642, -242, 725, -242, 725, -20, 960, -20] },

    //From Cone/Vanilla
    { key: -30, from: 6, to: 1, text: "vanilla", visibleText: false, points: [580, -60, 580, -20, 220, -20, 220, -60] },
    { key: -31, from: 6, to: 5, text: "chocolate", visibleText: false, points: [590, -145, 590, -205] },
    { key: -32, from: 6, to: 6, text: "cone", visibleText: false, points: [640, -85, 660, -85, 660, -50, 630, -50, 630, -70] },
    { key: -33, from: 6, to: 8, text: "bread", visibleText: false, points: [560, -80, 510, -80, 510, 220, 570, 220] },
    { key: -34, from: 6, to: 10, text: "stickyrice", visibleText: false, points: [640, -120, 760, -120] },
    { key: -35, from: 6, to: 13, text: "confirm", visibleText: false, points: [642, -92, 715, -92, 715, -10, 957, -10] },

    //From Bread/Chocolate
    { key: -36, from: 7, to: 2, text: "chocolate", visibleText: false, points: [580, 60, 580, 20, 220, 20, 220, 60] },
    { key: -37, from: 7, to: 5, text: "cone", visibleText: false, points: [642, 92, 700, 92, 700, -250, 645, -250] },
    { key: -38, from: 7, to: 7, text: "bread", visibleText: false, points: [640, 85, 660, 85, 660, 50, 630, 50, 630, 70] },
    { key: -39, from: 7, to: 8, text: "vanilla", visibleText: false, points: [610, 145, 610, 205] },
    { key: -40, from: 7, to: 11, text: "stickyrice", visibleText: false, points: [640, 120, 760, 120] },
    { key: -41, from: 7, to: 13, text: "confirm", visibleText: false, points: [642, 92, 700, 92, 700, 0, 955, 0] },

    //From Bread/Vanilla
    { key: -42, from: 8, to: 2, text: "vanilla", visibleText: false, points: [555, 250, 212.5, 250, 212.5, 142]},
    { key: -43, from: 8, to: 6, text: "cone", visibleText: false, points: [645, 245, 685, 245, 685, -10, 600, -10, 600, -55] },
    { key: -44, from: 8, to: 7, text: "chocolate", visibleText: false, points: [590, 205, 590, 145] },
    { key: -45, from: 8, to: 8, text: "bread", visibleText: false, points: [640, 235, 660, 235, 660, 200, 630, 200, 630, 220] },
    { key: -46, from: 8, to: 12, text: "stickyrice", visibleText: false, points: [640, 270, 760, 270] },
    { key: -47, from: 8, to: 13, text: "confirm", visibleText: false, points: [645, 245, 725, 245, 725, 9, 957, 9] },

    //From Cone/Stickyrice/Chocolate
    { key: -48, from: 9, to: 3, text: "chocolate", visibleText: false, points: [800, -295, 800, -315, 380, -315, 380, -140] },
    { key: -49, from: 9, to: 5, text: "stickyrice", visibleText: false, points: [757, -260, 643, -260] },
    { key: -50, from: 9, to: 9, text: "cone", visibleText: false, points: [840, -235, 860, -235, 860, -200, 830, -200, 830, -220] },
    { key: -51, from: 9, to: 10, text: "vanilla", visibleText: false, points: [810, -207, 810, -143] },
    { key: -52, from: 9, to: 11, text: "bread", visibleText: false, points: [845, -250, 900, -250, 900, 100, 845, 100] },
    { key: -53, from: 9, to: 13, text: "confirm", visibleText: false, points: [845, -250, 1020, -250, 1020, -40] },

    //From Cone/Stickyrice/Vanilla
    { key: -54, from: 10, to: 3, text: "vanilla", visibleText: false, points: [832, -130, 880, -130, 880, -315, 380, -315, 380, -140]},
    { key: -55, from: 10, to: 6, text: "stickyrice", visibleText: false, points: [757, -105, 643, -105] },
    { key: -56, from: 10, to: 9, text: "chocolate", visibleText: false, points: [790, -143, 790, -207] },
    { key: -57, from: 10, to: 10, text: "cone", visibleText: false, points: [840, -85, 860, -85, 860, -50, 830, -50, 830, -70] },
    { key: -58, from: 10, to: 12, text: "bread", visibleText: false, points: [840, -110, 915, -110, 915, 230, 840, 230] },
    { key: -59, from: 10, to: 13, text: "confirm", visibleText: false, points: [840, -110, 1000, -110, 1000, -45] },

    //From Bread/Stickyrice/Chocolate
    { key: -60, from: 11, to: 4, text: "chocolate", visibleText: false, points: [832, 130, 880, 130, 880, 315, 380, 315, 380, 140]},
    { key: -61, from: 11, to: 7, text: "stickyrice", visibleText: false, points: [757, 105, 643, 105] },
    { key: -62, from: 11, to: 9, text: "cone", visibleText: false, points: [840, 110, 930, 110, 930, -270, 840, -270] },
    { key: -63, from: 11, to: 11, text: "bread", visibleText: false, points: [842, 90, 867, 90, 867, 65, 829, 65] },
    { key: -64, from: 11, to: 12, text: "vanilla", visibleText: false, points: [810, 143, 810, 207] },
    { key: -65, from: 11, to: 13, text: "confirm", visibleText: false, points: [840, 110, 1000, 110, 1000, 45] },

    //From Bread/Stickyrice/Vanilla
    { key: -66, from: 12, to: 4, text: "vanilla", visibleText: false, points: [800, 295, 800, 315, 380, 315, 380, 140] },
    { key: -67, from: 12, to: 8, text: "stickyrice", visibleText: false, points: [757, 260, 643,260] },
    { key: -68, from: 12, to: 10, text: "cone", visibleText: false, points: [845, 250, 945, 250, 945, -95, 840, -95] },
    { key: -69, from: 12, to: 11, text: "chocolate", visibleText: false, points: [790, 207, 790, 143] },
    { key: -70, from: 12, to: 12, text: "bread", visibleText: false, points: [840, 265, 860, 265, 860, 300, 830, 300, 830, 280] },
    { key: -71, from: 12, to: 13, text: "confirm", visibleText: false, points: [845, 250, 1020, 250, 1020, 40] },

    //From Confirm
    { key: -72, from: 13, to: 13, text: " ", visibleText: false, points: [1040, -20, 1070, -20, 1070, 20, 1040, 20]},
  ],
};
