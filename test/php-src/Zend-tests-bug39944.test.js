// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug39944.phpt
  it("Bug #39944 (References broken)", function () {
    expect(parser.parseCode("<?php\n$intTheValue = 0;\nfunction &getValue() {\n    global $intTheValue;\n    return $intTheValue;\n}\nfunction setValue(&$int, $iNewValue) {\n    $int = $iNewValue;\n}\nsetValue(getValue(), 10);\necho \"intTheValue = {$intTheValue}\\n\";\n$b = &$intTheValue;\nsetValue(getValue(), 10);\necho \"intTheValue = {$intTheValue}\\n\";\n/****/\n$arrTheArray = array();\nfunction &getArray() {\n    global $arrTheArray;\n    return $arrTheArray;\n}\nfunction addToArray(&$arr, $strToAdd) {\n    $arr[] = $strToAdd;\n}\naddToArray(getArray(), \"xx1\");\n$a = getArray();\naddToArray($a, \"xx2\");\n$b = &$arrTheArray;\naddToArray($b, \"xx3\");\naddToArray(getArray(), \"xx4\");\n$a = getArray();\naddToArray($a, \"xx5\");\necho \"arrTheArray = \" . print_r($arrTheArray, 1);\n/****/\nclass RefTest {\n    protected $arr;\n    function Add($strToAdd) {\n        $this->addToArray($this->getArray(), $strToAdd);\n    }\n    function &getArray() {\n        if (!$this->arr)\n            $this->arr = array();\n        return $this->arr;\n    }\n    private function addToArray(&$arr, $strToAdd) {\n        $arr[] = $strToAdd;\n    }\n}\n$objRefTest = new RefTest();\n$objRefTest->Add(\"xx1\");\n$objRefTest->Add(\"xx2\");\n$objRefTest->Add(\"xx3\");\necho \"objRefTest->getArray() = \" . print_r($objRefTest->getArray(), 1);\n?>")).toMatchSnapshot();
  });
});
