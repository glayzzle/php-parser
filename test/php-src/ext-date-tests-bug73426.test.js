// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug73426.phpt
  it("Bug #73426 (createFromFormat with 'z' format char results in incorrect time)", function () {
    expect(parser.parseCode("<?php\n$date = '2016 12:00:00 15';\n$format = 'Y H:i:s z';\nvar_dump(DateTime::createFromFormat($format, $date));\n$date = '16 12:00:00 2016';\n$format = 'z H:i:s Y';\nvar_dump(DateTime::createFromFormat($format, $date));\nvar_dump(DateTime::getLastErrors());\n?>")).toMatchSnapshot();
  });
});
