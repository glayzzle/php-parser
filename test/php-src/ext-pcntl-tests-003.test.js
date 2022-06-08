// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcntl/tests/003.phpt
  it("pcntl: SIG_BLOCK, SIG_UNBLOCK, SIG_SETMASK", function () {
    expect(parser.parseCode("<?php\n// Clear mask\npcntl_sigprocmask(SIG_SETMASK, array(), $prev);\npcntl_sigprocmask(SIG_BLOCK, array(SIGCHLD,SIGTERM), $old);\nvar_dump(count($old));\npcntl_sigprocmask(SIG_BLOCK, array(SIGINT), $old);\nvar_dump(count($old));\npcntl_sigprocmask(SIG_UNBLOCK, array(SIGINT), $old);\nvar_dump(count($old));\npcntl_sigprocmask(SIG_SETMASK, array(SIGINT), $old);\nvar_dump(count($old));\npcntl_sigprocmask(SIG_SETMASK, array(), $old);\nvar_dump(count($old));\n// Restore previous mask\npcntl_sigprocmask(SIG_SETMASK, $prev, $old);\nvar_dump(count($old));\n?>")).toMatchSnapshot();
  });
});
