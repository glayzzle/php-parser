// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/SplFileObject_fgetcsv_enclosure_basic.phpt
  it("SplFileObject::fgetcsv with alternative delimiter", function () {
    expect(parser.parseCode("<?php\n$fp = fopen('SplFileObject__fgetcsv4.csv', 'w+');\nfputcsv($fp, array(\n    'field1',\n    'field2',\n    'field3',\n    5\n), ',', '\"');\nfclose($fp);\n$fo = new SplFileObject('SplFileObject__fgetcsv4.csv');\nvar_dump($fo->fgetcsv(',', '\"'));\n?>")).toMatchSnapshot();
  });
});
