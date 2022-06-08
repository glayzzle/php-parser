// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/file_get_contents_variation9.phpt
  it("Test file_get_contents() function : variation - linked files", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing file_get_contents() : variation ***\\n\";\n$filename = __DIR__.'/fileGetContentsVar9.tmp';\n$softlink = __DIR__.'/fileGetContentsVar9.SoftLink';\n$hardlink = __DIR__.'/fileGetContentsVar9.HardLink';\n$chainlink = __DIR__.'/fileGetContentsVar9.ChainLink';\n// create file\n$h = fopen($filename,\"w\");\n//Data should be more than the size of a link.\nfor ($i = 1; $i <= 10; $i++) {\n   fwrite($h, \"Here is a repeated amount of data\");\n}\nfclose($h);\n// link files\nlink($filename, $hardlink);\nsymlink($filename, $softlink);\nsymlink($softlink, $chainlink);\n// perform tests\nvar_dump(file_get_contents($chainlink));\nvar_dump(file_get_contents($softlink));\nvar_dump(file_get_contents($hardlink));\nunlink($chainlink);\nunlink($softlink);\nunlink($hardlink);\nunlink($filename);\necho \"\\n*** Done ***\\n\";\n?>")).toMatchSnapshot();
  });
});
