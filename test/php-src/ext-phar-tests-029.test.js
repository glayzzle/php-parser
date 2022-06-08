// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/029.phpt
  it("Phar::loadPhar overloading alias names", function () {
    expect(parser.parseCode("<?php\n$fname1 = __DIR__ . '/' . basename(__FILE__, '.php') . '.1.phar.php';\n$fname2 = __DIR__ . '/' . basename(__FILE__, '.php') . '.2.phar.php';\n$fname = $fname1;\n$alias = '';\n$pname = 'phar://hio';\n$file = '<?php include \"' . $pname . '/a.php\"; __HALT_COMPILER(); ?>';\n$files = array();\n$files['a.php']   = '<?php echo \"This is a\\n\"; include \"'.$pname.'/b.php\"; ?>';\n$files['b.php']   = '<?php echo \"This is b\\n\"; include \"'.$pname.'/b/c.php\"; ?>';\n$files['b/c.php'] = '<?php echo \"This is b/c\\n\"; include \"'.$pname.'/b/d.php\"; ?>';\n$files['b/d.php'] = '<?php echo \"This is b/d\\n\"; include \"'.$pname.'/e.php\"; ?>';\n$files['e.php']   = '<?php echo \"This is e\\n\"; ?>';\ninclude 'files/phar_test.inc';\ncopy($fname1, $fname2);\nvar_dump(Phar::loadPhar($fname1, 'hio'));\nvar_dump(Phar::loadPhar($fname1, 'copy'));\n$a = new Phar($fname1);\ntry\n{\n    var_dump(Phar::loadPhar($fname2, 'copy'));\n}\ncatch (Exception $e)\n{\n    echo $e->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
