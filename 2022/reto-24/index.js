export const canExit = (maze = []) => {
  let start, end;

  let calculateDistance = (node, end) =>
    Math.sqrt((node.x - end.x) ** 2 + (node.y - end.y) ** 2);
  let steps = [
    [-1, 0],
    [1, 0],
    [0, 1],
    [0, -1],
  ];

  maze
    .map((row, y) => {
      return row.map((value, x) => {
        let node = {
          x,
          y,
          value,
          neighbors: [],
          gScore: 0,
          fScore: Infinity,
        };
        if (value == 'S') start = node;
        else if (value == 'E') end = node;
        return node;
      });
    })
    .map((row, _, maze) => {
      row.map(node => {
        steps.forEach(point => {
          if (
            node.y + point[0] >= 0 &&
            node.y + point[0] <= maze.length - 1 &&
            node.x + point[1] >= 0 &&
            node.x + point[1] <= maze[0].length - 1
          ) {
            let neighbor = maze[node.y + point[0]][node.x + point[1]];
            if (neighbor) node.neighbors.push(neighbor);
          }
        });
      });
    });

  let open = [start];

  while (open.length) {
    let next = open.sort((x, y) => y.fScore - x.fScore).pop();

    next.neighbors.forEach(neighbor => {
      if (neighbor.value != 'W') {
        let newGScore = next.gScore + 1;

        if (newGScore < neighbor.gScore || neighbor.gScore == 0) {
          neighbor.gScore = newGScore;
          neighbor.fScore = newGScore + calculateDistance(next, end);

          if (!open.find(node => node.x == neighbor.x && node.y == neighbor.y))
            open.push(neighbor);
        }
      }
    });
  }

  return !!end.gScore;
};
