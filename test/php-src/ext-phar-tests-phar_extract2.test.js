// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/phar_extract2.phpt
  it("Phar: Phar::extractTo() - .phar safety", function () {
    expect(parser.parseCode("<?php\n$fname = __DIR__ . '/tempmanifest2.phar.php';\n$pname = 'phar://' . $fname;\n$phar = new Phar($fname);\n$phar->setDefaultStub();\n$phar->setAlias('fred');\n$phar['file1.txt'] = 'hi';\n$phar['file2.txt'] = 'hi2';\n$phar['subdir/ectory/file.txt'] = 'hi3';\n$phar->mount($pname . '/mount2', __FILE__);\n$phar->addEmptyDir('one/level');\n$phar->extractTo(__DIR__ . '/extract2', 'mount2');\n$phar->extractTo(__DIR__ . '/extract2');\n$out = array();\nforeach (new RecursiveIteratorIterator(new RecursiveDirectoryIterator(__DIR__ . '/extract2', 0x00003000), RecursiveIteratorIterator::CHILD_FIRST) as $path => $file) {\n    $extracted[] = $path;\n}\nsort($extracted);\nforeach ($extracted as $out) {\n    echo \"$out\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
