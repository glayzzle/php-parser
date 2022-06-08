// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug54454.phpt
  it("Bug #54454 (substr_compare incorrectly reports equality in some cases)", function () {
    expect(parser.parseCode("<?php\nvar_dump(substr_compare('/', '/asd', 0, 4));\n?>")).toMatchSnapshot();
  });
});
