// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/033.phpt
  it("Phar::chmod", function () {
    expect(parser.parseCode("<?php\n$fname = __DIR__ . '/' . basename(__FILE__, '.php') . '.1.phar.php';\n$pname = 'phar://hio';\n$file = '<?php include \"' . $pname . '/a.php\"; __HALT_COMPILER(); ?>';\n$files = array();\n$files['a.php']   = '<?php echo \"This is a\\n\"; include \"'.$pname.'/b.php\"; ?>';\n$files['dir/'] = '';\n$hasdir = 1;\ninclude 'files/phar_test.inc';\n$a = new Phar($fname);\nvar_dump($a['a.php']->isExecutable());\n$a['a.php']->chmod(0777);\nvar_dump($a['a.php']->isExecutable());\n$a['a.php']->chmod(0666);\nvar_dump($a['a.php']->isExecutable());\necho \"test dir\\n\";\nvar_dump($a['dir']->isDir());\nvar_dump($a['dir']->isReadable());\n$a['dir']->chmod(000);\nvar_dump($a['dir']->isReadable());\n$a['dir']->chmod(0666);\nvar_dump($a['dir']->isReadable());\n?>")).toMatchSnapshot();
  });
});
