// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcntl/tests/pcntl_unshare_03.phpt
  it("pcntl_unshare() with CLONE_NEWNET", function () {
    expect(parser.parseCode("<?php\nif(posix_getuid() !== 0) {\n    pcntl_unshare(CLONE_NEWUSER);\n}\nvar_dump(gethostbyname('php.net'));\npcntl_unshare(CLONE_NEWNET);\nvar_dump(gethostbyname('php.net'));\n?>")).toMatchSnapshot();
  });
});
