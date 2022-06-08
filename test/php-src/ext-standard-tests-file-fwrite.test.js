// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/fwrite.phpt
  it("fwrite() tests", function () {
    expect(parser.parseCode("<?php\n$filename = __DIR__.\"/fwrite.dat\";\n$fp = fopen($filename, \"w\");\nvar_dump(fwrite($fp, \"\"));\nfclose($fp);\n$fp = fopen($filename, \"r\");\nvar_dump(fwrite($fp, \"data\"));\n$fp = fopen($filename, \"w\");\nvar_dump(fwrite($fp, \"data\", -1));\nvar_dump(fwrite($fp, \"data\", 100000));\nfclose($fp);\nvar_dump(fwrite($fp, \"data\", -1));\nvar_dump(file_get_contents($filename));\n@unlink($filename);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
