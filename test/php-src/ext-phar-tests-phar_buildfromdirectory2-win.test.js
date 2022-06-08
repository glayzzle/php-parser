// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/phar_buildfromdirectory2-win.phpt
  it("Phar::buildFromDirectory() - non-directory passed as first parameter", function () {
    expect(parser.parseCode("<?php\ntry {\n    $phar = new Phar(__DIR__ . '/buildfromdirectory2.phar');\n    $phar->buildFromDirectory(1);\n} catch (Exception $e) {\n    var_dump(get_class($e));\n    echo $e->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
