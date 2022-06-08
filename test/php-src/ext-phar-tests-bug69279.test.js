// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/bug69279.phpt
  it("Bug #69279 (Compressed ZIP Phar extractTo() creates garbage files)", function () {
    expect(parser.parseCode("<?php\n$w = new Phar(__DIR__ . \"/bug69279.phar.zip\");\n$w[\"bug69279.txt\"] = \"Sample content.\";\n$w->compressFiles(Phar::GZ);\nunset($w);\n$r = new Phar(__DIR__ . \"/bug69279.phar.zip\");\nvar_dump($r[\"bug69279.txt\"]->isCompressed());\n$r->extractTo(__DIR__, NULL, TRUE);\nvar_dump(file_get_contents(__DIR__ . \"/bug69279.txt\"));\n?>")).toMatchSnapshot();
  });
});
