// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug64782.phpt
  it("Bug #64782: SplFileObject constructor make $context optional / give it a default value", function () {
    expect(parser.parseCode("<?php\nvar_dump(new SplFileObject(__FILE__, \"r\", false, null));\n?>")).toMatchSnapshot();
  });
});
