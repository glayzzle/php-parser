// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/send_after_close.phpt
  it("Calls to send() after close should do nothing", function () {
    expect(parser.parseCode("<?php\nfunction gen() { var_dump(yield); }\n$gen = gen();\n$gen->send('foo');\n$gen->send('bar');\n?>")).toMatchSnapshot();
  });
});
