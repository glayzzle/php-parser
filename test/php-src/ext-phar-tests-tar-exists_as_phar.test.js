// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/tar/exists_as_phar.phpt
  it("Phar: phar-based phar named with \".tar\" fails", function () {
    expect(parser.parseCode("<?php\n$fname = __DIR__ . '/' . basename(__FILE__, '.php') . '.phar';\n$tname = __DIR__ . '/' . basename(__FILE__, '.php') . '.phar.tar';\n$alias = 'phar://hio';\n$phar = new Phar($fname);\n$phar['a.php'] = '<?php echo \"This is a\\n\"; include \"'.$alias.'/b.php\"; ?>';\n$phar->setAlias('hio');\n$phar->addEmptyDir('test');\n$phar->stopBuffering();\ncopy($fname, $tname);\n$phar->setAlias('hio2');\ntry {\n    $p = new Phar($tname);\n} catch (Exception $e) {\n    echo $e->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
