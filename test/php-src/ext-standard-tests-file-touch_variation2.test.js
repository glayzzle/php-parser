// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/touch_variation2.phpt
  it("touch() - ensure touch does not delete existing file.", function () {
    expect(parser.parseCode("<?php\n$filename = __DIR__.\"/touch_variation2.dat\";\n$fp=fopen($filename,\"w\");\nfwrite ($fp,\"mydata\");\nfclose($fp);\nvar_dump(touch($filename, 101));\nvar_dump(file_get_contents($filename));\n@unlink($filename);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
