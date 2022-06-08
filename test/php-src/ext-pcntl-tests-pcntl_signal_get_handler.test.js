// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcntl/tests/pcntl_signal_get_handler.phpt
  it("pcntl_signal_get_handler()", function () {
    expect(parser.parseCode("<?php\nvar_dump(pcntl_signal_get_handler(SIGUSR1));\nfunction pcntl_test($signo) {}\npcntl_signal(SIGUSR1, 'pcntl_test');\nvar_dump(pcntl_signal_get_handler(SIGUSR1));\npcntl_signal(SIGUSR1, SIG_DFL);\nvar_dump(pcntl_signal_get_handler(SIGUSR1));\npcntl_signal(SIGUSR1, SIG_IGN);\nvar_dump(pcntl_signal_get_handler(SIGUSR1));\nposix_kill(posix_getpid(), SIGUSR1);\npcntl_signal_dispatch();\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
