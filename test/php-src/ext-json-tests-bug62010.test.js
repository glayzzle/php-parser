// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/json/tests/bug62010.phpt
  it("Bug #62010 (json_decode produces invalid byte-sequences)", function () {
    expect(parser.parseCode("<?php\nvar_dump(json_decode('\"\\ud834\"'));\nvar_dump(json_last_error() === JSON_ERROR_UTF16);\nvar_dump(json_last_error_msg());\n?>")).toMatchSnapshot();
  });
});
