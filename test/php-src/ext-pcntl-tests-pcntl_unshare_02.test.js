// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcntl/tests/pcntl_unshare_02.phpt
  it("pcntl_unshare() with CLONE_NEWPID", function () {
    expect(parser.parseCode("<?php\nif(posix_getuid() !== 0) {\n    pcntl_unshare(CLONE_NEWUSER);\n}\nvar_dump(getmypid());\npcntl_unshare(CLONE_NEWPID);\nif(!pcntl_fork()) {\n    var_dump(getmypid());\n    exit();\n}\n?>")).toMatchSnapshot();
  });
});
