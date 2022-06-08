// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/date_sun_info_002.phpt
  it("Test basic date_sun_info()", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set('Europe/Oslo');\n$sun_info = date_sun_info(strtotime(\"2007-04-13 08:31:15 UTC\"), 59.21, 9.61);\nforeach ($sun_info as $key => $elem )\n{\n    echo date( 'Y-m-d H:i:s T', $elem ),  \" \", $key, \"\\n\";\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
