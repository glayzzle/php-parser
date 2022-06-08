// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/DateTimeZone_set_state.phpt
  it("Test __set_state magic method for recreating a DateTimeZone object", function () {
    expect(parser.parseCode("<?php\n$datetimezoneObject = new DateTimezone('UTC');\n$datetimezoneState = var_export($datetimezoneObject, true);\neval(\"\\$datetimezoneObjectNew = {$datetimezoneState};\");\nvar_dump($datetimezoneObjectNew);\n?>")).toMatchSnapshot();
  });
});
