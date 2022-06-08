// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/DatePeriod_set_state.phpt
  it("Test __set_state magic method for recreating a DatePeriod object", function () {
    expect(parser.parseCode("<?php\n$datePeriodObject = new DatePeriod(\n    new DateTime('2017-10-06 23:30', new DateTimeZone('UTC')),\n    new DateInterval('PT1H30M'),\n    24\n);\n$datePeriodState = var_export($datePeriodObject, true);\neval(\"\\$datePeriodObjectNew = {$datePeriodState};\");\nvar_dump($datePeriodObjectNew);\n?>")).toMatchSnapshot();
  });
});
