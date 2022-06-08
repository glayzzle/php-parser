// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug73460-002.phpt
  it("Bug #73460 (Datetime add not realising it already applied DST change)", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set('America/New_York');\n//DST starts Apr. 2nd 02:00 and moves to 03:00\n$start = new \\DateTime('2006-04-02T01:00:00');\n$end = new \\DateTime('2006-04-02T04:00:00');\nwhile($end > $start) {\n    $now = clone $end;\n    $end->sub(new \\DateInterval('PT1H'));\n    echo $end->format('Y-m-d H:i T') . PHP_EOL;\n}\necho '-----' . \\PHP_EOL;\n//DST ends Oct. 29th 02:00 and moves to 01:00\n$start = new \\DateTime('2006-10-29T00:30:00');\n$end = new \\DateTime('2006-10-29T03:00:00');\n$i = 0;\nwhile($end > $start) {\n    $now = clone $start;\n    $start->add(new \\DateInterval('PT30M'));\n    echo $start->format('Y-m-d H:i T') . PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
