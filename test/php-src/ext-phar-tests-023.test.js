// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/023.phpt
  it("Phar: phar:// file_get_contents", function () {
    expect(parser.parseCode("<?php\n$fname = __DIR__ . '/' . basename(__FILE__, '.php') . '.phar.php';\n$pname = 'phar://' . $fname;\n$file = \"<?php __HALT_COMPILER(); ?>\";\n$files = array();\n$files['a.php'] = '<?php echo \"This is a\\n\"; ?>';\n$files['b.php'] = '<?php echo \"This is b\\n\"; ?>';\n$files['b/c.php'] = '<?php echo \"This is b/c\\n\"; ?>';\ninclude 'files/phar_test.inc';\nvar_dump(file_get_contents($pname . '/a.php'));\nvar_dump(file_get_contents($pname . '/b.php'));\nvar_dump(file_get_contents($pname . '/b/c.php'));\n?>")).toMatchSnapshot();
  });
});
