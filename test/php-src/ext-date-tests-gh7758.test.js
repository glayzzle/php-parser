// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/gh7758.phpt
  it("GH-7758 (Problems with negative timestamps and fractions)", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set('UTC');\nforeach ([0.4, 0, -0.4, -1, -1.4] as $ts) {\n    $date = new DateTime('@' . $ts);\n    print_r($date);\n}\n?>")).toMatchSnapshot();
  });
});
