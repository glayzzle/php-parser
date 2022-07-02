// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/bug39863.phpt
  it("Bug #39863 (file_exists() silently truncates after a null byte)", function () {
    expect(parser.parseCode("<?php\n$filename = __FILE__ . chr(0). \".ridiculous\";\nvar_dump(file_exists($filename));\n?>")).toMatchSnapshot();
  });
});
