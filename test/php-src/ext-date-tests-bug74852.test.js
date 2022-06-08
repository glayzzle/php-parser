// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug74852.phpt
  it("Bug #74852 property_exists returns true on unknown DateInterval property", function () {
    expect(parser.parseCode("<?php\n$interval = new DateInterval('P2D');\nvar_dump(property_exists($interval,'abcde'));\nvar_dump(isset($interval->abcde));\nvar_dump($interval->abcde);\n?>")).toMatchSnapshot();
  });
});
