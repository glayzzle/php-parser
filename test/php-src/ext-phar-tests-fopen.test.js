// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/fopen.phpt
  it("Phar: test fopen() interception", function () {
    expect(parser.parseCode("<?php\nPhar::interceptFileFuncs();\n$a = fopen(__FILE__, 'rb'); // this satisfies 1 line of code coverage\nfclose($a);\n$fname = __DIR__ . '/' . basename(__FILE__, '.php') . '.phar.php';\n$a = new Phar($fname);\n$a['index.php'] = '<?php\n$a = fopen(\"dir/file1.txt\", \"r\");\necho fread($a, 2);\nfclose($a);\n$a = fopen(\"file1.txt\", \"r\", true);\necho fread($a, 2);\nfclose($a);\n$a = fopen(\"notfound.txt\", \"r\", true);\n?>';\n$a['dir/file1.txt'] = 'hi';\n$a['dir/file2.txt'] = 'hi2';\n$a['dir/file3.txt'] = 'hi3';\n$a->setStub('<?php\nset_include_path(\"phar://\" . __FILE__ . \"/dir\" . PATH_SEPARATOR . \"phar://\" . __FILE__);\ninclude \"index.php\";\n__HALT_COMPILER();');\ninclude $fname;\n?>")).toMatchSnapshot();
  });
});
