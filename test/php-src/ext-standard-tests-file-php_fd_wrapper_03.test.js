// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/php_fd_wrapper_03.phpt
  it("php://fd wrapper: bad syntax", function () {
    expect(parser.parseCode("<?php\nfopen(\"php://fd\", \"w\");\nfopen(\"php://fd/\", \"w\");\nfopen(\"php://fd/-2\", \"w\");\nfopen(\"php://fd/1/\", \"w\");\necho \"\\nDone.\\n\";\n?>")).toMatchSnapshot();
  });
});
