// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug42820.phpt
  it("Bug #42820 (defined() on constant with namespace prefixes tries to load class)", function () {
    expect(parser.parseCode("<?php\nnamespace ns;\nconst ok = 0;\nclass foo {\n    const ok = 0;\n}\nvar_dump(defined('ns\\\\ok'));\nvar_dump(defined('ns\\\\bug'));\nvar_dump(defined('\\\\ns\\\\ok'));\nvar_dump(defined('\\\\ns\\\\bug'));\nvar_dump(defined('ns\\\\foo::ok'));\nvar_dump(defined('ns\\\\foo::bug'));\nvar_dump(defined('\\\\ns\\\\foo::ok'));\nvar_dump(defined('\\\\ns\\\\foo::bug'));\nvar_dump(defined('ns\\\\bar::bug'));\nvar_dump(defined('\\\\ns\\\\bar::bug'));\n?>")).toMatchSnapshot();
  });
});
