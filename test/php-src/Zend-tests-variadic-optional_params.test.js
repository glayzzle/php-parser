// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/variadic/optional_params.phpt
  it("Optional parameter before variadic parameter", function () {
    expect(parser.parseCode("<?php\nfunction f($reqParam, $optParam = null, ...$params) {\n    var_dump($reqParam, $optParam, $params);\n}\nf(1);\nf(1, 2);\nf(1, 2, 3);\nf(1, 2, 3, 4);\nf(1, 2, 3, 4, 5);\n?>")).toMatchSnapshot();
  });
});
