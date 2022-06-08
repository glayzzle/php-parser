// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/timezone_getCanonicalID_variant1.phpt
  it("IntlTimeZone::getCanonicalID(): second argument", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\nvar_dump(IntlTimeZone::getCanonicalID('Portugal', $isSystemId));\nvar_dump($isSystemId);\nvar_dump(IntlTimeZone::getCanonicalID('GMT +01:25', $isSystemId));\nvar_dump($isSystemId);\n?>")).toMatchSnapshot();
  });
});
