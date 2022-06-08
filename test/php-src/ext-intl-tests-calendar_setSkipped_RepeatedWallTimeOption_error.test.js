// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/calendar_setSkipped_RepeatedWallTimeOption_error.phpt
  it("IntlCalendar::setSkipped/RepeatedWallTimeOption(): bad arguments", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\n$c = new IntlGregorianCalendar(NULL, 'pt_PT');\ntry {\n    var_dump($c->setSkippedWallTimeOption(3));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\n    var_dump($c->setRepeatedWallTimeOption(2));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\n    var_dump(intlcal_set_repeated_wall_time_option(1, 1));\n} catch (\\TypeError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
