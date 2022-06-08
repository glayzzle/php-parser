// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/SplFixedArray_override_offsetGet_only.phpt
  it("Overriding SplFixedArray::offsetGet() only", function () {
    expect(parser.parseCode("<?php\nclass MyArray extends SplFixedArray {\n    public function offsetGet($key): mixed {\n        return \"prefix_\" . parent::offsetGet($key);\n    }\n}\n$arr = new MyArray(1);\nvar_dump(isset($arr[0]));\n$arr[0] = \"abc\";\nvar_dump(isset($arr[0]));\nvar_dump($arr[0]);\n?>")).toMatchSnapshot();
  });
});
