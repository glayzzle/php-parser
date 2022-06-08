// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/libxml/tests/001.phpt
  it("libxml_use_internal_errors()", function () {
    expect(parser.parseCode("<?php\nvar_dump(libxml_use_internal_errors(false));\nvar_dump(libxml_use_internal_errors(true));\nvar_dump(libxml_use_internal_errors());\nvar_dump(libxml_get_errors());\nvar_dump(libxml_get_last_error());\nvar_dump(libxml_clear_errors());\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
