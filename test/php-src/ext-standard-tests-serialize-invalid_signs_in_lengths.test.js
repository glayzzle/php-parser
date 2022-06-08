// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/invalid_signs_in_lengths.phpt
  it("Lengths and references are not signed", function () {
    expect(parser.parseCode("<?php\nvar_dump(unserialize('s:+1:\"x\";'));\nvar_dump(unserialize('s:-1:\"x\";'));\nvar_dump(unserialize('a:+0:{}'));\nvar_dump(unserialize('a:-0:{}'));\nvar_dump(unserialize('O:+8:\"stdClass\":0:{}'));\nvar_dump(unserialize('O:-8:\"stdClass\":0:{}'));\nvar_dump(unserialize('C:+11:\"ArrayObject\":0:{}'));\nvar_dump(unserialize('C:-11:\"ArrayObject\":0:{}'));\nvar_dump(unserialize('a:1:{i:0;r:+1;}'));\nvar_dump(unserialize('a:1:{i:0;r:-1;}'));\nvar_dump(unserialize('a:1:{i:0;R:+1;}'));\nvar_dump(unserialize('a:1:{i:0;R:-1;}'));\n?>")).toMatchSnapshot();
  });
});
