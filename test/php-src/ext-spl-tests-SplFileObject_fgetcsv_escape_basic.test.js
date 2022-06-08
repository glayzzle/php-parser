// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/SplFileObject_fgetcsv_escape_basic.phpt
  it("SplFileObject::fgetcsv with alternative delimiter", function () {
    expect(parser.parseCode("<?php\n$fp = fopen('SplFileObject__fgetcsv6.csv', 'w+');\nfwrite($fp, '\"aaa\",\"b\"\"bb\",\"ccc\"');\nfclose($fp);\n$fo = new SplFileObject('SplFileObject__fgetcsv6.csv');\nvar_dump($fo->fgetcsv(',', '\"', '\"'));\n?>")).toMatchSnapshot();
  });
});
