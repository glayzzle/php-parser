// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcntl/tests/pcntl_unshare_01.phpt
  it("pcntl_unshare() with CLONE_NEWUSER", function () {
    expect(parser.parseCode("<?php\n$olduid = posix_getuid();\npcntl_unshare(CLONE_NEWUSER);\n$newuid = posix_getuid();\nvar_dump($olduid === $newuid);\n?>")).toMatchSnapshot();
  });
});
