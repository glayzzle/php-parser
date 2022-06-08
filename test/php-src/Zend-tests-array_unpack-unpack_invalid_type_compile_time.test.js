// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/array_unpack/unpack_invalid_type_compile_time.phpt
  it("Unpacking non-array/Traversable detected at compile-time", function () {
    expect(parser.parseCode("<?php\nvar_dump([...42]);\n?>")).toMatchSnapshot();
  });
});
