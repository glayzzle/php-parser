// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/unpack_bug68225.phpt
  it("Bug #68225 unpack and X format code", function () {
    expect(parser.parseCode("<?php\n$data = pack('VV', 1, 2);\n$result = unpack('Va/X' ,$data);\nvar_dump($result);\n$result = unpack('Va/X4' ,$data);\nvar_dump($result);\n$result = unpack('V1a/X4/V1b/V1c/X4/V1d', $data);\nvar_dump($result);\n?>")).toMatchSnapshot();
  });
});
