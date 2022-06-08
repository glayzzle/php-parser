// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/dateformat_formatObject_error.phpt
  it("IntlDateFormatter::formatObject(): error conditions", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\nini_set(\"intl.default_locale\", \"pt_PT\");\nini_set(\"date.timezone\", \"Europe/Lisbon\");\nvar_dump(IntlDateFormatter::formatObject(new stdclass));\nclass A extends IntlCalendar {function __construct(){}}\nvar_dump(IntlDateFormatter::formatObject(new A));\nclass B extends DateTime {function __construct(){}}\ntry {\n    var_dump(IntlDateFormatter::formatObject(new B));\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n$cal = IntlCalendar::createInstance();\nvar_dump(IntlDateFormatter::formatObject($cal, -2));\nvar_dump(IntlDateFormatter::formatObject($cal, array()));\nvar_dump(IntlDateFormatter::formatObject($cal, array(1,2,3)));\nvar_dump(IntlDateFormatter::formatObject($cal, array(array(), 1)));\nvar_dump(IntlDateFormatter::formatObject($cal, array(1, -2)));\nvar_dump(IntlDateFormatter::formatObject($cal, \"\"));\n?>")).toMatchSnapshot();
  });
});
