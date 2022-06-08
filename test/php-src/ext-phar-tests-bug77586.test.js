// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/bug77586.phpt
  it("Bug #77586 Symbolic link names in tar-formatted phar must be less than 100 bytes.", function () {
    expect(parser.parseCode("<?php\n$dir = __DIR__.\"/bug77586\";\n$phar = new PharData($dir . \"/bug77586.tar\");\n$phar->buildFromDirectory($dir . \"/files\");\n?>")).toMatchSnapshot();
  });
});
