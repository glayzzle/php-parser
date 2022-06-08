// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug49059.phpt
  it("Bug #49059 (DateTime::diff() repeats previous sub() operation)", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set('Asia/Calcutta');\n$date1 = date_create(\"2009-03-27\");\n$date2 = date_create(\"2009-03-01\");\nprint \"\\$date1 at init: \" . $date1->format(\"Y-m-d\") . \"\\n\";\nprint \"\\$date2 at init: \" . $date2->format(\"Y-m-d\") . \"\\n\";\n$diff = $date1->diff($date2);\nprint \"\\$date1 after first diff: \" . $date1->format(\"Y-m-d\") . \"\\n\";\nprint \"\\$diff->days after first diff: \" . $diff->days . \"\\n\";\n$date1 = $date1->sub(new DateInterval(\"P2D\"));\nprint \"\\$date1 after sub: \" . $date1->format(\"Y-m-d\") . \"\\n\";\n$diff = $date1->diff($date2);\nprint \"\\$date1 after second diff (called at \\$date1): \" .\n$date1->format(\"Y-m-d\") . \"\\n\";\nprint \"\\$diff->days after second diff: \" . $diff->days . \"\\n\";\n$diff = $date2->diff($date1);\nprint \"\\$date1 after third diff (called at \\$date2): \" .\n$date1->format(\"Y-m-d\") . \"\\n\";\nprint \"\\$diff->days after third diff: \" . $diff->days . \"\\n\";\n?>")).toMatchSnapshot();
  });
});
