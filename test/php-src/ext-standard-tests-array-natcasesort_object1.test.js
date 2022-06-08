// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/natcasesort_object1.phpt
  it("Test natcasesort() function : object functionality - array of objects", function () {
    expect(parser.parseCode("<?php\n/*\n * Pass natcasesort() an array of objects to test how it re-orders them\n */\necho \"*** Testing natcasesort() : object functionality ***\\n\";\n// class declaration for string objects\nclass for_string_natcasesort\n{\n  public $class_value;\n  // initializing object member value\n  function __construct($value){\n    $this->class_value = $value;\n   }\n  // return string value\n  function __tostring() {\n   return (string)$this->class_value;\n  }\n}\n// array of string objects\n$unsorted_str_obj = array (\n  new for_string_natcasesort(\"axx\"), new for_string_natcasesort(\"t\"),\n  new for_string_natcasesort(\"w\"), new for_string_natcasesort(\"py\"),\n  new for_string_natcasesort(\"apple\"), new for_string_natcasesort(\"Orange\"),\n  new for_string_natcasesort(\"Lemon\"), new for_string_natcasesort(\"aPPle\")\n);\necho \"\\n-- Testing natcasesort() by supplying various object arrays --\\n\";\n// testing natcasesort() function by supplying string object array\nvar_dump(natcasesort($unsorted_str_obj) );\nvar_dump($unsorted_str_obj);\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
