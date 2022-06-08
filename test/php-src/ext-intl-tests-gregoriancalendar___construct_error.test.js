// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/gregoriancalendar___construct_error.phpt
  it("IntlGregorianCalendar::__construct(): bad arguments", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\ntry {\n    var_dump(intlgregcal_create_instance(1,2,3,4,5,6,7));\n} catch (ArgumentCountError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    var_dump(intlgregcal_create_instance(1,2,3,4,5,6,7,8));\n} catch (ArgumentCountError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    var_dump(intlgregcal_create_instance(1,2,3,4));\n} catch (ArgumentCountError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    var_dump(new IntlGregorianCalendar(1,2,NULL,4));\n} catch (ArgumentCountError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    var_dump(new IntlGregorianCalendar(1,2,3,4,5,array()));\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n$cal = new IntlGregorianCalendar();\ntry {\n    $cal->__construct();\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
