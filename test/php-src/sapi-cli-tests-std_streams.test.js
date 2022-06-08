// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/cli/tests/std_streams.phpt
  it("Testing ftell() on std streams", function () {
    expect(parser.parseCode("<?php\n// These have proc_open pipes attached\nvar_dump(ftell(STDIN));\nvar_dump(ftell(STDERR));\nvar_dump(ftell(fopen(\"php://stdin\", \"r\")));\nvar_dump(ftell(fopen(\"php://stderr\", \"w\")));\n// These have a tty attached\nvar_dump(ftell(STDOUT));\nvar_dump(ftell(fopen(\"php://stdout\", \"w\")));\n?>")).toMatchSnapshot();
  });
});
