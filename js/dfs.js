class TreeNode {
  constructor(parent = null, value = '') {
    this.parent = parent;
    this.value = value;
  }
}

let nodeCount = 0;

function depthFirst(node, func) {
  const stack = [node];
  while (stack.length > 0) {
    nodeCount++;
    node = stack.shift();

    if (func(node.value)) {
      return node;
    } else if (node.children) {
     return node.children.find(child => depthFirst(child, func));
    }
  }
}

// crappy relationship building

let parent = new TreeNode(null, 'papa');
let child_1_1 = new TreeNode(parent, 'child 1-1');
let child_1_2 = new TreeNode(parent, 'child 1-2');
let child_1_3 = new TreeNode(parent, 'child 1-3');

parent.children = [child_1_1, child_1_2, child_1_3];

let child_2_2 = new TreeNode(child_1_2, 'child 2-2');
let child_2_3 = new TreeNode(child_1_2, 'child 2-3');

child_1_2.children = [child_2_2, child_2_3];

let answer = depthFirst(parent, val => val === 'child 1-3');

console.log(answer);
console.log(nodeCount);


