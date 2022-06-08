// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/phar_oo_iswriteable.phpt
  it("Phar::isWriteable", function () {
    expect(parser.parseCode("<?php\n$fname = __DIR__ . '/' . basename(__FILE__, '.php') . '.1.phar.php';\n$fname2 = __DIR__ . '/' . basename(__FILE__, '.php') . '.tar';\n$pname = 'phar://hio';\n$file = '<?php include \"' . $pname . '/a.php\"; __HALT_COMPILER(); ?>';\n$files = array();\n$files['a.php']   = '<?php echo \"This is a\\n\"; include \"'.$pname.'/b.php\"; ?>';\n$files['dir/'] = '';\n$hasdir = 1;\ninclude 'files/phar_test.inc';\n$a = new Phar($fname);\n$b = new PharData($fname2);\n$b['test'] = 'hi';\nvar_dump($a['a.php']->isWritable());\nvar_dump($a['a.php']->isReadable());\n$a['a.php']->chmod(000);\nvar_dump($a['a.php']->isWritable());\nvar_dump($a['a.php']->isReadable());\n$a['a.php']->chmod(0666);\nvar_dump($a['a.php']->isWritable());\nvar_dump($a['a.php']->isReadable());\nini_set('phar.readonly',1);\nclearstatcache();\nvar_dump($a['a.php']->isWritable());\nvar_dump($a['a.php']->isReadable());\nini_set('phar.readonly',0);\nclearstatcache();\nvar_dump($a['a.php']->isWritable());\nvar_dump($a['a.php']->isReadable());\n?>\narchive\n<?php\nini_set('phar.readonly',0);\n$p = new Phar('doesnotexisthere.phar');\nvar_dump($p->isWritable());\nclearstatcache();\nvar_dump($a->isWritable());\nvar_dump($b->isWritable());\nini_set('phar.readonly',1);\nclearstatcache();\nvar_dump($a->isWritable());\nvar_dump($b->isWritable());\nchmod($fname2, 000);\nclearstatcache();\nvar_dump($a->isWritable());\nvar_dump($b->isWritable());\nchmod($fname2, 0666);\n?>")).toMatchSnapshot();
  });
});
