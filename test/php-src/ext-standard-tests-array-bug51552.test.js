// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/bug51552.phpt
  it("Bug #51552 (debug_backtrace() causes segmentation fault and/or memory issues)", function () {
    expect(parser.parseCode("<?php\nfunction walk($element, $key, $p) {\n    $backtrace = debug_backtrace();\n    echo \"$element\\n\";\n}\n$a = array(1,2,3,4,5,6,7,8,9,10);\narray_walk($a, 'walk', 'testthis');\n?>")).toMatchSnapshot();
  });
});
