// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/iterable_type_optimization.phpt
  it("Don't optimize object -> iterable", function () {
    expect(parser.parseCode("<?php\nfunction test(object $arg): iterable {\n    return $arg;\n}\ntest(new stdClass);\n?>")).toMatchSnapshot();
  });
});
