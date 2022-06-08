// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug50475.phpt
  it("Bug #50475 (DateTime::setISODate followed by DateTime::setTime)", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set('Asia/Calcutta');\n$date = new DateTime('18-01-2009 00:00:00');\n$date->setISODate(2009, 6, 1);\nvar_dump($date->format('Y-m-d H:i:s'));\n$date->setTime(8, 0);\nvar_dump($date->format('Y-m-d H:i:s'));\n?>")).toMatchSnapshot();
  });
});
