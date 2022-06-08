// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/msgfmt_format_error5.phpt
  it("MessageFormatter::format() invalid date/time argument", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\n$fmt = <<<EOD\n{foo,date}\nEOD;\n$mf = new MessageFormatter('en_US', $fmt);\nvar_dump($mf->format(array(\"foo\" => new stdclass())));\n?>")).toMatchSnapshot();
  });
});
