// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/basic/018.phpt
  it("POST Method test and arrays - 6", function () {
    expect(parser.parseCode("<?php\nvar_dump($_POST['a']);\nvar_dump($_POST['b']);\n?>")).toMatchSnapshot();
  });
});
