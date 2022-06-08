// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/zip/033.phpt
  it("Phar::chmod zip-based", function () {
    expect(parser.parseCode("<?php\n$fname = __DIR__ . '/' . basename(__FILE__, '.php') . '.phar.zip';\n$fname2 = __DIR__ . '/' . basename(__FILE__, '.php') . '.2.phar.zip';\n$alias = 'phar://hio';\n$phar = new Phar($fname);\n$phar['a.php'] = '<?php echo \"This is a\\n\"; include \"'.$alias.'/b.php\"; ?>';\n$phar->setAlias('hio');\n$phar->addEmptyDir('test');\n$phar->stopBuffering();\ntry {\n    var_dump($phar['a.php']->isExecutable());\n    $phar['a.php']->chmod(0777);\n    copy($fname, $fname2);\n    $phar->setAlias('unused');\n    $phar2 = new Phar($fname2);\n    var_dump($phar2['a.php']->isExecutable());\n    $phar['a.php']->chmod(0666);\n    var_dump($phar['a.php']->isExecutable());\n    echo \"test dir\\n\";\n    var_dump($phar['test']->isDir());\n    var_dump($phar['test']->isReadable());\n    $phar['test']->chmod(0000);\n    var_dump($phar['test']->isReadable());\n    $phar['test']->chmod(0666);\n    var_dump($phar['test']->isReadable());\n} catch (Exception $e) {\n    echo $e->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
