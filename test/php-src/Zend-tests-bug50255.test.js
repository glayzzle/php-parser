// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug50255.phpt
  it("Bug #50255 (isset() and empty() silently casts array to object)", function () {
    expect(parser.parseCode("<?php\n$arr = array('foo' => 'bar');\nprint \"isset\\n\";\nvar_dump(isset($arr->foo));\nvar_dump(isset($arr->bar));\nvar_dump(isset($arr['foo']));\nvar_dump(isset($arr['bar']));\nprint \"empty\\n\";\nvar_dump(empty($arr->foo));\nvar_dump(empty($arr->bar));\nvar_dump(empty($arr['foo']));\nvar_dump(empty($arr['bar']));\n?>")).toMatchSnapshot();
  });
});
