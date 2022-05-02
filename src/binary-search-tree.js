const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor(){
    this.mainRoot = null;
  }

  root() {
    return this.mainRoot;
  }

  add(data) {
    this.mainRoot = AddElement(this.mainRoot, data);

    function AddElement(node, data) {
      if (!node) {
        return new Node(data);
      }

      if (node.data === data) {
        return node;
      }

      if (node.data > data) {
        node.left = AddElement(node.left, data);
      } else {
        node.right = AddElement(node.right, data);
      }
      
      return node;
    }
  }

  has(data) {
    return searchElement(this.mainRoot, data);

    function searchElement(node, data) {
      if (!node) {
        return false;
      }

      if (node.data === data) {
        return true;
      }
      
      if (node.data > data) {
        return searchElement(node.left, data);
      } else {
        return searchElement(node.right, data);
      } 
    }
  }

  find(data) {
    return findElement(this.mainRoot, data);

    function findElement(node, data) {
      if (!node) {
        return null;
      }

      if (node.data === data) {
        return node;
      }
      
      if (node.data > data) {
        return findElement(node.left, data);
      } else {
        return findElement(node.right, data);
      } 
    }
  }

  remove(data) {
    this.mainRoot = removeElement(this.mainRoot, data);

    function removeElement(node, data) {
      if (!node) {
        return null;
      }

      if (node.data > data) {
        node.left = removeElement(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = removeElement(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        } else if (!node.left) {
          node = node.right
          return node;
        }else if (!node.right) {
          node = node.left
          return node;
        }

        let minRight = node.right;

        while (minRight.left) {
          minRight = minRight.left;
        }
        node.data = minRight.data;
        node.right = removeElement(node.right, minRight.data);

        return node;
      }
    }
  }

  min() {
    if (!this.mainRoot) {
      return;
    }

    let node = this.mainRoot;
    while (node.left) {
      node = node.left;
    }
    
    return node.data
  }

  max() {
    if (!this.mainRoot) {
      return;
    }

    let node = this.mainRoot;
    while (node.right) {
      node = node.right;
    }
    
    return node.data
  }
}

module.exports = {
  BinarySearchTree
};