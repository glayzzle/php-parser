// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/bug45303.phpt
  it("Bug #45303 (Opening php:// wrapper in append mode results in a warning)", function () {
    expect(parser.parseCode("<?php\n$fd = fopen(\"php://stdout\",\"a\");\nvar_dump($fd);\nvar_dump(fseek($fd, 1024*1024, SEEK_SET));\n?>")).toMatchSnapshot();
  });
});
