// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/output/bug60322.phpt
  it("Bug #60322 (ob_get_clean() now raises an E_NOTICE if no buffers exist)", function () {
    expect(parser.parseCode("<?php\nob_start();\nwhile(@ob_end_clean());\nvar_dump(ob_get_clean());\n?>")).toMatchSnapshot();
  });
});
