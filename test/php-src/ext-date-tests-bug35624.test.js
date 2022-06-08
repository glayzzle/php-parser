// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug35624.phpt
  it("Bug #35624 (strtotime() does not handle 3 character weekdays)", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set(\"UTC\");\n$days = array(\"monday\",\"mon\",\"tuesday\",\"tue\",\"wednesday\",\"wed\",\"thursday\",\"thu\",\"friday\",\"fri\",\"saturday\",\"sat\",\"sunday\",\"sun\");\nforeach ($days as $day) {\n    echo date(\"D\", strtotime($day));\n    echo date(\"D\", strtotime(ucfirst($day)));\n    echo \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
