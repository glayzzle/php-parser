// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/array_026.phpt
  it("SPL: ArrayObject indirect offsetGet overwriting EG(uninitialized_zvar_ptr)", function () {
    expect(parser.parseCode("<?php\n$test = new ArrayObject();\n$test['d1']['d2'] = 'hello';\n$test['d1']['d3'] = 'world';\nvar_dump($test, $test3['mmmmm']);\n?>")).toMatchSnapshot();
  });
});
