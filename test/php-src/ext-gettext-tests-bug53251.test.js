// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gettext/tests/bug53251.phpt
  it("Bug #53251 (bindtextdomain with null dir doesn't return old value)", function () {
    expect(parser.parseCode("<?php\nvar_dump(is_string(bindtextdomain('foo', null)));\n$dir = bindtextdomain('foo', '.');\nvar_dump(bindtextdomain('foo', null) === $dir);\nvar_dump(bind_textdomain_codeset('foo', null));\nvar_dump(bind_textdomain_codeset('foo', 'UTF-8'));\nvar_dump(bind_textdomain_codeset('foo', null));\n?>")).toMatchSnapshot();
  });
});
