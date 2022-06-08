// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/DateTime_set_state.phpt
  it("Test __set_state magic method for recreating a DateTime object", function () {
    expect(parser.parseCode("<?php\n$datettimeObject = new DateTime('2017-10-06 23:30:00', new DateTimezone('UTC'));\n$datetimeState = var_export($datettimeObject, true);\neval(\"\\$datetimeObjectNew = {$datetimeState};\");\nvar_dump($datetimeObjectNew);\n?>")).toMatchSnapshot();
  });
});
