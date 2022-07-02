// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/file_exists_variation1.phpt
  it("Test file_exists() function : usage variations", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing file_exists() : usage variations ***\\n\";\nvar_dump(file_exists(false));\nvar_dump(file_exists(''));\nvar_dump(file_exists(' '));\nvar_dump(file_exists('|'));\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
