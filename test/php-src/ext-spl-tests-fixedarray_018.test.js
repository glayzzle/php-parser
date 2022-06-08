// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/fixedarray_018.phpt
  it("SPL: FixedArray: overridden count()", function () {
    expect(parser.parseCode("<?php\n$obj = new SplFixedArray(2);\nvar_dump(count($obj));\nclass SplFixedArray2 extends SplFixedArray {\n    public function count(): int {\n        return -parent::count();\n    }\n}\n$obj = new SplFixedArray2(2);\nvar_dump(count($obj));\n?>")).toMatchSnapshot();
  });
});
