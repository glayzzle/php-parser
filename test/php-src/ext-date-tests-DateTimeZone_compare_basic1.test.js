// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/DateTimeZone_compare_basic1.phpt
  it("Test of compare object handler for DateTimeZone objects", function () {
    expect(parser.parseCode("<?php\n$timezones = array(\n    ['+0200', '-0200'],\n    ['EST', 'PST'],\n    ['Europe/Amsterdam', 'Europe/Berlin']\n);\nforeach ($timezones as [$timezone1, $timezone2]) {\n    compare_timezones($timezone1, $timezone1);\n    compare_timezones($timezone1, $timezone2);\n}\nvar_dump(new DateTimeZone('Europe/Berlin') == new DateTimeZone('CET'));\nfunction compare_timezones($timezone1, $timezone2)\n{\n    $tz1 = new DateTimeZone($timezone1);\n    $tz2 = new DateTimeZone($timezone2);\n    echo \"compare $timezone1 with $timezone2\\n\";\n    echo \"< \";\n    var_dump($tz1 < $tz2);\n    echo \"= \";\n    var_dump($tz1 == $tz2);\n    echo \"> \";\n    var_dump($tz1 > $tz2);\n}\n// Test comparison of uninitialized DateTimeZone objects.\nclass MyDateTimeZone extends DateTimeZone {\n    function __construct() {\n         // parent ctor not called\n    }\n}\n$tz1 = new MyDateTimeZone();\n$tz2 = new MyDateTimeZone();\ntry {\n    var_dump($tz1 == $tz2);\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
