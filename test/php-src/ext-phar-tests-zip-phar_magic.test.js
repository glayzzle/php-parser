// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/zip/phar_magic.phpt
  it("Phar: include/fopen magic zip-based", function () {
    expect(parser.parseCode("<?php\n$fname = __DIR__ . '/' . basename(__FILE__, '.php') . '.phar.zip.php';\n$pname = __DIR__ . '/' . basename(__FILE__, '.php') . '.phar.zip.php';\n$p = new Phar($fname);\nvar_dump($p->isFileFormat(Phar::ZIP));\n$p['a'] = '<?php include \"b/c.php\";' . \"\\n\";\n$p['b/c.php'] = '<?php echo \"in b\\n\";$a = fopen(\"a\", \"r\", true);echo stream_get_contents($a);fclose($a);include __DIR__ . \"/../d\";';\n$p['d'] = \"in d\\n\";\n$p->setStub('<?php\nvar_dump(__FILE__);\nvar_dump(substr(__FILE__, 0, 4) != \"phar\");\nset_include_path(\"phar://\" . __FILE__);\ninclude \"phar://\" . __FILE__ . \"/a\";\n__HALT_COMPILER();');\ninclude $pname;\n?>")).toMatchSnapshot();
  });
});
