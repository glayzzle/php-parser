// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/windows_links/bug78862.phpt
  it("Bug #78862 (link() silently truncates after a null byte on Windows)", function () {
    expect(parser.parseCode("<?php\nfile_put_contents(__DIR__ . '/bug78862.target', 'foo');\nvar_dump(link(__DIR__ . \"/bug78862.target\\0more\", __DIR__ . \"/bug78862.link\\0more\"));\nvar_dump(file_exists(__DIR__ . '/bug78862.link'));\n?>")).toMatchSnapshot();
  });
});
