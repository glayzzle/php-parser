// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/calendar_equals_before_after_basic.phpt
  it("IntlCalendar::equals(), ::before() and ::after() basic test", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\nini_set(\"intl.default_locale\", \"nl\");\n$intlcal1 = new IntlGregorianCalendar(2012, 1, 29, 16, 59, 59);\n$intlcal2 = IntlCalendar::createInstance(null, '@calendar=japanese');\n$intlcal3 = new IntlGregorianCalendar(2012, 1, 29, 17, 00, 00);\n$intlcal2->setTime($intlcal1->getTime());\nvar_dump($intlcal2->getType());\nvar_dump(\"1 eq 1\",\t\t$intlcal1->equals($intlcal1));\nvar_dump(\"1 eq 2\",\t\t$intlcal1->equals($intlcal2));\nvar_dump(\"1 before 2\",\t$intlcal1->before($intlcal2));\nvar_dump(\"1 after 2\",\t$intlcal1->after($intlcal2));\nvar_dump(\"1 eq 3\",\t\t$intlcal1->equals($intlcal3));\nvar_dump(\"1 before 3\",\t$intlcal1->before($intlcal3));\nvar_dump(\"1 after 3\",\t$intlcal1->after($intlcal3));\nvar_dump(\"3 eq 2\",\t\tintlcal_equals($intlcal3, $intlcal2));\nvar_dump(\"3 before 2\",\tintlcal_before($intlcal3, $intlcal2));\nvar_dump(\"3 after 2\",\tintlcal_after($intlcal3, $intlcal2));\n?>")).toMatchSnapshot();
  });
});
