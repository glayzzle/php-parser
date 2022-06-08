// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/calendar_isEquivalentTo_error.phpt
  it("IntlCalendar::isEquivalentTo(): bad arguments", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\n$c = new IntlGregorianCalendar(NULL, 'pt_PT');\nfunction eh($errno, $errstr) {\necho \"error: $errno, $errstr\\n\";\n}\nset_error_handler('eh');\ntry {\n    var_dump($c->isEquivalentTo(0));\n} catch (Error $ex) {\n    echo \"error: \" . $ex->getCode() . \", \" . $ex->getMessage() . \"\\n\\n\";\n}\ntry {\n    var_dump($c->isEquivalentTo($c, 1));\n} catch (Error $ex) {\n    echo \"error: \" . $ex->getCode() . \", \" . $ex->getMessage() . \"\\n\\n\";\n}\ntry {\n    var_dump($c->isEquivalentTo(1));\n} catch (Error $ex) {\n    echo \"error: \" . $ex->getCode() . \", \" . $ex->getMessage() . \"\\n\\n\";\n}\ntry {\n    var_dump(intlcal_is_equivalent_to($c));\n} catch (Error $ex) {\n    echo \"error: \" . $ex->getCode() . \", \" . $ex->getMessage() . \"\\n\\n\";\n}\ntry {\n    var_dump(intlcal_is_equivalent_to($c, 1));\n} catch (Error $ex) {\n    echo \"error: \" . $ex->getCode() . \", \" . $ex->getMessage() . \"\\n\\n\";\n}\ntry {\n    var_dump(intlcal_is_equivalent_to(1, $c));\n} catch (Error $ex) {\n    echo \"error: \" . $ex->getCode() . \", \" . $ex->getMessage() . \"\\n\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
