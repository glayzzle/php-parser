// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/tar/bug71504.phpt
  it("Bug #71504: Parsing of tar file with duplicate filenames causes memory leak", function () {
    expect(parser.parseCode("<?php\n$fname = str_replace('\\\\', '/', __DIR__ . '/files/HTML_CSS-1.5.4.tgz');\ntry {\n    $tar = new PharData($fname);\n} catch(Exception $e) {\n    echo $e->getMessage() . \"\\n\";\n}\n?>\n===DONE===")).toMatchSnapshot();
  });
});
