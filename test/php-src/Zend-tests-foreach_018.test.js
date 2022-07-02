// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/foreach_018.phpt
  it("Foreach on stdClass with properties looking like mangled properties", function () {
    expect(parser.parseCode("<?php\n$obj = (object)[\n    \"\\0A\\0b\" => 42,\n    \"\\0*\\0c\" => 24,\n];\nforeach ($obj as $k => $v) {\n    var_dump($k, $v);\n}\n?>")).toMatchSnapshot();
  });
});
