// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/hash/tests/new-context.phpt
  it("Hash: Attempt to instantiate a HashContext directly", function () {
    expect(parser.parseCode("<?php\ntry {\n  new HashContext;\n} catch (Error $e) {\n  echo \"Exception: {$e->getMessage()}\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
