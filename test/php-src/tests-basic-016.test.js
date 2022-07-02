// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/basic/016.phpt
  it("POST Method test and arrays - 4", function () {
    expect(parser.parseCode("<?php\nvar_dump($_POST['a']);\n?>")).toMatchSnapshot();
  });
});
