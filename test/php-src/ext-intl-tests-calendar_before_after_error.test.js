// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/calendar_before_after_error.phpt
  it("IntlCalendar::before()/after(): bad arguments", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\n$c = new IntlGregorianCalendar(NULL, 'pt_PT');\nfunction eh($errno, $errstr) {\necho \"error: $errno, $errstr\\n\";\n}\nset_error_handler('eh');\ntry {\n    var_dump($c->after());\n} catch (Error $ex) {\n    echo \"error: \" . $ex->getCode() . \", \" . $ex->getMessage() . \"\\n\\n\";\n}\ntry {\n    var_dump($c->before());\n} catch (Error $ex) {\n    echo \"error: \" . $ex->getCode() . \", \" . $ex->getMessage() . \"\\n\\n\";\n}\ntry {\n    var_dump($c->after(1));\n} catch (Error $ex) {\n    echo \"error: \" . $ex->getCode() . \", \" . $ex->getMessage() . \"\\n\\n\";\n}\ntry {\n    var_dump($c->before(1));\n} catch (Error $ex) {\n    echo \"error: \" . $ex->getCode() . \", \" . $ex->getMessage() . \"\\n\\n\";\n}\ntry{\n    var_dump($c->after($c, 1));\n} catch (Error $ex) {\n    echo \"error: \" . $ex->getCode() . \", \" . $ex->getMessage() . \"\\n\\n\";\n}\ntry {\n    var_dump($c->before($c, 1));\n} catch (Error $ex) {\n    echo \"error: \" . $ex->getCode() . \", \" . $ex->getMessage() . \"\\n\\n\";\n}\ntry {\n    var_dump(intlcal_after($c));\n} catch (Error $ex) {\n    echo \"error: \" . $ex->getCode() . \", \" . $ex->getMessage() . \"\\n\\n\";\n}\ntry {\n    var_dump(intlcal_before($c));\n} catch (Error $ex) {\n    echo \"error: \" . $ex->getCode() . \", \" . $ex->getMessage() . \"\\n\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
