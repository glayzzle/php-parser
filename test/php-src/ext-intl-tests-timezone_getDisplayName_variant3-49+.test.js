// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/timezone_getDisplayName_variant3-49+.phpt
  it("IntlTimeZone::getDisplayName(): locale parameter", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\nini_set(\"error_reporting\", -1);\nini_set(\"display_errors\", 1);\n$lsb = IntlTimeZone::createTimeZone('Europe/Lisbon');\nini_set('intl.default_locale', 'en_US');\nvar_dump($lsb->getDisplayName(false, IntlTimeZone::DISPLAY_LONG));\nvar_dump($lsb->getDisplayName(false, IntlTimeZone::DISPLAY_LONG, NULL));\nvar_dump($lsb->getDisplayName(false, IntlTimeZone::DISPLAY_LONG, 'pt_PT'));\n?>")).toMatchSnapshot();
  });
});
