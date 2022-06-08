// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/025.phpt
  it("Phar: phar:// include (repeated names)", function () {
    expect(parser.parseCode("<?php\n$fname = __DIR__ . '/' . basename(__FILE__, '.php') . '.phar.php';\n$pname = 'phar://' . $fname;\n$file = \"<?php __HALT_COMPILER(); ?>\";\n$files = array();\n$files['a'] = '<?php echo \"This is a\\n\"; ?>';\n$files['b'] = '<?php echo \"This is b\\n\"; ?>';\n$files['b/b'] = '<?php echo \"This is b/b\\n\"; ?>';\ninclude 'files/phar_test.inc';\ninclude $pname . '/a';\ninclude $pname . '/b';\ninclude $pname . '/b/b';\n?>")).toMatchSnapshot();
  });
});
