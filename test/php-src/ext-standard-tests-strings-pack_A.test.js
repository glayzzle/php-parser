// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/pack_A.phpt
  it("pack()/unpack(): \"A\" modifier", function () {
    expect(parser.parseCode("<?php\nvar_dump(\n    pack(\"A5\", \"foo \"),\n    pack(\"A4\", \"fooo\"),\n    pack(\"A4\", \"foo\"),\n    unpack(\"A*\", \"foo\\0\\rbar\\0 \\t\\r\\n\"),\n    unpack(\"A4\", \"foo\\0\\rbar\\0 \\t\\r\\n\")\n);\n?>")).toMatchSnapshot();
  });
});
