// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/time/idate.phpt
  it("idate() function", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set('GMT0');\n$tmp = \"UYzymndjHGhgistwLBIW\";\nfor($a = 0;$a < strlen($tmp); $a++){\n    echo $tmp[$a], ': ', idate($tmp[$a], 1043324459).\"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
