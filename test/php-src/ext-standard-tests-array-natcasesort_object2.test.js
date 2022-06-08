// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/natcasesort_object2.phpt
  it("Test natcasesort() function : object functionality - mixed visibility within objects", function () {
    expect(parser.parseCode("<?php\n/*\n * Pass natcasesort() an array of objects which have properties of different\n * visibilities to test how it re-orders the array.\n */\necho \"*** Testing natcasesort() : object functionality ***\\n\";\n// class declaration for string objects\nclass for_string_natcasesort\n{\n    public $public_class_value;\n    private $private_class_value;\n    protected $protected_class_value;\n    // initializing object member value\n    function __construct($value1, $value2,$value3){\n        $this->public_class_value = $value1;\n        $this->private_class_value = $value2;\n        $this->protected_class_value = $value3;\n    }\n    // return string value\n    function __tostring() {\n        return (string)$this->public_class_value;\n    }\n}\n// array of string objects\n$unsorted_str_obj = array (\nnew for_string_natcasesort(\"axx\",\"AXX\",\"ass\"),\nnew for_string_natcasesort(\"t\",\"eee\",\"abb\"),\nnew for_string_natcasesort(\"w\",\"W\", \"c\"),\nnew for_string_natcasesort(\"py\",\"PY\", \"pt\"),\n);\necho \"\\n-- Testing natcasesort() by supplying object arrays --\\n\";\n// testing natcasesort() function by supplying string object array\n$temp_array = $unsorted_str_obj;\nvar_dump(natcasesort($temp_array) );\nvar_dump($temp_array);\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
