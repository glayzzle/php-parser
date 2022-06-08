// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug27780.phpt
  it("Bug #27780 (strtotime(+1 xxx) returns a wrong date/time)", function () {
    expect(parser.parseCode("<?php\n$timezones = array (\n    \"America/Chicago\", \"Europe/Amsterdam\", \"Asia/Jerusalem\",\n    \"Asia/Singapore\", \"America/Sao_Paulo\"\n);\n$timestrings = array (\n    \"2004-04-07 00:00:00 -2 months +7 days +23 hours +59 minutes +59 seconds\",\n    \"2004-04-07 00:00:00 -2 months +7 days +23 hours +59 minutes +60 seconds\",\n    \"2004-04-07 00:00:00 -2 months +7 days +23 hours +59 minutes +61 seconds\",\n    \"2004-04-07 00:00:00 -21 days\",\n    \"2004-04-07 00:00:00 11 days ago\",\n    \"2004-04-07 00:00:00 -10 day +2 hours\",\n    \"2004-04-07 00:00:00 -1 day\",\n    \"2004-04-07 00:00:00\",\n    \"2004-04-07 00:00:00 +1 hour\",\n    \"2004-04-07 00:00:00 +2 hour\",\n    \"2004-04-07 00:00:00 +1 day\",\n    \"2004-04-07 00:00:00 1 day\",\n    \"2004-04-07 00:00:00 +21 days\",\n);\nforeach ($timezones as $timezone) {\n    date_default_timezone_set($timezone);\n    echo $timezone, \"\\n\";\n    foreach ($timestrings as $timestring) {\n        $time = strtotime($timestring);\n        echo $time, date(\" [Y-m-d H:i:s T]\", $time), \" [$timestring]\\n\";\n    }\n    echo \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
