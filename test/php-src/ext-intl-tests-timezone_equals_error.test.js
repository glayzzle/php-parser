// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/timezone_equals_error.phpt
  it("IntlTimeZone equals handler: error test", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\nclass A extends IntlTimeZone {\nfunction __construct() {}\n}\n$tz = new A();\n$tz2 = intltz_get_gmt();\nvar_dump($tz, $tz2);\ntry {\nvar_dump($tz == $tz2);\n} catch (Exception $e) {\n    var_dump(get_class($e), $e->getMessage());\n}\n?>")).toMatchSnapshot();
  });
});
