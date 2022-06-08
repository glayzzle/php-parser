// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/finally/run_on_dtor.phpt
  it("finally is run on object dtor, not free", function () {
    expect(parser.parseCode("<?php\nfunction gen() {\n    try {\n        yield;\n    } finally {\n        var_dump($_GET);\n    }\n}\n$gen = gen();\n$gen->rewind();\nset_error_handler(function() use($gen) {});\n?>")).toMatchSnapshot();
  });
});
