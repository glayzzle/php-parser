// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/date.phpt
  it("date() function", function () {
    expect(parser.parseCode("<?php\n$tmp = \"cr\";\ndate_default_timezone_set('UTC');\nfor($a = 0;$a < strlen($tmp); $a++){\n    echo $tmp[$a], ': ', date($tmp[$a], 1043324459).\"\\n\";\n}\ndate_default_timezone_set(\"MET\");\nfor($a = 0;$a < strlen($tmp); $a++){\n    echo $tmp[$a], ': ', date($tmp[$a], 1043324459).\"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
