// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/is_iterable.phpt
  it("Test is_iterable() function", function () {
    expect(parser.parseCode("<?php\nfunction gen() {\n    yield;\n}\nvar_dump(is_iterable([1, 2, 3]));\nvar_dump(is_iterable(new ArrayIterator([1, 2, 3])));\nvar_dump(is_iterable(gen()));\nvar_dump(is_iterable(1));\nvar_dump(is_iterable(3.14));\nvar_dump(is_iterable(new stdClass()));\n?>")).toMatchSnapshot();
  });
});
