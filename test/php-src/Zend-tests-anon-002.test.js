// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/anon/002.phpt
  it("declare anonymous class extending another", function () {
    expect(parser.parseCode("<?php\nclass A{}\ninterface B{\n    public function method();\n}\n$a = new class extends A implements B {\n    public function method(){\n        return true;\n    }\n};\nvar_dump($a instanceof A, $a instanceof B);\n?>")).toMatchSnapshot();
  });
});
