// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/phar_oo_009.phpt
  it("Phar object: iterating via SplFileObject and reading csv", function () {
    expect(parser.parseCode("<?php\n$pharconfig = 2;\nrequire_once 'files/phar_oo_test.inc';\n$phar = new Phar($fname);\n$phar->setInfoClass('SplFileObject');\n$f = $phar['a.csv'];\n$f->setFlags(SplFileObject::SKIP_EMPTY | SplFileObject::DROP_NEW_LINE);\nforeach($f as $k => $v)\n{\n    echo \"$k=>$v\\n\";\n}\n?>\n===CSV===\n<?php\n$f->setFlags(SplFileObject::SKIP_EMPTY | SplFileObject::DROP_NEW_LINE | SplFileObject::READ_CSV);\nforeach($f as $k => $v)\n{\n    echo \"$k=>\" . join('|', $v) . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
