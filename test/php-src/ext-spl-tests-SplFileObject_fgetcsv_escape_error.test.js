// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/SplFileObject_fgetcsv_escape_error.phpt
  it("SplFileObject::fgetcsv with alternative delimiter", function () {
    expect(parser.parseCode("<?php\n$fp = fopen('SplFileObject__fgetcsv8.csv', 'w+');\nfwrite($fp, '\"aaa\",\"b\"\"bb\",\"ccc\"');\nfclose($fp);\n$fo = new SplFileObject('SplFileObject__fgetcsv8.csv');\ntry {\n    var_dump($fo->fgetcsv(',', '\"', 'invalid'));\n} catch (ValueError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
