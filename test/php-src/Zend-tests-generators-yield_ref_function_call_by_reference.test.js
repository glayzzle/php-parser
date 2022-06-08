// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/yield_ref_function_call_by_reference.phpt
  it("The result of a by-ref function call can be yielded just fine", function () {
    expect(parser.parseCode("<?php\nfunction &nop(&$var) {\n    return $var;\n}\nfunction &gen(&$var) {\n    yield nop($var);\n}\n$var = \"foo\";\n$gen = gen($var);\nforeach ($gen as &$varRef) {\n    $varRef = \"bar\";\n}\nvar_dump($var);\n?>")).toMatchSnapshot();
  });
});
