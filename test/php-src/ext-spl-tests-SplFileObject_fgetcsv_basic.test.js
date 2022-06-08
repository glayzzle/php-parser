// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/SplFileObject_fgetcsv_basic.phpt
  it("SplFileObject::fgetcsv default path", function () {
    expect(parser.parseCode("<?php\n$fp = fopen('SplFileObject__fgetcsv1.csv', 'w+');\nfputcsv($fp, array(\n    'field1',\n    'field2',\n    'field3',\n    5\n));\nfclose($fp);\n$fo = new SplFileObject('SplFileObject__fgetcsv1.csv');\nvar_dump($fo->fgetcsv());\nvar_dump($fo->fgetcsv());\nvar_dump($fo->fgetcsv());\n?>")).toMatchSnapshot();
  });
});
