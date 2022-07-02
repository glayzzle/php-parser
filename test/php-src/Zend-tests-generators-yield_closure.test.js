// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/yield_closure.phpt
  it("Generator shouldn't crash if last yielded value is a closure", function () {
    expect(parser.parseCode("<?php\nfunction gen() {\n    yield function() {};\n}\n$gen = gen();\n$gen->next();\necho \"Done!\";\n?>")).toMatchSnapshot();
  });
});
