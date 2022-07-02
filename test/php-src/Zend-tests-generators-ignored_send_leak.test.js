// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/ignored_send_leak.phpt
  it("Ignoring a sent value shouldn't leak memory", function () {
    expect(parser.parseCode("<?php\nfunction gen() {\n    yield;\n}\n$gen = gen();\n$gen->send(NULL);\necho \"DONE\";\n?>")).toMatchSnapshot();
  });
});
