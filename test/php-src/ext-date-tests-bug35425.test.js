// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug35425.phpt
  it("Bug #35425 (idate() function ignores timezone settings)", function () {
    expect(parser.parseCode("<?php\n$time = mktime(1,1,1,1,1,2005);\nforeach (array('B','d','h','H','i','I','L','m','s','t','U','w','W','y','Y','z','Z') as $v) {\n    var_dump(idate($v, $time));\n}\n?>")).toMatchSnapshot();
  });
});
