// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug52577.phpt
  it("Bug #52577 (Incorrect date returning)", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set('Europe/Kiev');\n$date = '7.8.2010';\necho \"String: \".$date.\"\\n\";\n$date_format = DATE_RFC2822;\n$unixtime = strtotime($date);\necho \"Unixtime: \".$unixtime.\"\\n\";\necho \"Date(PHP): \".date($date_format,$unixtime).\"\\n\";\n$date = new DateTime('@'.$unixtime);\necho \"DateTime(PHP Class): \".$date->format($date_format);\n?>")).toMatchSnapshot();
  });
});
