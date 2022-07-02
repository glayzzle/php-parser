// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/return_types/015.phpt
  it("Return types allowed in namespace", function () {
    expect(parser.parseCode("<?php\nnamespace Collections;\ninterface Collection {\n    function values(): Collection;\n}\nclass Vector implements Collection {\n    function values(): Collection {\n        return $this;\n    }\n}\n$v = new Vector;\nvar_dump($v->values());\n?>")).toMatchSnapshot();
  });
});
