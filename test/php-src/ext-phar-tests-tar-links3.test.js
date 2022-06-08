// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/tar/links3.phpt
  it("Phar: tar with link to absolute path", function () {
    expect(parser.parseCode("<?php\ntry {\n    $p = new PharData(__DIR__ . '/files/biglink.tar');\n} catch (Exception $e) {\n    echo $e->getMessage() . \"\\n\";\n}\necho $p['file.txt']->getContent();\necho $p['my/file']->getContent();\n?>")).toMatchSnapshot();
  });
});
