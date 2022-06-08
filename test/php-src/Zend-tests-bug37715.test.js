// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug37715.phpt
  it("Bug #37715 (array pointers resetting on copy)", function () {
    expect(parser.parseCode("<?php\n$a = array(\n    'a' => array(\n        'A', 'B', 'C', 'D',\n    ),\n    'b' => array(\n        'AA', 'BB', 'CC', 'DD',\n    ),\n);\n// Set the pointer of $a to 'b' and the pointer of 'b' to 'CC'\nreset($a);\nnext($a);\nnext($a['b']);\nnext($a['b']);\nnext($a['b']);\nvar_dump(key($a['b']));\nforeach($a as $k => $d)\n{\n}\n// Alternatively $c = $a; and foreachloop removal will cause identical results.\nvar_dump(key($a['b']));\n?>")).toMatchSnapshot();
  });
});
