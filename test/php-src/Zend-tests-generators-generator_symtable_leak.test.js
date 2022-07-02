// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/generator_symtable_leak.phpt
  it("Generators using symtables must not leak", function () {
    expect(parser.parseCode("<?php\nfunction gen() {\n    $bar = [\"some complex var\"];\n    ${\"f\".\"oo\"} = \"force symtable usage\";\n    var_dump($bar);\n    yield;\n}\ngen()->valid();\n?>")).toMatchSnapshot();
  });
});
