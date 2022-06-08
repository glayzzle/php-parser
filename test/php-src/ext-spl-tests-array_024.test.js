// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/array_024.phpt
  it("SPL: ArrayObject with overridden count()", function () {
    expect(parser.parseCode("<?php\n$obj = new ArrayObject(array(1,2));\nvar_dump(count($obj));\nclass ArrayObject2 extends ArrayObject {\n    public function count(): int {\n        return -parent::count();\n    }\n}\n$obj = new ArrayObject2(array(1,2));\nvar_dump(count($obj));\n?>")).toMatchSnapshot();
  });
});
