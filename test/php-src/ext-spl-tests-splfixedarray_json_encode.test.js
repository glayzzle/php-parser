// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/splfixedarray_json_encode.phpt
  it("json_encode() on SplFixedArray", function () {
    expect(parser.parseCode("<?php\necho json_encode(new SplFixedArray()) . \"\\n\";\necho json_encode(new SplFixedArray(1)) . \"\\n\";\n$a = new SplFixedArray(3);\n$a[0] = 0;\n$a[2] = 2;\necho json_encode($a) . \"\\n\";\n?>")).toMatchSnapshot();
  });
});
