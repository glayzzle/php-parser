// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/SplFixedArray__construct_param_null.phpt
  it("SplFixedArray::__construct() with null passed as parameter.", function () {
    expect(parser.parseCode("<?php\n$array = new SplFixedArray( NULL );\nprint_r( $array );\n?>")).toMatchSnapshot();
  });
});
