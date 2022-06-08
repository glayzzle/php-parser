// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug42654.phpt
  it("Bug #42654 (RecursiveIteratorIterator modifies only part of leaves)", function () {
    expect(parser.parseCode("<?php\n$data = array(1 => 'val1',\n              array(2 => 'val2',\n                    array(3 => 'val3'),\n                   ),\n              4 => 'val4'\n             );\n$iterator = new RecursiveIteratorIterator(new\nRecursiveArrayIterator($data));\nforeach($iterator as $foo) {\n    $key = $iterator->key();\n    echo \"update $key\\n\";\n    var_dump($iterator->getInnerIterator());\n    $iterator->offsetSet($key, 'alter');\n    var_dump($iterator->getInnerIterator());\n}\n$copy = $iterator->getArrayCopy();\nvar_dump($copy);\n?>")).toMatchSnapshot();
  });
});
