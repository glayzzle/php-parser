// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/cli/tests/cli_set_process_title_basic.phpt
  it("cli_set_process_title() function : basic functionality", function () {
    expect(parser.parseCode("<?php\nif (cli_set_process_title(\"title\") === true &&\n    cli_get_process_title() === \"title\")\n  echo \"Successfully set title\\n\";\n?>")).toMatchSnapshot();
  });
});
