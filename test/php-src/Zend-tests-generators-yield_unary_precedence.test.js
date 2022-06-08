// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/yield_unary_precedence.phpt
  it("When + or - are used on yield, they must be unary (and not binary) (Bug #69160)", function () {
    expect(parser.parseCode("<?php\nfunction gen() {\n    var_dump(yield +1);\n    var_dump(yield -1);\n    var_dump(yield * -1); // other ops still should behave normally\n}\nfor ($gen = gen(); $gen->valid(); $gen->send(1)) {\n    echo \"\\n\";\n    var_dump($gen->current());\n}\n?>")).toMatchSnapshot();
  });
});
