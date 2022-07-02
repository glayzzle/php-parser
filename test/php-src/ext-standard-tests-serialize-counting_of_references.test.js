// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/counting_of_references.phpt
  it("References are not counted twice", function () {
    expect(parser.parseCode("<?php\n$ref1 = 1;\n$ref2 = 2;\n$arr = [&$ref1, &$ref1, &$ref2, &$ref2];\nvar_dump(serialize($arr));\n?>")).toMatchSnapshot();
  });
});
