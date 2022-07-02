// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/pack_Z.phpt
  it("pack()/unpack(): \"Z\" format", function () {
    expect(parser.parseCode("<?php\nvar_dump(\n    pack(\"Z0\", \"f\"),\n    pack(\"Z5\", \"foo\\0\"),\n    pack(\"Z4\", \"fooo\"),\n    pack(\"Z4\", \"foo\"),\n    pack(\"Z*\", \"foo\"),\n    unpack(\"Z*\", \"foo\\0\\rbar\\0 \\t\\r\\n\"),\n    unpack(\"Z9\", \"foo\\0\\rbar\\0 \\t\\r\\n\"),\n    unpack(\"Z2\", \"\\0\"),\n    unpack(\"Z2\", \"\\0\\0\"),\n    unpack(\"Z2\", \"A\\0\"),\n    unpack(\"Z2\", \"AB\\0\"),\n    unpack(\"Z2\", \"ABC\")\n);\n?>")).toMatchSnapshot();
  });
});
