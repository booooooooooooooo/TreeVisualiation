# Level-based Tree Visualization




## 1.Draw ordered tree with restrictions in linear time

Note: This part is just a review of https://llimllib.github.io/pymag-trees/ and the papers it refers to.


- Principle 1: The edges of the tree should not cross each other.
- Principle 2: All nodes at the same depth should be drawn on the same horizontal line. This helps make clear the structure of the tree.
- Principle 3: Trees should be drawn as narrowly as possible.
- Principle 4: A parent should be centered over its children.
- Principle 5: A subtree should be drawn the same no matter where in the tree it lies.


##### Done
* KnuthLayout.js: Principle 1,2; O(n)
* WetherellAndShannon1Layout.js: Principle 1,2,3; O(n)
* WetherellAndShannon2Layout.js: Principle 1,2,3,4; O(n^2)
* WetherellAndShannon3Layout.js: Principle 1,2,3,4; O(n)
##### TODO
-ReingoldAndTilfordLayout.js: Principle 1,2,3,4,5; O(n)





## 2.Draw unordered tree with restrictions.

Note: Some restrictions may bring NP-complete problem. Try to find some heuristic methods.

##### TODO
