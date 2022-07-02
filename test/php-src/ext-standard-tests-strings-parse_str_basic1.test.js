// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/parse_str_basic1.phpt
  it("Test parse_str() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing parse_str() : basic functionality ***\\n\";\necho \"\\nBasic test WITH undefined var for result arg\\n\";\n$s1 = \"first=val1&second=val2&third=val3\";\nvar_dump(parse_str($s1, $res1));\nvar_dump($res1);\necho \"\\nBasic test WITH existing non-array var for result arg\\n\";\n$res2 =99;\n$s1 = \"first=val1&second=val2&third=val3\";\nvar_dump(parse_str($s1, $res2));\nvar_dump($res2);\necho \"\\nBasic test with an existing array as results array\\n\";\n$res3_array = array(1,2,3,4);\nvar_dump(parse_str($s1, $res3_array));\nvar_dump($res3_array);\n?>")).toMatchSnapshot();
  });
});
