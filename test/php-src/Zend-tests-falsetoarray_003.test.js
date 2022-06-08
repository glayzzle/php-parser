// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/falsetoarray_003.phpt
  it("Autovivification of false to array with data clobbering by error handler", function () {
    expect(parser.parseCode("<?php\nset_error_handler(function($code, $msg) {\n    echo \"Err: $msg\\n\";\n    $GLOBALS['a']=9;\n});\n$a=[];\n($a[PHP_INT_MAX+1]);\n?>\nDONE")).toMatchSnapshot();
  });
});
