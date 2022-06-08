// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/SplFixedArray_nested_foreach.phpt
  it("Nested iteration of SplFixedArray using foreach loops", function () {
    expect(parser.parseCode("<?php\n$array = SplFixedArray::fromArray([0, 1]);\nforeach ($array as $value1) {\n  foreach ($array as $value2) {\n    echo \"$value1 $value2\\n\";\n  }\n}\n?>")).toMatchSnapshot();
  });
});
