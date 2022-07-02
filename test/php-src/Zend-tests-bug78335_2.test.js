// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug78335_2.phpt
  it("Bug #78335: Static properties containing cycles report as leak (internal class variant)", function () {
    expect(parser.parseCode("<?php\n$foo = [&$foo];\n_ZendTestClass::$_StaticProp = $foo;\n?>\n===DONE===")).toMatchSnapshot();
  });
});
