// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/tar/links.phpt
  it("Phar: tar with hard link and symbolic link", function () {
    expect(parser.parseCode("<?php\n$fname = __DIR__ . '/' . basename(__FILE__, '.php') . '.tar';\ncopy(__DIR__ . '/files/links.tar', $fname);\ntry {\n    $p = new PharData($fname);\n} catch (Exception $e) {\n    echo $e->getMessage() . \"\\n\";\n}\nvar_dump($p['testit/link']->getContent());\nvar_dump($p['testit/hard']->getContent());\nvar_dump($p['testit/file']->getContent());\n$p['testit/link'] = 'overwriting';\nvar_dump($p['testit/link']->getContent());\n?>")).toMatchSnapshot();
  });
});
