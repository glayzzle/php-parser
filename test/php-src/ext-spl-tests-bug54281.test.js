// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug54281.phpt
  it("Bug #54281 (Crash in spl_recursive_it_rewind_ex)", function () {
    expect(parser.parseCode("<?php\nclass RecursiveArrayIteratorIterator extends RecursiveIteratorIterator {\n    function __construct($it, $max_depth) { }\n}\n$it = new RecursiveArrayIteratorIterator(new RecursiveArrayIterator(array()), 2);\nforeach($it as $k=>$v) { }\n?>")).toMatchSnapshot();
  });
});
