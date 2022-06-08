// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/028.phpt
  it("Phar::loadPhar", function () {
    expect(parser.parseCode("<?php\n$fname = __DIR__ . '/' . basename(__FILE__, '.php') . '.phar.php';\n$pname = 'phar://hio';\n$file = '<?php include \"' . $pname . '/a.php\"; __HALT_COMPILER(); ?>';\n$alias = '';\n$files = array();\n$files['a.php']   = '<?php echo \"This is a\\n\"; include \"'.$pname.'/b.php\"; ?>';\n$files['b.php']   = '<?php echo \"This is b\\n\"; include \"'.$pname.'/b/c.php\"; ?>';\n$files['b/c.php'] = '<?php echo \"This is b/c\\n\"; include \"'.$pname.'/b/d.php\"; ?>';\n$files['b/d.php'] = '<?php echo \"This is b/d\\n\"; include \"'.$pname.'/e.php\"; ?>';\n$files['e.php']   = '<?php echo \"This is e\\n\"; ?>';\ninclude 'files/phar_test.inc';\nPhar::loadPhar($fname, 'hio');\ninclude $fname;\necho \"======\\n\";\ninclude $pname . '/a.php';\n?>")).toMatchSnapshot();
  });
});
