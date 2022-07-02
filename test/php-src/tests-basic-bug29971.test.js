// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/basic/bug29971.phpt
  it("Bug #29971 (variables_order behaviour)", function () {
    expect(parser.parseCode("<?php\nvar_dump($_ENV,$_SERVER);\nvar_dump(ini_get(\"variables_order\"));\n?>")).toMatchSnapshot();
  });
});
