// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/hash/tests/bug70312.phpt
  it("Bug #70312 (HAVAL gives wrong hashes in specific cases)", function () {
    expect(parser.parseCode("<?php\nvar_dump(hash('haval128,5', '1234567890123456789012345678901234567890123456789012345678901234'));\nvar_dump(hash('haval160,5', '1234567890123456789012345678901234567890123456789012345678901234'));\nvar_dump(hash('haval192,5', '1234567890123456789012345678901234567890123456789012345678901234'));\nvar_dump(hash('haval224,5', '1234567890123456789012345678901234567890123456789012345678901234'));\nvar_dump(hash('haval256,5', '1234567890123456789012345678901234567890123456789012345678901234'));\n?>")).toMatchSnapshot();
  });
});
