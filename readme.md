Open draw.html in web browser to see the tree visualization.



draw.html - visualization
draw.js - make html elements for visualization
tree.js - make tree from given data
knuthLayout.js - make coordinates using Knuth’s algorithm
wsMinWidthLayout.js - make coordinates using Wetherell and Shannon’s Algorithm-Minimum Width algorithm
wsCenterFastLayout.js - make coordinates using Wetherell and Shannon’s Algorithm-Parent Centered algorithm
rtLayout.js - make coordinates using Reingold and Tilford’s Algorithm



data= [ [1,-1], [2,1], [3,1],[4,2],[5,2],[6,3],[7,3],[8,4],[9,4],[10,7],[11,7],[12,8],[13,8],[14,11],[15,11],[16,12],[17,12],[18,15],[19,15],[20,17],[21,17],[22,18],[23,18],[24,21],[25,21],[26,22],[27,22],[28,25],[29,25],[30,26],[31,26]  ];

[a,b] pair means the parent node of a is b. If b == -1, then a is root.
