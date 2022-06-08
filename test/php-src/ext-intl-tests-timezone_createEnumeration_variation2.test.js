// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/timezone_createEnumeration_variation2.phpt
  it("IntlTimeZone::createEnumeration(): variant with country", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\n$tz = IntlTimeZone::createEnumeration('NL');\nvar_dump(get_class($tz));\n$count = count(iterator_to_array($tz));\nvar_dump($count >= 1);\n$tz->rewind();\nvar_dump(in_array('Europe/Amsterdam', iterator_to_array($tz)));\n?>")).toMatchSnapshot();
  });
});
