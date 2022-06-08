// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/delete_in_phar.phpt
  it("Phar: delete a file within a .phar", function () {
    expect(parser.parseCode("<?php\n$fname = __DIR__ . '/' . basename(__FILE__, '.php') . '.phar.php';\n$pname = 'phar://' . $fname;\n$file = \"<?php __HALT_COMPILER(); ?>\";\n$files = array();\n$files['a.php'] = '<?php echo \"This is a\\n\"; ?>';\n$files['b.php'] = '<?php echo \"This is b\\n\"; ?>';\n$files['b/c.php'] = '<?php echo \"This is b/c\\n\"; ?>';\ninclude 'files/phar_test.inc';\ninclude $pname . '/a.php';\ninclude $pname . '/b.php';\ninclude $pname . '/b/c.php';\nunlink($pname . '/b/c.php');\n?>\n===AFTER===\n<?php\ninclude $pname . '/a.php';\ninclude $pname . '/b.php';\ninclude $pname . '/b/c.php';\n?>")).toMatchSnapshot();
  });
});
