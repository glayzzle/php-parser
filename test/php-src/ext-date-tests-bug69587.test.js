// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug69587.phpt
  it("Bug #69587 (DateInterval properties and isset)", function () {
    expect(parser.parseCode("<?php\n$datetime1 = new DateTime('2009-10-11');\n$datetime2 = new DateTime('2009-10-13');\n$interval = $datetime1->diff($datetime2);\nvar_dump(property_exists($interval, 'm'), isset($interval->m), empty($interval->m), empty($interval->d));\n?>")).toMatchSnapshot();
  });
});
