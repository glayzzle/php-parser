// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/hash/tests/hash_error.phpt
  it("Hash: hash() function : error conditions", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing hash() : error conditions ***\\n\";\necho \"\\n-- Testing hash() function with invalid hash algorithm --\\n\";\ntry {\n    hash('foo', '');\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
