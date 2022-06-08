// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/msgfmt_setPattern_cache.phpt
  it("MessageFormatter::setPattern() invalidates arg types cache", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\n//ini_set(\"intl.default_locale\", \"nl\");\n$mf = new MessageFormatter('en_US',\n    \"{0,number} -- {1,ordinal}\");\nvar_dump($mf->format(array(1.3, 1.3)));\nvar_dump($mf->format(array(1.3, 1.3)));\n$mf->setPattern(\"{0,ordinal} -- {1,number}\");\nvar_dump($mf->format(array(1.3, 1.3)));\n?>")).toMatchSnapshot();
  });
});
