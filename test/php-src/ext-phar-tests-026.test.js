// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/026.phpt
  it("Phar: phar:// require from within", function () {
    expect(parser.parseCode("<?php\n$fname = __DIR__ . '/' . basename(__FILE__, '.php') . '.phar.php';\n$pname = 'phar://' . $fname;\n$file = \"<?php __HALT_COMPILER(); ?>\";\n$files = array();\n$files['a.php']   = '<?php echo \"This is a\\n\"; require \\''.$pname.'/b.php\\'; ?>';\n$files['b.php']   = '<?php echo \"This is b\\n\"; require \\''.$pname.'/b/c.php\\'; ?>';\n$files['b/c.php'] = '<?php echo \"This is b/c\\n\"; require \\''.$pname.'/b/d.php\\'; ?>';\n$files['b/d.php'] = '<?php echo \"This is b/d\\n\"; require \\''.$pname.'/e.php\\'; ?>';\n$files['e.php']   = '<?php echo \"This is e\\n\"; ?>';\ninclude 'files/phar_test.inc';\nrequire $pname . '/a.php';\n?>")).toMatchSnapshot();
  });
});
