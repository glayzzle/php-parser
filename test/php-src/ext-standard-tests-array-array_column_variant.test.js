// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_column_variant.phpt
  it("Test array_column() function: variant functionality", function () {
    expect(parser.parseCode("<?php\n/* Array from Bug Request #64493 test script */\n$rows = array(\n  456 => array('id' => '3', 'title' => 'Foo', 'date' => '2013-03-25'),\n  457 => array('id' => '5', 'title' => 'Bar', 'date' => '2012-05-20'),\n);\necho \"-- pass null as second parameter to get back all columns indexed by third parameter --\\n\";\nvar_dump(array_column($rows, null, 'id'));\necho \"-- pass null as second parameter and bogus third param to get back zero-indexed array of all columns --\\n\";\nvar_dump(array_column($rows, null, 'foo'));\necho \"-- pass null as second parameter and no third param to get back array_values(input) --\\n\";\nvar_dump(array_column($rows, null));\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
