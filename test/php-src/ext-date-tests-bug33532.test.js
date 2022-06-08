// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug33532.phpt
  it("Bug #33532 (Different output for strftime() and date())", function () {
    expect(parser.parseCode("<?php\nsetlocale(LC_ALL, 'C');\nprint \"TZ has NOT been set\\n\";\nprint \"Should strftime==datestr? Strftime seems to assume GMT tStamp.\\n\";\n$input = \"10:00:00 AM July 1 2005\";\nprint \"input    \" . $input . \"\\n\";\n$tStamp = strtotime($input);\nprint \"strftime \" . strftime(\"%r %B%e %Y %Z %z\", $tStamp) . \"\\n\";\nprint \"datestr  \" . date (\"H:i:s A F j Y T\", $tStamp) . \"\\n\";\nprint \"\\nSetting TZ\\n\";\ndate_default_timezone_set('Australia/Sydney');\nputenv(\"TZ=Australia/Sydney\");\n$input = \"10:00:00 AM July 1 2005\";\nprint \"input    \" . $input . \"\\n\";\n$tStamp = strtotime($input);\nprint \"strftime \" . strftime(\"%r %B%e %Y %Z %z\", $tStamp) . \"\\n\";\nprint \"datestr  \" . date (\"H:i:s A F j Y T\", $tStamp) . \"\\n\";\n?>")).toMatchSnapshot();
  });
});
