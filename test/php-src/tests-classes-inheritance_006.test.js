// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/inheritance_006.phpt
  it("Private property inheritance check", function () {
    expect(parser.parseCode("<?php\nClass A {\n    private $c;\n}\nClass B extends A {\n    private $c;\n}\nClass C extends B {\n}\nvar_dump(new C);\n?>")).toMatchSnapshot();
  });
});
