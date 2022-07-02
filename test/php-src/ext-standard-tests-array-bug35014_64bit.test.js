// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/bug35014_64bit.phpt
  it("Bug #35014 (array_product() always returns 0) (64bit)", function () {
    expect(parser.parseCode("<?php\n$tests = array(\n    array(),\n    array(0),\n    array(3),\n    array(3, 3),\n    array(0.5, 2),\n    array(99999999, 99999999),\n    array(8.993, 7443241,988, sprintf(\"%u\", -1)+0.44),\n    array(2,sprintf(\"%u\", -1)),\n);\nforeach ($tests as $v) {\n    var_dump(array_product($v));\n}\n?>")).toMatchSnapshot();
  });
});
