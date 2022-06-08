// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/SplFileObject_fgetcsv_escape_default.phpt
  it("SplFileObject::fgetcsv with default escape character", function () {
    expect(parser.parseCode("<?php\n$fp = fopen('SplFileObject__fgetcsv7.csv', 'w+');\nfwrite($fp, '\"aa\\\"\",\"bb\",\"\\\"c\"');\nfclose($fp);\n$fo = new SplFileObject('SplFileObject__fgetcsv7.csv');\nvar_dump($fo->fgetcsv());\n?>")).toMatchSnapshot();
  });
});
