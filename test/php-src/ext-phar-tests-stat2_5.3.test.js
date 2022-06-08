// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/stat2_5.3.phpt
  it("Phar: test stat function interceptions and is_file/is_link edge cases (PHP 5.3+)", function () {
    expect(parser.parseCode("<?php\nPhar::interceptFileFuncs();\nvar_dump(is_file(__FILE__));\n$fname2 = __DIR__ . '/' . basename(__FILE__, '.php') . '.tar';\n$fname3 = __DIR__ . '/' . basename(__FILE__, '.php') . '.phar.tar';\ncopy(__DIR__ . '/tar/files/links.tar', $fname2);\n$a = new PharData($fname2);\n$b = $a->convertToExecutable(Phar::TAR, Phar::NONE, '.phar.tar');\nunset($a);\nPhar::unlinkArchive($fname2);\n$b['foo/stat.php'] = '<?php\necho \"is_link\\n\";\nvar_dump(is_link(\"./stat.php\"),is_file(\"./stat.php\"), is_link(\"./oops\"), is_file(\"./oops\"));\nvar_dump(is_link(\"testit/link\"), filetype(\"testit/link\"), filetype(\"testit\"), is_file(\"testit/link\"));\necho \"not found\\n\";\nvar_dump(is_link(\"notfound\"));\necho \"dir\\n\";\nvar_dump(is_dir(\"./bar\"), is_file(\"foo/bar/blah\"));\n?>';\n$b->addEmptyDir('foo/bar/blah');\n$b->setStub('<?php\ninclude \"phar://\" . __FILE__ . \"/foo/stat.php\";\n__HALT_COMPILER();');\ninclude $fname3;\n?>")).toMatchSnapshot();
  });
});
