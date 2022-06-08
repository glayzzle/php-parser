// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/chmod_error.phpt
  it("Test chmod() function : error conditions", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing chmod() : error conditions ***\\n\";\n// testing chmod with a non-existing file\n$filename = \"___nonExisitingFile___\";\nvar_dump(chmod($filename, 0777));\n?>")).toMatchSnapshot();
  });
});
