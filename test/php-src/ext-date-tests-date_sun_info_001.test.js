// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/date_sun_info_001.phpt
  it("Test basic date_sun_info()", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set('UTC');\n$sun_info = date_sun_info(strtotime(\"2006-12-12\"), 31.7667, 35.2333);\nvar_dump($sun_info);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
