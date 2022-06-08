// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/array_025.phpt
  it("SPL: ArrayObject serialize with an object as storage", function () {
    expect(parser.parseCode("<?php\n$obj1 = new ArrayObject(new ArrayObject(array(1,2)));\n$s = serialize($obj1);\n$obj2 = unserialize($s);\nprint_r($obj1);\necho \"$s\\n\";\nprint_r($obj2);\n?>")).toMatchSnapshot();
  });
});
