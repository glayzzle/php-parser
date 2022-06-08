// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/calendar_getKeywordValuesForLocale_basic.phpt
  it("IntlCalendar::getKeywordValuesForLocale() basic test", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\nini_set(\"intl.default_locale\", \"nl\");\nprint_r(\niterator_to_array(\nIntlCalendar::getKeywordValuesForLocale('calendar', 'pt', true)\n));\necho \"\\n\";\n$var = iterator_to_array(\nintlcal_get_keyword_values_for_locale('calendar', 'pt', false)\n);\nvar_dump(count($var) > 8);\nvar_dump(in_array('japanese', $var));\n?>")).toMatchSnapshot();
  });
});
