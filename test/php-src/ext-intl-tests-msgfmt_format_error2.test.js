// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/msgfmt_format_error2.phpt
  it("MessageFormatter::format() inconsistent types in named argument", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\n$fmt = <<<EOD\n{foo,number} {foo}\nEOD;\n$mf = new MessageFormatter('en_US', $fmt);\nvar_dump($mf->format(array(7)));\n?>")).toMatchSnapshot();
  });
});
