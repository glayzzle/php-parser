// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/tar/links5.phpt
  it("Phar: tar with relative link to subdirectory file from subdirectory file", function () {
    expect(parser.parseCode("<?php\ntry {\n    $p = new PharData(__DIR__ . '/files/subdirlink.tar');\n} catch (Exception $e) {\n    echo $e->getMessage() . \"\\n\";\n}\necho $p['hi/test.txt']->getContent();\necho $p['hi/link.txt']->getContent();\n?>")).toMatchSnapshot();
  });
});
