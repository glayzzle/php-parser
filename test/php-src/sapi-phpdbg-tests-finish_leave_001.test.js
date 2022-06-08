// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/phpdbg/tests/finish_leave_001.phpt
  it("test finish and leave commands", function () {
    expect(parser.parseCode("<?php\nfunction foo() {\n    $other = bar();\n    return [\"hello\", $other];\n}\nfunction bar() {\n    return \"world\";\n}\nfoo();\n")).toMatchSnapshot();
  });
});
