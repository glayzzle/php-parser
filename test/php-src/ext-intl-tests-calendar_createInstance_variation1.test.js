// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/calendar_createInstance_variation1.phpt
  it("IntlCalendar::createInstance() argument variations", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\nini_set(\"intl.default_locale\", \"nl\");\ndate_default_timezone_set('Europe/Amsterdam');\n$cal = intlcal_create_instance('Europe/Amsterdam');\nprint_R($cal->getTimeZone());\nprint_R($cal->getLocale(Locale::ACTUAL_LOCALE));\necho \"\\n\";\n$cal = intlcal_create_instance('Europe/Lisbon', null);\nprint_R($cal->getTimeZone());\nprint_R($cal->getLocale(Locale::ACTUAL_LOCALE));\necho \"\\n\";\n$cal = intlcal_create_instance(IntlTimeZone::createTimeZone('Europe/Lisbon'));\nprint_R($cal->getTimeZone());\nprint_R($cal->getLocale(Locale::ACTUAL_LOCALE));\necho \"\\n\";\n$cal = intlcal_create_instance(null, \"pt\");\nprint_R($cal->getTimeZone());\nprint_R($cal->getLocale(Locale::ACTUAL_LOCALE));\necho \"\\n\";\n$cal = intlcal_create_instance(\"Europe/Lisbon\", \"pt\");\nprint_R($cal->getTimeZone());\nprint_R($cal->getLocale(Locale::ACTUAL_LOCALE));\necho \"\\n\";\n?>")).toMatchSnapshot();
  });
});
