// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug48678.phpt
  it("Bug #48678 (DateInterval segfaults when unserialising)", function () {
    expect(parser.parseCode("<?php\n$x = new DateInterval(\"P3Y6M4DT12H30M5S\");\nprint_r($x);\n$y = unserialize(serialize($x));\nprint_r($y);\n?>")).toMatchSnapshot();
  });
});
