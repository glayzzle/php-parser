// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/phar_magic.phpt
  it("Phar: include/fopen magic", function () {
    expect(parser.parseCode("<?php\n$fname = __DIR__ . '/' . basename(__FILE__, '.php') . '.phar.php';\n$p = new Phar($fname);\n$p['a'] = '<?php include \"b/c.php\";' . \"\\n\";\n$p['b/c.php'] = '<?php echo \"in b\\n\";$a = fopen(\"a\", \"r\", true);echo stream_get_contents($a);fclose($a);include __DIR__ . \"/../d\";';\n$p['d'] = \"in d\\n\";\n$p->setStub('<?php\nset_include_path(\"phar://\" . __FILE__);\ninclude \"phar://\" . __FILE__ . \"/a\";\n__HALT_COMPILER();');\ninclude $fname;\n?>")).toMatchSnapshot();
  });
});
