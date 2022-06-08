// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/zip/bzip2.phpt
  it("Phar: process bzip2-compressed zip entry", function () {
    expect(parser.parseCode("<?php\ntry {\n    $a = new PharData(dirname(__FILE__) . '/files/bzip2.zip');\n    foreach ($a as $entry => $file) {\n        echo $file->getContent();\n    }\n    $a = new Phar(dirname(__FILE__) . '/files/bz2_alias.phar.zip');\n    var_dump($a->getAlias());\n} catch (Exception $e) {\n    echo $e->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
