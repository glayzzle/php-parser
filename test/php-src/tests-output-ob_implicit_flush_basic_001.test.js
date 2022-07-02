// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/output/ob_implicit_flush_basic_001.phpt
  it("Test ob_implicit_flush() function : check return value (always null).", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing ob_implicit_flush() : check return value ***\\n\";\nvar_dump(ob_implicit_flush());\nvar_dump(ob_implicit_flush(true));\nvar_dump(ob_implicit_flush(false));\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
