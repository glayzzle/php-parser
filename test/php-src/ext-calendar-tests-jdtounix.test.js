// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/calendar/tests/jdtounix.phpt
  it("jdtounix()", function () {
    expect(parser.parseCode("<?php\necho date(\"Y-m-d\",jdtounix(2440588)). \"\\n\";\necho date(\"Y-m-d\",jdtounix(2452162)). \"\\n\";\necho date(\"Y-m-d\",jdtounix(2453926)). \"\\n\";\n?>")).toMatchSnapshot();
  });
});
