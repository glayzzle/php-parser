// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/tar/delete_in_phar_confirm.phpt
  it("Phar: delete a file within a tar-based .phar (confirm disk file is changed)", function () {
    expect(parser.parseCode("<?php\n$fname = __DIR__ . '/' . basename(__FILE__, '.php') . '.phar.tar';\n$alias = 'phar://' . $fname;\n$phar = new Phar($fname);\n$phar['a.php'] = '<?php echo \"This is a\\n\"; ?>';\n$phar['b.php'] = '<?php echo \"This is b\\n\"; ?>';\n$phar['b/c.php'] = '<?php echo \"This is b/c\\n\"; ?>';\n$phar->setStub('<?php __HALT_COMPILER(); ?>');\n$phar->stopBuffering();\ninclude $alias . '/a.php';\ninclude $alias . '/b.php';\ninclude $alias . '/b/c.php';\n$md5 = md5_file($fname);\nunlink($alias . '/b/c.php');\nclearstatcache();\n$md52 = md5_file($fname);\nif ($md5 == $md52) echo 'file was not modified';\n?>\n===AFTER===\n<?php\ninclude 'phar://' . __DIR__ . '/' . basename(__FILE__, '.php') . '.phar.tar/a.php';\ninclude 'phar://' . __DIR__ . '/' . basename(__FILE__, '.php') . '.phar.tar/b.php';\ninclude 'phar://' . __DIR__ . '/' . basename(__FILE__, '.php') . '.phar.tar/b/c.php';\n?>")).toMatchSnapshot();
  });
});
