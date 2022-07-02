// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug75786.phpt
  it("Bug #75786: segfault when using spread operator on generator passed by reference", function () {
    expect(parser.parseCode("<?php\nfunction &gen($items) {\n    foreach ($items as $key => &$value) {\n        yield $key => $value;\n    }\n}\nvar_dump(...gen(['a', 'b', 'c']));\n?>")).toMatchSnapshot();
  });
});
