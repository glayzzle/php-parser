// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/array_unpack/non_integer_keys.phpt
  it("Array unpacking does not work with non-integer/string keys", function () {
    expect(parser.parseCode("<?php\nfunction gen() {\n    yield [] => 1;\n    yield 1.23 => 123;\n}\ntry {\n    [...gen()];\n} catch (Error $ex) {\n    echo \"Exception: \" . $ex->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
