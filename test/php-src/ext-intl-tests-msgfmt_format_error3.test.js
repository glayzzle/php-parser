// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/msgfmt_format_error3.phpt
  it("MessageFormatter::format() given negative arg key", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\n$fmt = <<<EOD\n{foo,number,percent}\nEOD;\n$mf = new MessageFormatter('en_US', $fmt);\nvar_dump($mf->format(array(\"foo\" => 7, -1 => \"bar\")));\n?>")).toMatchSnapshot();
  });
});
