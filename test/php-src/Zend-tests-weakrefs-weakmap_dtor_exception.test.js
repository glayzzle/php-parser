// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/weakrefs/weakmap_dtor_exception.phpt
  it("Exception during WeakMap destruction during shutdown", function () {
    expect(parser.parseCode("<?php\n$map = new WeakMap;\n$obj = new stdClass;\n$map[$obj] = new class {\n    function __destruct() {\n        throw new Exception(\"Test\");\n    }\n};\n?>")).toMatchSnapshot();
  });
});
