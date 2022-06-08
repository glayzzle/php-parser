// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/calendar_set_error.phpt
  it("IntlCalendar::set(): bad arguments", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\n$c = new IntlGregorianCalendar(NULL, 'pt_PT');\ntry {\n    $c->set(1, 2, 3, 4, 5, 6, 7);\n} catch (ArgumentCountError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\ntry {\n    $c->set(1, 2, 3, 4);\n} catch (ArgumentCountError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\ntry {\n    var_dump($c->set(-1, 2));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\n    var_dump(intlcal_set($c, -1, 2));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\n    var_dump(intlcal_set(1, 2, 3));\n} catch (\\TypeError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
