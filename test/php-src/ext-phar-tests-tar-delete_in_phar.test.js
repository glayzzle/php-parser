// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/tar/delete_in_phar.phpt
  it("Phar: delete a file within a tar-based .phar", function () {
    expect(parser.parseCode("<?php\n$fname = __DIR__ . '/' . basename(__FILE__, '.php') . '.phar.tar';\n$alias = 'phar://' . $fname;\n$phar = new Phar($fname);\n$phar['a.php'] = '<?php echo \"This is a\\n\"; ?>';\n$phar['b.php'] = '<?php echo \"This is b\\n\"; ?>';\n$phar['b/c.php'] = '<?php echo \"This is b/c\\n\"; ?>';\n$phar->setStub('<?php __HALT_COMPILER(); ?>');\n$phar->stopBuffering();\ninclude $alias . '/a.php';\ninclude $alias . '/b.php';\ninclude $alias . '/b/c.php';\nunlink($alias . '/b/c.php');\n?>\n===AFTER===\n<?php\ninclude $alias . '/a.php';\ninclude $alias . '/b.php';\ninclude $alias . '/b/c.php';\n?>")).toMatchSnapshot();
  });
});
