// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_column_object_cast.phpt
  it("Test array_column() function: basic functionality", function () {
    expect(parser.parseCode("<?php\nclass ColumnKeyClass {\n    function __toString() { return 'first_name'; }\n}\nclass IndexKeyClass {\n    function __toString() { return 'id'; }\n}\n$column_key = new ColumnKeyClass();\n$index_key = new IndexKeyClass();\n// Array representing a possible record set returned from a database\n$records = array(\n    array(\n        'id' => 2135,\n        'first_name' => 'John',\n        'last_name' => 'XXX'\n    ),\n    array(\n        'id' => 3245,\n        'first_name' => 'Sally',\n        'last_name' => 'Smith'\n    ),\n);\n$firstNames = array_column($records, $column_key, $index_key);\nprint_r($firstNames);\nvar_dump($column_key);\nvar_dump($index_key);\n?>")).toMatchSnapshot();
  });
});
