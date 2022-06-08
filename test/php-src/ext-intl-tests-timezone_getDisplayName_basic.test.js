// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/timezone_getDisplayName_basic.phpt
  it("IntlTimeZone::getDisplayName(): basic test", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\n$lsb = IntlTimeZone::createTimeZone('Europe/Lisbon');\nini_set('intl.default_locale', 'en_US');\nvar_dump($lsb->getDisplayName());\nini_set('intl.default_locale', 'pt_PT');\nvar_dump($lsb->getDisplayName());\n?>")).toMatchSnapshot();
  });
});
