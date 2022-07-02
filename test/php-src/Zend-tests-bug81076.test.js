// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug81076.phpt
  it("Bug #81076 Invalid implicit binds cause incorrect static var count in closure debug info", function () {
    expect(parser.parseCode("<?php\nvar_dump(fn() => [$why, $do, $we, $count]);\n?>")).toMatchSnapshot();
  });
});
