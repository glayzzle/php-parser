// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/file_get_contents_error001.phpt
  it("file_get_contents() test using offset parameter out of range", function () {
    expect(parser.parseCode("<?php\n    var_dump(file_get_contents(\"php://stdin\",null,null,8000,1));\n?>")).toMatchSnapshot();
  });
});
