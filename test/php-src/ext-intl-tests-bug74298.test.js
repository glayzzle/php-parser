// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/bug74298.phpt
  it("Bug #74298 (IntlDateFormatter->format() doesn't return microseconds/fractions)", function () {
    expect(parser.parseCode("<?php\nvar_dump((new \\DateTime('2017-01-01 01:02:03.123456'))->format('Y-m-d\\TH:i:s.u'));\nvar_dump((new \\IntlDateFormatter(\n    'en-US',\n    \\IntlDateFormatter::FULL,\n    \\IntlDateFormatter::FULL,\n    'UTC',\n    \\IntlDateFormatter::GREGORIAN,\n    'yyyy-MM-dd HH:mm:ss.SSSSSS'\n))->format(new \\DateTime('2017-01-01 01:02:03.123456', new \\DateTimeZone('UTC'))));\nvar_dump(datefmt_create(\n    'en-US',\n    \\IntlDateFormatter::FULL,\n    \\IntlDateFormatter::FULL,\n    'UTC',\n    \\IntlDateFormatter::GREGORIAN,\n    'yyyy-MM-dd HH:mm:ss.SSSSSS'\n)->format(new \\DateTime('2017-01-01 01:02:03.123456', new \\DateTimeZone('UTC'))));\n?>")).toMatchSnapshot();
  });
});
