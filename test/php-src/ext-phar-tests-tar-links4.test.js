// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/tar/links4.phpt
  it("Phar: tar with link to root directory file from root directory file", function () {
    expect(parser.parseCode("<?php\ntry {\n    $p = new PharData(__DIR__ . '/files/tinylink.tar');\n} catch (Exception $e) {\n    echo $e->getMessage() . \"\\n\";\n}\necho $p['file.txt']->getContent();\necho $p['link.txt']->getContent();\n?>")).toMatchSnapshot();
  });
});
