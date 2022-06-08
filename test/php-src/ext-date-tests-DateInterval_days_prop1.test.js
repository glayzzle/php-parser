// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/DateInterval_days_prop1.phpt
  it("Wrong var_dump(DateInterval->days) value", function () {
    expect(parser.parseCode("<?php\n$interval = new DateInterval('P2Y4DT6H8M');\nvar_dump($interval->days);\n?>")).toMatchSnapshot();
  });
});
