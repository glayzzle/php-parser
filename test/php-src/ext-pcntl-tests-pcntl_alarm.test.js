// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcntl/tests/pcntl_alarm.phpt
  it("pcntl_alarm()", function () {
    expect(parser.parseCode("<?php\npcntl_signal(SIGALRM, function(){});\npcntl_alarm(0);\nvar_dump(pcntl_alarm(60));\nvar_dump(pcntl_alarm(1) > 0);\n$siginfo = array();\nvar_dump(pcntl_sigtimedwait(array(SIGALRM),$siginfo,2) === SIGALRM);\n?>")).toMatchSnapshot();
  });
});
