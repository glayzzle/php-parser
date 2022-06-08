// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/cli/tests/020.phpt
  it("CLI php --ri", function () {
    expect(parser.parseCode("<?php\n$php = getenv('TEST_PHP_EXECUTABLE');\necho `\"$php\" -n --ri this_extension_does_not_exist_568537753423`;\necho `\"$php\" -n --ri standard`;\necho \"\\nDone\\n\";\n?>")).toMatchSnapshot();
  });
});
