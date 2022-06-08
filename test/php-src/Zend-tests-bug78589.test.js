// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug78589.phpt
  it("Bug #78589: Memory leak with GC + __destruct()", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public function __destruct() {}\n}\n$test = new Test;\n$test->foo = [&$test->foo];\n$ary = [&$ary, $test];\nunset($ary, $test);\ngc_collect_cycles();\n?>\n===DONE===")).toMatchSnapshot();
  });
});
