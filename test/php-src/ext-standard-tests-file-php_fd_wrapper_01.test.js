// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/php_fd_wrapper_01.phpt
  it("php://fd wrapper: basic test", function () {
    expect(parser.parseCode("<?php\n$f = fopen(\"php://fd/1\", \"wb\");\nfwrite($f, \"hi!\");\necho \"\\nDone.\\n\";\n?>")).toMatchSnapshot();
  });
});
