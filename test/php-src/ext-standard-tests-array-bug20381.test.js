// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/bug20381.phpt
  it("Bug #20381 (array_merge_recursive mangles input arrays)", function () {
    expect(parser.parseCode("<?php\n$a = array(\n    'a1' => 1,\n    'a2' => array( 1, 2, 3 ),\n    'a3' => array(\n        'a' => array( 10, 20, 30 ),\n        'b' => 'b'\n        )\n    );\n$b = array( 'a1' => 2,\n    'a2' => array( 3, 4, 5 ),\n    'a3' => array(\n        'c' => 'cc',\n        'a' => array( 10, 40 )\n        )\n    );\nvar_dump($a);\narray_merge_recursive( $a, $b );\nvar_dump($a);\n?>")).toMatchSnapshot();
  });
});
