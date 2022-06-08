// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/fileinfo/tests/bug69107.phpt
  it("Bug #69107 (finfo no longer detects PHP files)", function () {
    expect(parser.parseCode("<?php\n$finfo = new finfo(FILEINFO_MIME_TYPE);\nvar_dump($finfo->buffer(\"<?php\\nclass A{}\"));\nvar_dump($finfo->buffer(\"<?php class A{}\"));\nvar_dump($finfo->buffer(\"<?php\\tclass A{}\"));\nvar_dump($finfo->buffer(\"<?php\\n\\rclass A{}\"));\n?>")).toMatchSnapshot();
  });
});
