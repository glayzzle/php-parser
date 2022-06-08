// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/timezone_getCanonicalID_variant1_2.phpt
  it("IntlTimeZone::getCanonicalID(): second argument", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\nvar_dump(IntlTimeZone::getCanonicalID('Portugal', $isSystemId));\nvar_dump($isSystemId);\n/* A valid custom time zone ID has the following syntax: GMT[+|-]hh[[:]mm] */\nvar_dump(IntlTimeZone::getCanonicalID('GMT +01:25', $isSystemId));\nvar_dump($isSystemId);\n?>")).toMatchSnapshot();
  });
});
