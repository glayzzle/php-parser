// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/hash/tests/bug81714.phpt
  it("Bug #81714 (segfault when serializing finalized HashContext)", function () {
    expect(parser.parseCode("<?php\n$h = hash_init('md5');\nhash_final($h);\ntry {\n    serialize($h);\n} catch (Exception $ex) {\n    var_dump($ex->getMessage());\n}\n?>")).toMatchSnapshot();
  });
});
