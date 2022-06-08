// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mb_list_encodings.phpt
  it("mb_list_encodings", function () {
    expect(parser.parseCode("<?php\nvar_dump(in_array(\"7bit\", mb_list_encodings()));\nvar_dump(in_array(\"8bit\", mb_list_encodings()));\nvar_dump(in_array(\"ASCII\", mb_list_encodings()));\nvar_dump(in_array(\"non-existent\", mb_list_encodings()));\n?>")).toMatchSnapshot();
  });
});
