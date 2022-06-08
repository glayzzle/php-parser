// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/phar_oo_011b.phpt
  it("Phar object: add file", function () {
    expect(parser.parseCode("<?php\ntry\n{\n    $pharconfig = 0;\n    require_once 'files/phar_oo_test.inc';\n    $phar = new Phar($fname);\n    $phar['f.php'] = 'hi';\n    var_dump(isset($phar['f.php']));\n    echo $phar['f.php'];\n    echo \"\\n\";\n}\ncatch (BadMethodCallException $e)\n{\n    echo \"Exception: \" . $e->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
