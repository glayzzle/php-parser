// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/bug39367.phpt
  it("Bug #39367 (clearstatcache() doesn't clear realpath cache)", function () {
    expect(parser.parseCode("<?php\nfunction test() {\n  unlink('/tmp/1link');\n  unlink('/tmp/1tmp');\n  unlink('/tmp/testfile1');\n  file_put_contents('/tmp/testfile1', 'ok');\n  symlink('/tmp/testfile1', '/tmp/1tmp');\n  rename('/tmp/1tmp', '/tmp/1link');\n  echo file_get_contents('/tmp/1link').\"\\n\";\n  unlink('/tmp/1link');\n  clearstatcache(true);\n  echo file_get_contents('/tmp/1link').\"\\n\";\n  unlink('/tmp/1link');\n  unlink('/tmp/1tmp');\n  unlink('/tmp/testfile1');\n}\n@test();\n?>")).toMatchSnapshot();
  });
});
