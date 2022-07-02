// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug33512.phpt
  it("Bug #33512 (unset() overloaded properties doesn't work)", function () {
    expect(parser.parseCode("<?php\nclass TheObj {\n        public $RealVar1, $RealVar2, $RealVar3, $RealVar4;\n        public $Var = array();\n        function __set($var, $val) {\n            $this->Var[$var] = $val;\n        }\n        function __get($var) {\n            if(isset($this->Var[$var])) return $this->Var[$var];\n            else return -1;\n        }\n        function __unset($var) {\n            unset($this->Var[$var]);\n        }\n    }\n    $SomeObj = new TheObj;\n    // this will fine\n    $SomeObj->RealVar1 = 'somevalue';\n    $SomeObj->{'RealVar2'} = 'othervalue';\n    $SomeObj->{'RealVar'.(3)} = 'othervaluetoo';\n    $SomeObj->{'RealVar'.'4'} = 'anothervalue';\n    // this will fine too\n    $SomeObj->Virtual1 = 'somevalue';\n    $SomeObj->{'Virtual2'} = 'othervalue';\n    // it's can't be used since this will encounter error\n    $SomeObj->{'Virtual'.(3)} = 'othervaluetoo';\n    $SomeObj->{'Virtual'.'4'} = 'anothervalue';\n    // but this will fine, ofcourse\n    $SomeObj->Var['Virtual'.(3)] = 'othervaluetoo';\n    $SomeObj->Var['Virtual'.'4'] = 'anothervalue';\n    var_dump($SomeObj->RealVar1);\n    print $SomeObj->{'RealVar'.(3)}.\"\\n\";\n    unset($SomeObj->RealVar1);\n    unset($SomeObj->{'RealVar'.(3)});\n    //the lines below will catch by '__get' magic method since these variables are unavailable anymore\n    var_dump($SomeObj->RealVar1);\n    print $SomeObj->{'RealVar'.(3)}.\"\\n\";\n    // now we will try to unset these variables\n    unset($SomeObj->Virtual1);\n    unset($SomeObj->{'Virtual'.(3)});\n    //but, these variables are still available??? even though they're \"unset\"-ed\n    print $SomeObj->Virtual1.\"\\n\";\n    print $SomeObj->{'Virtual'.(3)}.\"\\n\";\n?>")).toMatchSnapshot();
  });
});
