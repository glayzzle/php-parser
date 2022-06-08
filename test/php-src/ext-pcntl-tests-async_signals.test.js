// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcntl/tests/async_signals.phpt
  it("Asynchronous signal handling through VM interrupts", function () {
    expect(parser.parseCode("<?php\npcntl_async_signals(1);\npcntl_signal(SIGTERM, function ($signo) { echo \"Signal handler called!\\n\"; });\necho \"Start!\\n\";\nposix_kill(posix_getpid(), SIGTERM);\n$i = 0; // dummy\necho \"Done!\\n\";\n?>")).toMatchSnapshot();
  });
});
