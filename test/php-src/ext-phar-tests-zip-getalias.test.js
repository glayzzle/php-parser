// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/zip/getalias.phpt
  it("Phar: getAlias() with an existing phar.zip", function () {
    expect(parser.parseCode("<?php\n$fname = __DIR__ . '/' . basename(__FILE__, '.php') . '.phar.zip';\n// sanity check with a virgin phar.zip\n$phar = new Phar($fname);\nvar_dump($phar->getAlias());\nunset($phar);\ncopy(__DIR__ . '/files/metadata.phar.zip', $fname);\n// existing phar.zip, no alias set\n$phar = new Phar($fname);\nvar_dump($phar->getAlias());\n// check that default alias can be overwritten\n$phar->setAlias('jiminycricket');\nvar_dump($phar->getAlias());\nunset($phar);\n// existing phar.zip, alias set\n$phar = new Phar($fname);\nvar_dump($phar->getAlias());\n// check that alias can't be set manually\ntry {\n    $phar['.phar/alias.txt'] = 'pinocchio';\n} catch (Exception $e) {\n    echo $e->getMessage().\"\\n\";\n}\nvar_dump($phar->getAlias());\n// check that user-defined alias can be overwritten\n$phar->setAlias('pinocchio');\nvar_dump($phar->getAlias());\n?>")).toMatchSnapshot();
  });
});
