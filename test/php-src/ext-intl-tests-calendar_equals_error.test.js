// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/calendar_equals_error.phpt
  it("IntlCalendar::equals(): bad arguments", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\n$c = new IntlGregorianCalendar(NULL, 'pt_PT');\nfunction eh($errno, $errstr) {\necho \"error: $errno, $errstr\\n\";\n}\nset_error_handler('eh');\ntry {\n    var_dump($c->equals());\n} catch (Error $ex) {\n    echo \"error: \" . $ex->getCode() . \", \" . $ex->getMessage() . \"\\n\\n\";\n}\ntry {\n    var_dump($c->equals(new stdclass));\n} catch (Error $ex) {\n    echo \"error: \" . $ex->getCode() . \", \" . $ex->getMessage() . \"\\n\\n\";\n}\ntry {\n    var_dump($c->equals(1, 2));\n} catch (Error $ex) {\n    echo \"error: \" . $ex->getCode() . \", \" . $ex->getMessage() . \"\\n\\n\";\n}\ntry {\n    var_dump(intlcal_equals($c, array()));\n} catch (Error $ex) {\n    echo \"error: \" . $ex->getCode() . \", \" . $ex->getMessage() . \"\\n\\n\";\n}\ntry {\n    var_dump(intlcal_equals(1, $c));\n} catch (Error $ex) {\n    echo \"error: \" . $ex->getCode() . \", \" . $ex->getMessage() . \"\\n\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
