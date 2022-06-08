// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/bug23624.phpt
  it("Bug #23624 (foreach leaves current array key as null)", function () {
    expect(parser.parseCode("<?php\n    $arr = array ('one', 'two', 'three');\n    var_dump(current($arr));\n    foreach($arr as $key => $value);\n    var_dump(current($arr));\n?>")).toMatchSnapshot();
  });
});
