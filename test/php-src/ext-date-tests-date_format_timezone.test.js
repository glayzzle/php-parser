// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/date_format_timezone.phpt
  it("Test date_format() function : timezone offset", function () {
    expect(parser.parseCode("<?php\n$tz = array(\"UTC\", \"Europe/London\", \"Europe/Berlin\", \"America/Chicago\");\nforeach ($tz as $zone) {\n    echo $zone, \"\\n\";\n    date_default_timezone_set($zone);\n    $date = date_create(\"2020-03-10 22:30:41\");\n    var_dump( date_format($date, \"O\") );\n    var_dump( date_format($date, \"P\") );\n    var_dump( date_format($date, \"p\") );\n}\necho \"Z\\n\";\n$date = date_create(\"2020-03-10 22:30:41Z\");\nvar_dump( date_format($date, \"p\") );\n?>")).toMatchSnapshot();
  });
});
