// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/msgfmt_format_error4.phpt
  it("MessageFormatter::format() invalid UTF-8 for arg key or value", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\n$fmt = <<<EOD\n{foo}\nEOD;\n$mf = new MessageFormatter('en_US', $fmt);\nvar_dump($mf->format(array(\"foo\" => 7, \"\\x80\" => \"bar\")));\nvar_dump($mf->format(array(\"foo\" => \"\\x80\")));")).toMatchSnapshot();
  });
});
