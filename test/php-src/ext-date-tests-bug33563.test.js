// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug33563.phpt
  it("Bug #33563 (strtotime('+1 month',$abc) cant get right time)", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set(\"GMT\");\n$strCurrDate = date('Y-m-d H:i:s',strtotime('2005-06-30 21:04:23'));\n$strMonAfter = date('Y-m-d H:i:s',strtotime('+1 month',strtotime($strCurrDate)));\necho \"strCurrDate:$strCurrDate strMonAfter:$strMonAfter\";\n?>")).toMatchSnapshot();
  });
});
