// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/mktime_error.phpt
  it("Test mktime() function : error conditions", function () {
    expect(parser.parseCode("<?php\n//Set the default time zone\ndate_default_timezone_set(\"Europe/London\");\necho \"*** Testing mktime() : error conditions ***\\n\";\necho \"\\n-- Testing mktime() function with Zero arguments --\\n\";\ntry {\n    var_dump( mktime() );\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\necho \"\\n-- Testing mktime() function with more than expected no. of arguments --\\n\";\n$hour = 10;\n$minute = 30;\n$sec = 45;\n$month = 7;\n$day = 2;\n$year = 1963;\n$extra_arg = 10;\ntry {\n    var_dump( mktime($hour, $minute, $sec, $month, $day, $year, $extra_arg) );\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
