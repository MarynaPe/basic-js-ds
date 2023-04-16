const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootBinaryTree = null;
  }

  root() {
    return this.rootBinaryTree;
  }

  add(data) {
    this.rootBinaryTree = addNode(this.rootBinaryTree, data)

    function addNode(node, data) {
      if (!node) {
        return new Node(data)
      }
      if (node.data === data) {
        return node
      }
      if (data < node.data) {
        node.left = addNode(node.left, data)
      } else {
        node.right = addNode(node.right, data)
      }
      return node
    }
  }

  has(data) {
    return hasNode(this.rootBinaryTree, data)
    function hasNode(node, data) {
      if (!node) {
        return false
      }
      if (node.data === data) {
        return true
      }
      if (data < node.data) {
        return hasNode(node.left, data)
      } else {
        return hasNode(node.right, data)
      }
    }
  }

  find(data) {
    return fineNode(this.rootBinaryTree, data)

    function fineNode(node, data) {
      if (!node) {
        return null
      }
      if (node.data === data) {
        console.log(node.data)
        return node
      }

      if (node.data > data) {
        return fineNode(node.left, data)
      } else {
        return fineNode(node.right, data)
      }
    }
  }

  remove(data) {
    this.rootBinaryTree = removeNode(this.rootBinaryTree, data)

    function removeNode(node, data) {
      if (!node) {
        return null
      }
      if (node.data > data) {
        node.left = removeNode(node.left, data)
        return node
      } else if (node.data < data) {
        node.right = removeNode(node.right, data)
        return node
      } else {
        if (!node.left && !node.right) {
          return null
        }
        if (!node.left) {
          node = node.right
          return node
        }
        if (!node.right) {
          node = node.left
          return node
        }
        let minRight = node.right
        while (minRight.left) {
          minRight = minRight.left
        }
        node.data = minRight.data
        node.right = removeNode(node.right, minRight.data)
        return node
      }
    }
  }

  min() {
    let node = this.rootBinaryTree;
    while (node.left !== null) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    let node = this.rootBinaryTree;
    while (node.right !== null) {
      node = node.right;
    }
    return node.data;
  }

}

module.exports = {
  BinarySearchTree
};