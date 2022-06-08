// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/date_sunrise_variation8.phpt
  it("Test date_sunrise() function : usage variation -  Checking with North and South poles when Sun is up and down all day", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing date_sunrise() : usage variation ***\\n\";\n// GMT is zero for the timezone\ndate_default_timezone_set(\"Africa/Casablanca\");\n$time_date = array (\n        //Date at which Sun is up all day at North Pole\n        \"12 Aug 2008\" => mktime(8, 8, 8, 8, 12, 2008),\n        \"13 Aug 2008\" => mktime(8, 8, 8, 8, 13, 2008),\n        //Date at which Sun is up all day at South Pole\n        \"12 Nov 2008\" => mktime(8, 8, 8, 11, 12, 2008),\n        \"13 Nov 2008\" => mktime(8, 8, 8, 11, 13, 2008),\n);\n//Iterate over different date and time\nforeach( $time_date as $date => $time ){\n    echo \"\\n--$date--\\n\";\n    var_dump( date_sunrise($time, SUNFUNCS_RET_STRING, 90, 0 ) );\n    var_dump( date_sunrise($time, SUNFUNCS_RET_DOUBLE, 90, 0 ) );\n    var_dump( date_sunrise($time, SUNFUNCS_RET_TIMESTAMP, 90, 0 ) );\n    var_dump( date_sunrise($time, SUNFUNCS_RET_STRING, -90, 0 ) );\n    var_dump( date_sunrise($time, SUNFUNCS_RET_DOUBLE, -90, 0 ) );\n    var_dump( date_sunrise($time, SUNFUNCS_RET_TIMESTAMP, -90, 0 ) );\n}\n?>")).toMatchSnapshot();
  });
});
