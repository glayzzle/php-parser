// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/msgfmt_format_mixed_params.phpt
  it("MessageFormatter::format(): mixed named and numeric parameters", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\n//ini_set(\"intl.default_locale\", \"nl\");\n$mf = new MessageFormatter('en_US',\n    \"{0,number} -- {foo,ordinal}\");\nvar_dump($mf->format(array(2.3, \"foo\" => 1.3)));\nvar_dump($mf->format(array(\"foo\" => 1.3, 0 => 2.3)));\n?>")).toMatchSnapshot();
  });
});
