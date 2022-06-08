// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/calendar_setTimeZone_error.phpt
  it("IntlCalendar::setTimeZone(): bad arguments", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\n$c = new IntlGregorianCalendar(NULL, 'pt_PT');\n$gmt = IntlTimeZone::getGMT();\nfunction eh($errno, $errstr) {\necho \"error: $errno, $errstr\\n\";\n}\nset_error_handler('eh');\ntry {\n    var_dump($c->setTimeZone($gmt, 2));\n} catch (Error $ex) {\n    echo \"error: \" . $ex->getCode() . \", \" . $ex->getMessage() . \"\\n\\n\";\n}\ntry {\n    var_dump($c->setTimeZone());\n} catch (Error $ex) {\n    echo \"error: \" . $ex->getCode() . \", \" . $ex->getMessage() . \"\\n\\n\";\n}\ntry{\n    var_dump(intlcal_set_time_zone($c, 1, 2));\n} catch (Error $ex) {\n    echo \"error: \" . $ex->getCode() . \", \" . $ex->getMessage() . \"\\n\\n\";\n}\ntry{\n    var_dump(intlcal_set_time_zone(1, $gmt));\n} catch (Error $ex) {\n    echo \"error: \" . $ex->getCode() . \", \" . $ex->getMessage() . \"\\n\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
