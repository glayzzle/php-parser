// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/bug66440.phpt
  it("Bug #66440 (Optimisation of conditional JMPs based on pre-evaluate constant function calls)", function () {
    expect(parser.parseCode("<?php\nif(constant('PHP_BINARY')) {\n    echo \"OK\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
