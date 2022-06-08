// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/bug71660.phpt
  it("Bug #71660 (array_column behaves incorrectly after foreach by reference)", function () {
    expect(parser.parseCode("<?php\n$arr = array('id' => 12345, 'name' => 'sam');\nforeach ($arr as &$v) {\n        $v = $v;\n}\n$arr = [$arr];\nvar_dump(array_column($arr, 'name', 'id'));\n?>")).toMatchSnapshot();
  });
});
