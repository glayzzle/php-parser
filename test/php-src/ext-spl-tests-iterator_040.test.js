// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/iterator_040.phpt
  it("SPL: RecursiveFilterIterator", function () {
    expect(parser.parseCode("<?php\nclass MyRecursiveFilterIterator extends RecursiveFilterIterator\n{\n    function accept(): bool\n    {\n        return true;\n    }\n}\n$ar = array(1, array(21, 22), 3);\n$it = new RecursiveArrayIterator($ar);\n$it = new MyRecursiveFilterIterator($it);\n$it = new RecursiveIteratorIterator($it);\nforeach($it as $k => $v)\n{\n    echo \"===\\n\";\n    var_dump($it->getDepth());\n    var_dump($k);\n    var_dump($v);\n}\n?>")).toMatchSnapshot();
  });
});
