// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug55445.phpt
  it("Bug #55445 (Lexer error with short open tags)", function () {
    expect(parser.parseCode("<?php $u = \"chris\"; ?><p>Welcome <?= $u ?></p>")).toMatchSnapshot();
  });
});
