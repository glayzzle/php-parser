// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug78502.phpt
  it("Bug #78502: Incorrect stack size calculation for indirectly recursive function call", function () {
    expect(parser.parseCode("<?php\n$tree = [\n    'name' => 'a',\n    'quant' => 1,\n    'children' => [\n        ['name' => 'b', 'quant' => 1],\n        ['name' => 'c', 'quant' => 1, 'children' => [\n            ['name' => 'd', 'quant' => 1],\n        ]],\n    ],\n];\nfunction tree_map($tree, $recursive_attr, closure $callback){\n    if(isset($tree[$recursive_attr])){\n        $tree[$recursive_attr] = array_map(function($c) use($recursive_attr, $callback){\n            return tree_map($c, $recursive_attr, $callback);\n        }, $tree[$recursive_attr]);\n    }\n    return $callback($tree);\n}\ntree_map($tree, 'children', function ($node) {});\n?>\n===DONE===")).toMatchSnapshot();
  });
});
