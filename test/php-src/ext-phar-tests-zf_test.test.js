// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/zf_test.phpt
  it("Phar: test broken app", function () {
    expect(parser.parseCode("<?php\n$file = \"zfapp\";\n$orig_file = __DIR__ . \"/files/$file.tgz\";\n$tgz_file = __DIR__ . \"/$file.tgz\";\n$phar_file = __DIR__ . \"/$file.phar.tar.gz\";\ncopy($orig_file, $tgz_file);\n$phar = new PharData($tgz_file);\n$phar = $phar->convertToExecutable();\n$phar = new Phar($phar_file);\n$phar->startBuffering();\n$phar->setStub(\"<?php\nPhar::interceptFileFuncs();\nPhar::webPhar('$file.phar', 'html/index.php');\necho 'BlogApp is intended to be executed from a web browser\\n';\nexit -1;\n__HALT_COMPILER();\n\");\n$phar->stopBuffering();\nforeach(new RecursiveIteratorIterator($phar) as $path) {\n    echo str_replace('\\\\', '/', $path->getPathName()) . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
