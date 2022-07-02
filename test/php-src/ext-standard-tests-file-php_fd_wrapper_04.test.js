// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/php_fd_wrapper_04.phpt
  it("php://fd wrapper: invalid file descriptor", function () {
    expect(parser.parseCode("<?php\nfopen(\"php://fd/1023\", \"w\");\necho \"\\nDone.\\n\";\n?>")).toMatchSnapshot();
  });
});
