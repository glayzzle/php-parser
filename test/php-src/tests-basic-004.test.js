// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/basic/004.phpt
  it("Two variables in POST data", function () {
    expect(parser.parseCode("<?php\nerror_reporting(0);\necho \"{$_POST['a']} {$_POST['b']}\" ?>")).toMatchSnapshot();
  });
});
