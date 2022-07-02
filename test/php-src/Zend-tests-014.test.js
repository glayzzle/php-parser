// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/014.phpt
  it("get_included_files() tests", function () {
    expect(parser.parseCode("<?php\nvar_dump(get_included_files());\ninclude(__DIR__.\"/014.inc\");\nvar_dump(get_included_files());\ninclude_once(__DIR__.\"/014.inc\");\nvar_dump(get_included_files());\ninclude(__DIR__.\"/014.inc\");\nvar_dump(get_included_files());\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
