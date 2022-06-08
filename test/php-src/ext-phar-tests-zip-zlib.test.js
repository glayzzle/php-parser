// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/zip/zlib.phpt
  it("Phar: process zlib-compressed zip alias", function () {
    expect(parser.parseCode("<?php\ntry {\n    $a = new Phar(__DIR__ . '/files/zlib_alias.phar.zip');\n    var_dump($a->getAlias());\n} catch (Exception $e) {\n    echo $e->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
