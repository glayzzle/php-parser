// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcntl/tests/signal_closure_handler.phpt
  it("Closures as a signal handler", function () {
    expect(parser.parseCode("<?php\ndeclare (ticks = 1);\npcntl_signal(SIGTERM, function ($signo) { echo \"Signal handler called!\\n\"; });\necho \"Start!\\n\";\nposix_kill(posix_getpid(), SIGTERM);\n$i = 0; // dummy\necho \"Done!\\n\";\n?>")).toMatchSnapshot();
  });
});
