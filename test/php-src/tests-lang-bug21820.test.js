// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/bug21820.phpt
  it("Bug #21820 (\"$arr['foo']\" generates bogus E_NOTICE, should be E_PARSE)", function () {
    expect(() => parser.parseCode("<?php\nerror_reporting(E_ALL);\n$arr = array('foo' => 'bar');\necho \"$arr['foo']\";\n?>")).toThrowErrorMatchingSnapshot();
  });
});
