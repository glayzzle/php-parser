// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/generator_send.phpt
  it("Values can be sent back to the generator", function () {
    expect(parser.parseCode("<?php\nfunction gen() {\n    var_dump(yield \"yield foo\");\n    var_dump(yield \"yield bar\");\n}\n$gen = gen();\nvar_dump($gen->current());\n$gen->send(\"send bar\");\nvar_dump($gen->current());\n$gen->send(\"send foo\");\n?>")).toMatchSnapshot();
  });
});
