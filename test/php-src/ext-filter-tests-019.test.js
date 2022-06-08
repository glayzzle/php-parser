// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/filter/tests/019.phpt
  it("filter_var() & FILTER_VALIDATE_IP and weird data", function () {
    expect(parser.parseCode("<?php\nvar_dump(filter_var(\"....\", FILTER_VALIDATE_IP));\nvar_dump(filter_var(\"...\", FILTER_VALIDATE_IP));\nvar_dump(filter_var(\"..\", FILTER_VALIDATE_IP));\nvar_dump(filter_var(\".\", FILTER_VALIDATE_IP));\nvar_dump(filter_var(\"1.1.1.1\", FILTER_VALIDATE_IP));\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
