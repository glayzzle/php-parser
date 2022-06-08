// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/test_unset.phpt
  it("Phar: ensure unset() works properly on a non-flushed phar archive", function () {
    expect(parser.parseCode("<?php\n$fname = __DIR__ . '/' . basename(__FILE__, '.php') . '.phar.php';\n$fname2 = __DIR__ . '/' . basename(__FILE__, '.php') . '.2.phar.php';\nif (file_exists($fname)) unlink($fname);\nif (file_exists($fname2)) unlink($fname2);\n$phar = new Phar($fname); // no entries, never flushed\n$phar->setAlias('first');\n$phar->setMetadata('hi');\nunset($phar);\n$phar = new Phar($fname2);\n$phar['b'] = 'whatever'; // flushed\ntry {\n   $phar->setAlias('first');\n} catch(Exception $e) {\n   echo $e->getMessage().\"\\n\";\n}\n$phar = new Phar($fname);\nvar_dump($phar->getMetadata());\nvar_dump($phar->getAlias());\nvar_dump(file_exists($fname));\n?>")).toMatchSnapshot();
  });
});
