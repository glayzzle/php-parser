// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/basic/013.phpt
  it("POST Method test and arrays", function () {
    expect(parser.parseCode("<?php\nvar_dump($_POST['a']);\n?>")).toMatchSnapshot();
  });
});
