// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/hash/tests/reuse.phpt
  it("Hash: Attempt to reuse a closed hash context", function () {
    expect(parser.parseCode("<?php\n$h = hash_init('md5');\nhash_final($h);\ntry {\n    hash_update($h, 'foo');\n}\ncatch (\\Error $e) {\n    echo $e->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
