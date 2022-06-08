// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/calendar_clear_error.phpt
  it("IntlCalendar::clear(): bad arguments", function () {
    expect(parser.parseCode("<?php\n$c = new IntlGregorianCalendar(NULL, 'pt_PT');\ntry {\n    var_dump($c->clear(-1));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\n    var_dump(intlcal_clear($c, -1));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\n    var_dump(intlcal_clear(1, 2));\n} catch (\\TypeError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
