// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/basic/021.phpt
  it("Bug #37276 (problems witch $_POST array)", function () {
    expect(parser.parseCode("<?php\nvar_dump($_FILES);\nvar_dump($_POST);\n?>")).toMatchSnapshot();
  });
});
