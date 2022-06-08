// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcntl/tests/bug73783.phpt
  it("Bug #73783: (SIG_IGN needs to be set to prevent syscals from returning early)", function () {
    expect(parser.parseCode("<?php\npcntl_signal(SIGCHLD, SIG_IGN);\nswitch(pcntl_fork()) {\n    case 0:\n        exit;\n        break;\n}\n$before = microtime(true);\nsleep(1);\nif (microtime(true) - $before >= 0.8) {\n    echo \"working\\n\";\n} else {\n    echo \"failed\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
