// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/calendar_fieldDifference_error.phpt
  it("IntlCalendar::fieldDifference(): bad arguments", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\n$c = new IntlGregorianCalendar(NULL, 'pt_PT');\ntry {\n    var_dump($c->fieldDifference($c, 2, 3));\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\nvar_dump($c->fieldDifference(INF, 2));\ntry {\n    var_dump(intlcal_field_difference($c, 0, 1, 2));\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\nvar_dump(intlcal_field_difference(1, 0, 1));\n?>")).toMatchSnapshot();
  });
});
