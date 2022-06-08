// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/php_fd_wrapper_02.phpt
  it("php://fd wrapper: mode is ignored", function () {
    expect(parser.parseCode("<?php\n$f = fopen(\"php://fd/1\", \"rkkk\");\nfwrite($f, \"hi!\");\necho \"\\nDone.\\n\";\n?>")).toMatchSnapshot();
  });
});
