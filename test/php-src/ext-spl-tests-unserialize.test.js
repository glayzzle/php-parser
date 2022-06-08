// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/unserialize.phpt
  it("SPL: unserialize with no data (for PHPUnit)", function () {
    expect(parser.parseCode("<?php\n$types = array('SplDoublyLinkedList', 'SplObjectStorage', 'ArrayObject');\nforeach ($types as $type) {\n    // serialize an empty new object\n    $exp = serialize(new $type());\n    // hack to instantiate an object without constructor\n    $str = sprintf('C:%d:\"%s\":0:{}', strlen($type), $type);\n    $obj = unserialize($str);\n    var_dump($obj);\n    // serialize result\n    $out = serialize($obj);\n    // both should match\n    var_dump($exp === $out);\n}\n?>")).toMatchSnapshot();
  });
});
