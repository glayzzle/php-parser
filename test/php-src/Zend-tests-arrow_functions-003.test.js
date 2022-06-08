// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/arrow_functions/003.phpt
  it("Variable-variables inside arrow functions", function () {
    expect(parser.parseCode("<?php\n$a = 1;\n$var = \"a\";\n$fn = fn() => $$var;\nvar_dump($fn());\n${5} = 2;\n$fn = fn() => ${5};\nvar_dump($fn());\n?>")).toMatchSnapshot();
  });
});
