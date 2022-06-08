// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/cli/tests/cli_get_process_title_basic.phpt
  it("cli_get_process_title() function : basic functionality", function () {
    expect(parser.parseCode("<?php\nif (cli_set_process_title(\"title\") && cli_get_process_title() === \"title\")\n  echo \"Title correctly retrieved!\\n\";\n?>")).toMatchSnapshot();
  });
});
