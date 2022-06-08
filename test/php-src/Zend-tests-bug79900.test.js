// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug79900.phpt
  it("Bug #79900: Memory leaks reported if GC disabled at runtime", function () {
    expect(parser.parseCode("<?php\ngc_disable();\n$obj = new stdClass;\n$obj->obj = $obj;\n?>\n===DONE===")).toMatchSnapshot();
  });
});
