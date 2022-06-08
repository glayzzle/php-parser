// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/bug71683.phpt
  it("Bug #71683 Null pointer dereference in zend_hash_str_find_bucket", function () {
    expect(parser.parseCode("<?php\nob_start();\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
