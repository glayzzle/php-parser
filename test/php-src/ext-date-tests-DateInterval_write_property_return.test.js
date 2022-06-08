// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/DateInterval_write_property_return.phpt
  it("Test that return value handling for DateInterval property writes do not corrupt RHS", function () {
    expect(parser.parseCode("<?php\n$interval = new DateInterval('P2Y4DT6H8M');\n$f = 0.5;\nvar_dump($interval->f = $f);\nvar_dump($f);\n?>")).toMatchSnapshot();
  });
});
