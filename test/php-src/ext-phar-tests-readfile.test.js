// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/readfile.phpt
  it("Phar: test readfile() interception", function () {
    expect(parser.parseCode("<?php\n$fname = __DIR__ . '/' . basename(__FILE__, '.php') . '.phar.php';\n$a = new Phar($fname);\n$a['index.php'] = '<?php\nreadfile(\"dir/file1.txt\");\nreadfile(\"file1.txt\", true);\n?>';\n$a['dir/file1.txt'] = 'hi';\n$a['dir/file2.txt'] = 'hi2';\n$a['dir/file3.txt'] = 'hi3';\n$a->setStub('<?php\nPhar::interceptFileFuncs();\nset_include_path(\"phar://\" . __FILE__ . \"/dir\" . PATH_SEPARATOR . \"phar://\" . __FILE__);\ninclude \"index.php\";\n__HALT_COMPILER();');\ninclude $fname;\n?>\n===DONE===")).toMatchSnapshot();
  });
});
