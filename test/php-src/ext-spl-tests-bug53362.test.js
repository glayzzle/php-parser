// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug53362.phpt
  it("Bug #53362 (Segmentation fault when extending SplFixedArray)", function () {
    expect(parser.parseCode("<?php\nclass obj extends SplFixedArray{\n    public function offsetSet($offset, $value): void {\n        var_dump($offset);\n    }\n}\n$obj = new obj;\n$obj[]=2;\n$obj[]=2;\n$obj[]=2;\n?>")).toMatchSnapshot();
  });
});
