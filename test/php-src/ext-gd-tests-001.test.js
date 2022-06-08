// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/001.phpt
  it("imagecreatefrompng() and empty/missing file", function () {
    expect(parser.parseCode("<?php\n$file = __DIR__.\"/001.test\";\n@unlink($file);\nvar_dump(imagecreatefrompng($file));\ntouch($file);\nvar_dump(imagecreatefrompng($file));\n@unlink($file);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
