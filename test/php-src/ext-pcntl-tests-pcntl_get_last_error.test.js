// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcntl/tests/pcntl_get_last_error.phpt
  it("Test pcntl_get_last_error()", function () {
    expect(parser.parseCode("<?php\nvar_dump(pcntl_get_last_error());\n$pid = pcntl_wait($status);\nvar_dump($pid);\nvar_dump(pcntl_get_last_error() == PCNTL_ECHILD);\n?>")).toMatchSnapshot();
  });
});
