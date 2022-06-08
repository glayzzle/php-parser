// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/msgfmt_format_error6.phpt
  it("MessageFormatter::format() invalid type for key not in pattern", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\n$fmt = <<<EOD\n{foo}\nEOD;\n$mf = new MessageFormatter('en_US', $fmt);\nvar_dump($mf->format(array(\"foo\" => 'bar', 7 => fopen('php://memory', 'r+'))));\n?>")).toMatchSnapshot();
  });
});
