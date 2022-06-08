// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcntl/tests/pcntl_signal_dispatch.phpt
  it("pcnt_signal_dispatch()", function () {
    expect(parser.parseCode("<?php\npcntl_signal(SIGTERM, function ($signo) { echo \"Signal handler called!\\n\"; });\necho \"Start!\\n\";\nposix_kill(posix_getpid(), SIGTERM);\n$i = 0; // dummy\npcntl_signal_dispatch();\necho \"Done!\\n\";\n?>")).toMatchSnapshot();
  });
});
