// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug80998.phpt
  it("Bug #80998: Missing second with inverted interval", function () {
    expect(parser.parseCode("<?php\n$date = new DateTime('2021-04-05 14:00:00');\n$interval = new DateInterval('P0DT10799S');\n$interval->f = 0.999999;\n$interval->invert = 1;\n$date->add($interval);\n$string = $date->format('Y-m-d H:i:s.u');\necho $string, \"\\n\";\n?>")).toMatchSnapshot();
  });
});
