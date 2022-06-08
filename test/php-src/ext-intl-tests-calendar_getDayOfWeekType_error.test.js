// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/calendar_getDayOfWeekType_error.phpt
  it("IntlCalendar::getDayOfWeekOfType(): bad arguments", function () {
    expect(parser.parseCode("<?php\n$c = new IntlGregorianCalendar(NULL, 'pt_PT');\ntry {\n    var_dump($c->getDayOfWeekType(0));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\n    var_dump(intlcal_get_day_of_week_type(1, 1));\n} catch (\\TypeError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
