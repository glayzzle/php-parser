// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/calendar_toDateTime_error.phpt
  it("IntlCalendar::toDateTime(): bad arguments", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\nini_set('date.timezone', 'Europe/Lisbon');\n$cal = new IntlGregorianCalendar(\"Etc/Unknown\");\ntry {\nvar_dump($cal->toDateTime());\n} catch (Exception $e) {\nvar_dump(\"exception: {$e->getMessage()}\");\n}\ntry {\n    var_dump(intlcal_to_date_time($cal));\n} catch (\\Exception $e) {\n    var_dump($e->getMessage());\n}\n$cal = IntlCalendar::createInstance(\"Etc/Unknown\");\ntry {\n    var_dump($cal->toDateTime());\n} catch (\\Exception $e) {\n    var_dump($e->getMessage());\n}\ntry {\n    var_dump(intlcal_to_date_time($cal));\n} catch (\\Exception $e) {\n    var_dump($e->getMessage());\n}\ntry {\n    var_dump(intlcal_to_date_time(3));\n} catch (\\TypeError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
