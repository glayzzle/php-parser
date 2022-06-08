// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/hash/tests/mhash_004.phpt
  it("MHash: mhash() modifying algorithm parameter", function () {
    expect(parser.parseCode("<?php\n$algo = MHASH_MD5;\nvar_dump($algo);\nvar_dump(bin2hex(mhash($algo, \"test\")));\nvar_dump($algo);\n?>")).toMatchSnapshot();
  });
});
