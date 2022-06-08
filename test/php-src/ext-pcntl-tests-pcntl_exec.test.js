// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcntl/tests/pcntl_exec.phpt
  it("pcntl_exec()", function () {
    expect(parser.parseCode("<?php\necho \"ok\\n\";\npcntl_exec(getenv(\"TEST_PHP_EXECUTABLE\"), ['-n']);\necho \"nok\\n\";\n?>")).toMatchSnapshot();
  });
});
