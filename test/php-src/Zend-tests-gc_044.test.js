// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/gc_044.phpt
  it("GC of object property table (order variation)", function () {
    expect(parser.parseCode("<?php\nfunction test() {\n    $o1 = new stdClass;\n    $o2 = new stdClass;\n    $a = ['prop' => $o2];\n    $o = $o1;\n    $o2->a = (object) $a;\n}\ntest();\n?>\n===DONE===")).toMatchSnapshot();
  });
});
