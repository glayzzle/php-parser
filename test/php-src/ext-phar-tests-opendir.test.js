// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/opendir.phpt
  it("Phar: test opendir() interception", function () {
    expect(parser.parseCode("<?php\n$fname = __DIR__ . '/' . basename(__FILE__, '.php') . '.phar.php';\n$a = new Phar($fname);\n$a['index.php'] = '<?php\n$a = opendir(\"dir\");\nif ($a) {\n    while (false !== ($e = readdir($a))) {\n        echo $e;\n    }\n}\n?>';\n$a['dir/file1.txt'] = 'hi';\n$a['dir/file2.txt'] = 'hi2';\n$a['dir/file3.txt'] = 'hi3';\n$a->setStub('<?php\nPhar::interceptFileFuncs();\nset_include_path(\"phar://\" . __FILE__);\ninclude \"index.php\";\n__HALT_COMPILER();');\ninclude $fname;\necho \"\\n\";\nopendir('phar://');\nopendir('phar://hi.phar');\n?>")).toMatchSnapshot();
  });
});
