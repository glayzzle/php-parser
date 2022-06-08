// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/date_sub_basic.phpt
  it("Test date_sub() function : basic functionality", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set('UTC');\necho \"*** Testing date_sub() : basic functionality ***\\n\";\n// Initialise all required variables\n$startDate = '2008-01-01 12:25';\n$format = 'Y-m-d H:i:s';\n$intervals = array(\n    'P3Y6M4DT12H30M5S',\n    'P0D',\n    'P2DT1M',\n    'P1Y2MT23H43M150S'\n);\n$d = new DateTime($startDate);\nvar_dump( $d->format($format) );\nforeach($intervals as $interval) {\n    date_sub($d, new DateInterval($interval) );\n    var_dump( $d->format($format) );\n}\n?>")).toMatchSnapshot();
  });
});
