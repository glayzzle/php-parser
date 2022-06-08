// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug79716.phpt
  it("Bug #79716 (Invalid date time created (with day \"00\"))", function () {
    expect(parser.parseCode("<?php\n$datetime = new \\DateTimeImmutable(\n    '2770-01-00 15:00:00.000000',\n    new \\DateTimeZone('UTC')\n);\n\\var_dump($datetime->format('j') === '0');\n\\var_dump($datetime);\n?>")).toMatchSnapshot();
  });
});
