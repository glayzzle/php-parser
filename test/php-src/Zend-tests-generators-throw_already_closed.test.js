// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/throw_already_closed.phpt
  it("Generator::throw() on an already closed generator", function () {
    expect(parser.parseCode("<?php\nfunction gen() {\n    yield;\n}\n$gen = gen();\n$gen->next();\n$gen->next();\nvar_dump($gen->valid());\n$gen->throw(new Exception('test'));\n?>")).toMatchSnapshot();
  });
});
