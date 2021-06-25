/*
problem form https://binarysearch.com/problems/Number-of-Islands

Number of Islands

Given a two-dimensional integer matrix of 1s and 0s, return the number of "islands" in the matrix. A 1 represents land and 0 represents water, so an island is a group of 1s that are neighboring whose perimeter is surrounded by water.

Note: Neighbors can only be directly horizontal or vertical, not diagonal.

Constraints

n, m ≤ 100 where n and m are the number of rows and columns in matrix.


Example 1
Input
matrix = [
    [1, 1],
    [1, 0]
]
Output
1

Example 2
Input
matrix = [
    [1, 0, 0, 0, 0],
    [0, 0, 1, 1, 0],
    [0, 1, 1, 0, 0],
    [0, 0, 0, 0, 0],
    [1, 1, 0, 0, 1],
    [1, 1, 0, 0, 1]
]
Output
4

Example 3
Input
matrix = [
    [0, 1],
    [1, 0]
]
Output
2


I: n x m matrix array with 1 represent as land, 0 represent as sea
O: number of land that is not connected
E: a empty matrix
C: n, m ≤ 100 where n and m are the number of rows and columns in matrix.

Note: can only be directly horizontal or vertical, not diagonal.

sudo code:

create help function turn conect land to sea

create count variable set to 0

loop the matrxi in (i,j)
  check for land
    increase the count
    use help function to turn connected land to sea

return count

*/

const numverOfIslands = (matrixMap) => {
  let landToSea = (i, j) => {
    if (
      i >= 0 &&
      j >= 0 &&
      i < matrixMap.length &&
      j < matrixMap[0].length &&
      matrixMap[i][j] === 1
    ) {
      matrixMap[i][j] = 0;
      landToSea(i + 1, j);
      landToSea(i - 1, j);
      landToSea(i, j + 1);
      landToSea(i, j - 1);
    }
  };

  let count = 0;

  for (let i = 0; i < matrixMap.length; i++) {
    for (let j = 0; j < matrixMap.length; j++) {
      if (matrixMap[i][j] === 1) {
        count++;
        landToSea(i, j);
      }
    }
  }

  return count;
};

let matrixMap = [
  [1, 0, 0, 0, 0],
  [0, 0, 1, 1, 0],
  [0, 1, 1, 0, 0],
  [0, 0, 0, 0, 0],
  [1, 1, 0, 0, 1],
  [1, 1, 0, 0, 1],
];

console.log(numverOfIslands(matrixMap));
