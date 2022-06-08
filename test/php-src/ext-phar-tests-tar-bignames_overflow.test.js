// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/tar/bignames_overflow.phpt
  it("Phar: tar with huge filenames, buffer overflow", function () {
    expect(parser.parseCode("<?php\n$fname = __DIR__ . '/' . basename(__FILE__, '.php') . '.tar';\n$fname2 = __DIR__ . '/' . basename(__FILE__, '.php') . '.2.tar';\n$pname = 'phar://' . $fname;\ninclude __DIR__ . '/files/make.dangerous.tar.php.inc';\n$tar = new danger_tarmaker($fname, 'none');\n$tar->init();\n$tar->addFile(str_repeat('a', 101), 'hi');\n$tar->addFile(str_repeat('a', 255), 'hi2');\n$tar->close();\n$p1 = new PharData($fname);\nforeach ($p1 as $file) {\n    echo $file->getFileName(), \"\\n\";\n}\necho $p1['a/' . str_repeat('a', 100)]->getContent() . \"\\n\";\necho $p1[str_repeat('a', 155) . '/' . str_repeat('a', 100)]->getContent() . \"\\n\";\n?>")).toMatchSnapshot();
  });
});
