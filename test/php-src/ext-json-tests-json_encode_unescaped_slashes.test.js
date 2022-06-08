// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/json/tests/json_encode_unescaped_slashes.phpt
  it("json_decode() tests", function () {
    expect(parser.parseCode("<?php\nvar_dump(json_encode('a/b'));\nvar_dump(json_encode('a/b', JSON_UNESCAPED_SLASHES));\n?>")).toMatchSnapshot();
  });
});
