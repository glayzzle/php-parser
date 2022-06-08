// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mb_get_info.phpt
  it("Test mb_get_info() function", function () {
    expect(parser.parseCode("<?php\nmb_parse_str(\"abc=def\", $dummy);\nmb_convert_encoding(\"\\xff\\xff\", \"Shift_JIS\", \"UCS-2BE\");\n$result = mb_get_info();\nvar_dump($result);\nforeach (array_keys($result) as $key) {\n    var_dump($result[$key], mb_get_info($key));\n}\n?>")).toMatchSnapshot();
  });
});
