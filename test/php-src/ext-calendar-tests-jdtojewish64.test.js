// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/calendar/tests/jdtojewish64.phpt
  it("Bug #64895: Integer overflow in SndToJewish", function () {
    expect(parser.parseCode("<?php\n$a = array(38245310, 324542846, 324542847, 9223372036854743639);\nforeach ($a as $x) var_dump(jdtojewish($x));\n?>")).toMatchSnapshot();
  });
});
