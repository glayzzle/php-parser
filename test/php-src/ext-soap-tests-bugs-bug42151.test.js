// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/bugs/bug42151.phpt
  it("Bug #42151 (__destruct functions not called after catching a SoapFault exception)", function () {
    expect(parser.parseCode("<?php\nclass foo {\n    function __construct(){\n        $foo = @ new SoapClient('httpx://');\n    }\n    function __destruct(){\n        echo 'I never get executed.' . \"\\n\";\n    }\n}\nclass bar {\n    function __destruct(){\n        echo 'I don\\'t get executed either.' . \"\\n\";\n    }\n}\ntry {\n    $bar = new bar();\n    $foo = new foo();\n} catch (Exception $e){\n    echo $e->getMessage() . \"\\n\";\n}\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
