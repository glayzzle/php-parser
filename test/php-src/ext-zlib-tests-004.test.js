// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zlib/tests/004.phpt
  it("gzfile() with various invalid params", function () {
    expect(parser.parseCode("<?php\nvar_dump(gzfile(\"nonexistent_file_gzfile\",1));\nvar_dump(gzfile(__DIR__.\"/004.txt.gz\"));\nvar_dump(gzfile(__DIR__.\"/004.txt.gz\", 1));\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
