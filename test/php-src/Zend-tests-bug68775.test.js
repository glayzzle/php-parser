// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug68775.phpt
  it("Bug #68775: yield in a function argument crashes or loops indefinitely", function () {
    expect(parser.parseCode("<?php\nfunction a($x) {\n    var_dump($x);\n}\nfunction gen() {\n     a(yield);\n}\n$g = gen();\n$g->send(1);\n?>")).toMatchSnapshot();
  });
});
