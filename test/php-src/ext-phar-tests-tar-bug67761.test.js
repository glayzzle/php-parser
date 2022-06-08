// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/tar/bug67761.phpt
  it("Bug #67761 (Phar::mapPhar fails for Phars inside a path containing \".tar\")", function () {
    expect(parser.parseCode("<?php\necho \"Test\\n\";\ninclude __DIR__.\"/files/bug67761.tar/bug67761.phar\";\n?>")).toMatchSnapshot();
  });
});
