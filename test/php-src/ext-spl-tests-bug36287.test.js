// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug36287.phpt
  it("Bug #36287 (Segfault with SplFileInfo conversion)", function () {
    expect(parser.parseCode("<?php\n$it = new RecursiveIteratorIterator(new RecursiveDirectoryIterator(\".\"), true);\n$idx = 0;\nforeach($it as $file)\n{\n    echo \"First\\n\";\n    var_Dump($file->getFilename());\n    echo \"Second\\n\";\n    var_dump($file->getFilename());\n    if (++$idx > 1)\n    {\n        break;\n    }\n}\n?>")).toMatchSnapshot();
  });
});
