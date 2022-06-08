// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug69089.phpt
  it("Bug #69089 (Add support for RFC3339 extended to DateTime::format)", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set('America/Buenos_Aires');\n$date = new DateTime('2009-09-28 09:45:31.918312');\nvar_dump($date->format(DateTime::RFC3339_EXTENDED));\nvar_dump($date->format('u'));\nvar_dump($date->format('v'));\n?>")).toMatchSnapshot();
  });
});
