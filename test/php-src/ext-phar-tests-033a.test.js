// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/033a.phpt
  it("Phar::chmod", function () {
    expect(parser.parseCode("<?php\n$fname = __DIR__ . '/' . basename(__FILE__, '.php') . '.1.phar.php';\n$pname = 'phar://hio';\n$file = '<?php include \"' . $pname . '/a.php\"; __HALT_COMPILER(); ?>';\n$files = array();\n$files['a.php']   = '<?php echo \"This is a\\n\"; include \"'.$pname.'/b.php\"; ?>';\ninclude 'files/phar_test.inc';\ntry {\n    $a = new Phar($fname);\n    var_dump($a['a.php']->isExecutable());\n    $a['a.php']->chmod(0777);\n    var_dump($a['a.php']->isExecutable());\n    $a['a.php']->chmod(0666);\n    var_dump($a['a.php']->isExecutable());\n} catch (Exception $e) {\n    echo $e->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
