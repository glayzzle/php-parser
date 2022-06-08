// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/json/tests/bug42090.phpt
  it("Bug #42090 (json_decode causes segmentation fault)", function () {
    expect(parser.parseCode("<?php\nvar_dump(\n    json_decode('\"\"'),\n    json_decode('\"..\".'),\n    json_decode('\"'),\n    json_decode('\"\"\"\"'),\n    json_encode('\"'),\n    json_decode(json_encode('\"')),\n    json_decode(json_encode('\"\"'))\n);\n?>")).toMatchSnapshot();
  });
});
