// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/SplFileObject_fgetcsv_delimiter_error.phpt
  it("SplFileObject::fgetcsv with alternative delimiter", function () {
    expect(parser.parseCode("<?php\n$fp = fopen('SplFileObject__fgetcsv3.csv', 'w+');\nfputcsv($fp, array(\n    'field1',\n    'field2',\n    'field3',\n    5\n), '|');\nfclose($fp);\n$fo = new SplFileObject('SplFileObject__fgetcsv3.csv');\ntry {\n    var_dump($fo->fgetcsv('invalid'));\n} catch (ValueError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
