// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/phar_dotted_path.phpt
  it("Phar: create new Phar with broken.dirname in path", function () {
    expect(parser.parseCode("<?php\n$dir = __DIR__ . '/broken.dirname';\nmkdir($dir, 0777);\n$fname = $dir . '/dotted_path.phar';\n$stub = Phar::createDefaultStub();\n$file = $stub;\n$files = array();\n$files['a'] = 'this is a';\n$files['b'] = 'this is b';\ninclude 'files/phar_test.inc';\n$phar = new Phar($fname);\nforeach ($phar as $entry) {\n    echo file_get_contents($entry).\"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
