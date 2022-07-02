// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/error_clear_last.phpt
  it("error_clear_last() tests", function () {
    expect(parser.parseCode("<?php\nvar_dump(error_get_last());\nerror_clear_last();\nvar_dump(error_get_last());\n@$a = $b;\nvar_dump(error_get_last());\nerror_clear_last();\nvar_dump(error_get_last());\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
