// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_column_basic.phpt
  it("Test array_column() function: basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing array_column() : basic functionality ***\\n\";\n/* Array representing a possible record set returned from a database */\n$records = array(\n    array(\n        'id' => 1,\n        'first_name' => 'John',\n        'last_name' => 'Doe'\n    ),\n    array(\n        'id' => 2,\n        'first_name' => 'Sally',\n        'last_name' => 'Smith'\n    ),\n    array(\n        'id' => 3,\n        'first_name' => 'Jane',\n        'last_name' => 'Jones'\n    )\n);\necho \"-- first_name column from recordset --\\n\";\nvar_dump(array_column($records, 'first_name'));\necho \"-- id column from recordset --\\n\";\nvar_dump(array_column($records, 'id'));\necho \"-- last_name column from recordset, keyed by value from id column --\\n\";\nvar_dump(array_column($records, 'last_name', 'id'));\necho \"-- last_name column from recordset, keyed by value from first_name column --\\n\";\nvar_dump(array_column($records, 'last_name', 'first_name'));\necho \"\\n*** Testing multiple data types ***\\n\";\n$fh = fopen(__FILE__, 'r', true);\n$values = array(\n    array(\n        'id' => 1,\n        'value' => new stdClass\n    ),\n    array(\n        'id' => 2,\n        'value' => 34.2345\n    ),\n    array(\n        'id' => 3,\n        'value' => true\n    ),\n    array(\n        'id' => 4,\n        'value' => false\n    ),\n    array(\n        'id' => 5,\n        'value' => null\n    ),\n    array(\n        'id' => 6,\n        'value' => 1234\n    ),\n    array(\n        'id' => 7,\n        'value' => 'Foo'\n    ),\n    array(\n        'id' => 8,\n        'value' => $fh\n    )\n);\nvar_dump(array_column($values, 'value'));\nvar_dump(array_column($values, 'value', 'id'));\necho \"\\n*** Testing numeric column keys ***\\n\";\n$numericCols = array(\n    array('aaa', '111'),\n    array('bbb', '222'),\n    array('ccc', '333', -1 => 'ddd')\n);\nvar_dump(array_column($numericCols, 1));\nvar_dump(array_column($numericCols, 1, 0));\nvar_dump(array_column($numericCols, 1, 0.123));\nvar_dump(array_column($numericCols, 1, -1));\necho \"\\n*** Testing failure to find specified column ***\\n\";\nvar_dump(array_column($numericCols, 2));\nvar_dump(array_column($numericCols, 'foo'));\nvar_dump(array_column($numericCols, 0, 'foo'));\nvar_dump(array_column($numericCols, 3.14));\necho \"\\n*** Testing single dimensional array ***\\n\";\n$singleDimension = array('foo', 'bar', 'baz');\nvar_dump(array_column($singleDimension, 1));\necho \"\\n*** Testing columns not present in all rows ***\\n\";\n$mismatchedColumns = array(\n    array('a' => 'foo', 'b' => 'bar', 'e' => 'bbb'),\n    array('a' => 'baz', 'c' => 'qux', 'd' => 'aaa'),\n    array('a' => 'eee', 'b' => 'fff', 'e' => 'ggg'),\n);\nvar_dump(array_column($mismatchedColumns, 'c'));\nvar_dump(array_column($mismatchedColumns, 'c', 'a'));\nvar_dump(array_column($mismatchedColumns, 'a', 'd'));\nvar_dump(array_column($mismatchedColumns, 'a', 'e'));\nvar_dump(array_column($mismatchedColumns, 'b'));\nvar_dump(array_column($mismatchedColumns, 'b', 'a'));\necho \"\\n*** Testing use of object converted to string ***\\n\";\nclass Foo\n{\n    public function __toString()\n    {\n        return 'last_name';\n    }\n}\nclass Bar\n{\n    public function __toString()\n    {\n        return 'first_name';\n    }\n}\n$f = new Foo();\n$b = new Bar();\nvar_dump(array_column($records, $f));\nvar_dump(array_column($records, $f, $b));\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
