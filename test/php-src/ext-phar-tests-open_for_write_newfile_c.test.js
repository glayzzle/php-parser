// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/open_for_write_newfile_c.phpt
  it("Phar: fopen a .phar for writing (new file)", function () {
    expect(parser.parseCode("<?php\n$fname = __DIR__ . '/' . basename(__FILE__, '.php') . '.phar.php';\n$pname = 'phar://' . $fname;\n$file = \"<?php __HALT_COMPILER(); ?>\";\n$files = array();\n$files['a.php'] = '<?php echo \"This is a\\n\"; ?>';\n$files['b.php'] = '<?php echo \"This is b\\n\"; ?>';\n$files['b/c.php'] = '<?php echo \"This is b/c\\n\"; ?>';\ninclude 'files/phar_test.inc';\nvar_dump(fopen($pname . '/b/new.php', 'wb'));\ninclude $pname . '/b/c.php';\ninclude $pname . '/b/new.php';\n?>")).toMatchSnapshot();
  });
});
