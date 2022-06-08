// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/calendar_roll_error.phpt
  it("IntlCalendar::roll(): bad arguments", function () {
    expect(parser.parseCode("<?php\n$c = new IntlGregorianCalendar(NULL, 'pt_PT');\ntry {\n    var_dump($c->roll(-1, 2));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\n    var_dump(intlcal_roll(1, 2, 3));\n} catch (\\TypeError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
