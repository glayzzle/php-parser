// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/hash/tests/hash_algos.phpt
  it("Hash: hash_algos() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing hash_algos() : basic functionality ***\\n\";\nvar_dump(hash_algos());\n?>")).toMatchSnapshot();
  });
});
