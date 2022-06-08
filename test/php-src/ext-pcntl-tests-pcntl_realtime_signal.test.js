// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcntl/tests/pcntl_realtime_signal.phpt
  it("pcntl_signal() context of realtime signal", function () {
    expect(parser.parseCode("<?php\npcntl_signal(SIGRTMIN, function ($signo, $siginfo) {\n    printf(\"got realtime signal from %s, ruid:%s\\n\", $siginfo['pid'] ?? '', $siginfo['uid'] ?? '');\n});\nposix_kill(posix_getpid(), SIGRTMIN);\npcntl_signal_dispatch();\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
