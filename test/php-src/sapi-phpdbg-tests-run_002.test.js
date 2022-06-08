// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/phpdbg/tests/run_002.phpt
  it("Stdin and escaped args being passed to run command", function () {
    expect(parser.parseCode("<?php\nvar_dump($argv);\nvar_dump(stream_get_contents(STDIN));\necho \"ok\\n\";\n")).toMatchSnapshot();
  });
});
