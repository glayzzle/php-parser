// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/msgfmt_format_error1.phpt
  it("MessageFormatter::format() insufficient numeric arguments", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\n$fmt = <<<EOD\n{0} {1}\nEOD;\n$mf = new MessageFormatter('en_US', $fmt);\nvar_dump($mf->format(array(7)));\n?>")).toMatchSnapshot();
  });
});
