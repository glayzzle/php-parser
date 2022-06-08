// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/timezone_clone_error.phpt
  it("IntlTimeZone clone handler: error test", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\nclass A extends IntlTimeZone {\nfunction __construct() {}\n}\n$tz = new A();\nvar_dump($tz);\ntry {\nvar_dump(clone $tz);\n} catch (Exception $e) {\n    var_dump(get_class($e), $e->getMessage());\n}\n?>")).toMatchSnapshot();
  });
});
