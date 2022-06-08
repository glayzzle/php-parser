// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug61642.phpt
  it("Bug #61642 (modify(\"+5 weekdays\") returns Sunday)", function () {
    expect(parser.parseCode("<?php\n// ±5 and ±10 (and any non-zero multiple of 5) is broken, but everything else\n// should already work correctly.\n$weekdays = range(-11, 11);\n$dates = array('2012-03-29', '2012-03-30', '2012-03-31', '2012-04-01', '2012-04-02', '2012-04-03', '2012-04-04', '2012-04-05');\n$header = array();\nforeach ($dates as $startdate) {\n    $date = new DateTime($startdate);\n    $header[] = $date->format('Y-m-d D');\n}\necho '###  ', implode('  ', $header), \"\\n\\n\";\nforeach ($weekdays as $days) {\n    $line = array();\n    printf('%+3d  ', $days);\n    foreach ($dates as $startdate) {\n        $date = new DateTime($startdate);\n        $date->modify(\"{$days} weekdays\");\n        $line[] = $date->format('Y-m-d D');\n    }\n    echo implode('  ', $line), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
