// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/fputcsv_002.phpt
  it("fputcsv(): Checking data after calling the function", function () {
    expect(parser.parseCode("<?php\n$file = __DIR__ .'/fgetcsv-test.csv';\n$data = array(1, 2, 'foo', 'haha', array(4, 5, 6), 1.3, null);\n$fp = fopen($file, 'w');\nfputcsv($fp, $data);\nvar_dump($data);\n?>")).toMatchSnapshot();
  });
});
