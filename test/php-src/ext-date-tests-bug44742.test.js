// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug44742.phpt
  it("Bug #44742 (timezone_offset_get() causes segmentation faults)", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set('Europe/London');\n$dates = array(\n    \"2008-04-11 00:00:00+0000\",\n    \"2008-04-11 00:00:00+0200\",\n    \"2008-04-11 00:00:00+0330\",\n    \"2008-04-11 00:00:00-0500\",\n    \"2008-04-11 00:00:00-1130\",\n    \"2008-04-11 00:00:00 CEST\",\n    \"2008-04-11 00:00:00 CET\",\n    \"2008-04-11 00:00:00 UTC\",\n    \"2008-04-11 00:00:00 America/New_York\",\n    \"2008-04-11 00:00:00 Europe/Oslo\",\n    \"2008-04-11 00:00:00 Asia/Singapore\",\n);\nforeach ($dates as $date)\n{\n    $date = date_create($date);\n    var_dump(timezone_offset_get(date_timezone_get($date), $date));\n}\n?>")).toMatchSnapshot();
  });
});
