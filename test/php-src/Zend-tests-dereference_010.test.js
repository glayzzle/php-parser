// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/dereference_010.phpt
  it("Testing dereference in non-array values", function () {
    expect(parser.parseCode("<?php\nerror_reporting(E_ALL);\nfunction a() {\n    return 1;\n}\n$a = 1;\nvar_dump($a[1]);\nvar_dump(a()[1]);\nfunction b() {\n    return new stdClass;\n}\nvar_dump(b()[1]);\n?>")).toMatchSnapshot();
  });
});
