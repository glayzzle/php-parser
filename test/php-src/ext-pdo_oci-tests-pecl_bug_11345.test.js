// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_oci/tests/pecl_bug_11345.phpt
  it("PECL PDO_OCI Bug #11345 (Test invalid character set name)", function () {
    expect(parser.parseCode("<?php\n// This tests only part of PECL bug 11345.  The other part - testing\n// when the National Language Support (NLS) environment can't be\n// initialized - is very difficult to test portably.\ntry {\n    $dbh = new PDO('oci:dbname=xxx;charset=yyy', 'abc', 'def');\n}\ncatch (PDOException $e) {\n    echo 'Connection failed: ' . $e->getMessage(). \"\\n\";\n    exit;\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
