// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/bug37864.phpt
  it("Bug #37864 (file_get_contents() leaks on empty file)", function () {
    expect(parser.parseCode("<?php\n    $tmpfname = tempnam(sys_get_temp_dir(), \"emptyfile\");\n    var_dump(file_get_contents($tmpfname));\n    echo \"done.\\n\";\n    unlink($tmpfname);\n?>")).toMatchSnapshot();
  });
});
