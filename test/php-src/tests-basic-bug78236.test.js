// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/basic/bug78236.phpt
  it("Bug #78236 (convert error on receiving variables when duplicate [)", function () {
    expect(parser.parseCode("<?php\nvar_dump($_POST);\n?>")).toMatchSnapshot();
  });
});
