// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/output/bug60321.phpt
  it("Bug #60321 (ob_get_status(true) no longer returns an array when buffer is empty)", function () {
    expect(parser.parseCode("<?php\n$return = ob_get_status(true);\nvar_dump($return);\n?>")).toMatchSnapshot();
  });
});
