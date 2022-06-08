// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/basic/017.phpt
  it("POST Method test and arrays - 5", function () {
    expect(parser.parseCode("<?php\nvar_dump($_POST['a']);\n?>")).toMatchSnapshot();
  });
});
