// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/030.phpt
  it("Phar::loadPhar ignoring alias", function () {
    expect(parser.parseCode("<?php\n$fname = __DIR__ . '/' . basename(__FILE__, '.php') . '.phar.php';\n$pname = 'phar://' . $fname;\n$file = '<?php include \"' . $pname . '/a.php\"; __HALT_COMPILER(); ?>';\n$files = array();\n$files['a.php']   = '<?php echo \"This is a\\n\"; include \\''.$pname.'/b.php\\'; ?>';\n$files['b.php']   = '<?php echo \"This is b\\n\"; include \\''.$pname.'/b/c.php\\'; ?>';\n$files['b/c.php'] = '<?php echo \"This is b/c\\n\"; include \\''.$pname.'/b/d.php\\'; ?>';\n$files['b/d.php'] = '<?php echo \"This is b/d\\n\"; include \\''.$pname.'/e.php\\'; ?>';\n$files['e.php']   = '<?php echo \"This is e\\n\"; ?>';\n$files['.phar/test'] = '<?php bad boy ?>';\ninclude 'files/phar_test.inc';\nPhar::loadPhar($fname);\nrequire $pname . '/a.php';\n$p = new Phar($fname);\nvar_dump(isset($p['.phar/test']));\ntry {\n$p['.phar/test'];\n} catch (Exception $e) {\necho $e->getMessage(),\"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
