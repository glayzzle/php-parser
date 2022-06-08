// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/getenv.phpt
  it("getenv() basic tests", function () {
    expect(parser.parseCode("<?php\nvar_dump(getenv(\"FOO\"));\nvar_dump(getenv()[\"FOO\"]);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
