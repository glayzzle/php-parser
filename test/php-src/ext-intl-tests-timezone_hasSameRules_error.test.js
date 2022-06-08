// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/timezone_hasSameRules_error.phpt
  it("IntlTimeZone::hasSameRules(): errors", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\nfunction error_handler($errno, $errstr, $errfile, $errline)\n{\n    var_dump($errno, $errstr);\n    return true;\n}\nset_error_handler(\"error_handler\");\n$tz = IntlTimeZone::createTimeZone('Europe/Lisbon');\ntry {\n    var_dump($tz->hasSameRules('foo'));\n} catch (Error $ex) {\n    var_dump($ex->getCode(), $ex->getMessage());\n    echo \"\\n\";\n}\ntry {\n    var_dump(intltz_has_same_rules(null, $tz));\n} catch (Error $ex) {\n    var_dump($ex->getCode(), $ex->getMessage());\n    echo \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
