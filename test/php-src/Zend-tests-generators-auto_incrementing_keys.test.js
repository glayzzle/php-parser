// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/auto_incrementing_keys.phpt
  it("Generator keys are auto-incrementing by default", function () {
    expect(parser.parseCode("<?php\nfunction gen() {\n    yield 'foo';\n    yield 'bar';\n    yield 5 => 'rab';\n    yield 'oof';\n}\nforeach (gen() as $k => $v) {\n    echo $k, ' => ', $v, \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
