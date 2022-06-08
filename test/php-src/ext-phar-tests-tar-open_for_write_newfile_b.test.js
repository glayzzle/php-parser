// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/tar/open_for_write_newfile_b.phpt
  it("Phar: fopen a .phar for writing (new file) tar-based", function () {
    expect(parser.parseCode("<?php\n$fname = __DIR__ . '/' . basename(__FILE__, '.php') . '.phar.tar';\n$alias = 'phar://' . $fname;\n$phar = new Phar($fname);\n$phar->setStub(\"<?php __HALT_COMPILER(); ?>\");\n$files = array();\n$files['a.php'] = '<?php echo \"This is a\\n\"; ?>';\n$files['b.php'] = '<?php echo \"This is b\\n\"; ?>';\n$files['b/c.php'] = '<?php echo \"This is b/c\\n\"; ?>';\nforeach ($files as $n => $file) {\n    $phar[$n] = $file;\n}\n$phar->stopBuffering();\nini_set('phar.readonly', 1);\nvar_dump(fopen($alias . '/b/new.php', 'wb'));\ninclude $alias . '/b/c.php';\ninclude $alias . '/b/new.php';\n?>")).toMatchSnapshot();
  });
});
