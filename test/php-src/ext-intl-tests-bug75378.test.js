// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/bug75378.phpt
  it("Bug #75378 ([REGRESSION] IntlDateFormatter::parse() does not change $position argument)", function () {
    expect(parser.parseCode("<?php\n$formatter = new IntlDateFormatter(\"en-GB\", IntlDateFormatter::NONE, IntlDateFormatter::NONE, 'UTC', null, 'yyyy-MM-dd');\n$position = 0;\n$parsedDate = $formatter->parse(\"2017-10-12\", $position);\nvar_dump($position);\n$localdate = $formatter->localtime(\"2017-10-12 00:00:00\", $position1);\nvar_dump($position1);\n?>")).toMatchSnapshot();
  });
});
