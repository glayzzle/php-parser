// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/foreach_with_references_001.phpt
  it("foreach() with references", function () {
    expect(parser.parseCode("<?php\n$arr = array(1 => \"one\", 2 => \"two\", 3 => \"three\");\nforeach($arr as $key => $val) {\n    $val = $key;\n}\nprint_r($arr);\nforeach($arr as $key => &$val) {\n    $val = $key;\n}\nprint_r($arr);\n?>")).toMatchSnapshot();
  });
});
