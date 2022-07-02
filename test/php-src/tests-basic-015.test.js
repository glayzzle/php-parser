// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/basic/015.phpt
  it("POST Method test and arrays - 3", function () {
    expect(parser.parseCode("<?php\nvar_dump($_POST['a']);\n?>")).toMatchSnapshot();
  });
});
