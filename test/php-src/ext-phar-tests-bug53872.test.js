// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/bug53872.phpt
  it("bug#53872 (internal corruption of phar)", function () {
    expect(parser.parseCode("<?php\n$p=new Phar('bug53872-phar.phar');\n$p->buildFromDirectory(__DIR__ . \"/bug53872/\");\n$p->setStub('<?php __HALT_COMPILER();?\\>');\n$p->compressFiles(Phar::GZ);\nprint(file_get_contents('phar://bug53872-phar.phar/first.txt'));\nprint(file_get_contents('phar://bug53872-phar.phar/second.txt'));\nprint(file_get_contents('phar://bug53872-phar.phar/third.txt'));\n?>")).toMatchSnapshot();
  });
});
