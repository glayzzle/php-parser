// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug31098.phpt
  it("Bug #31098 (isset() / empty() incorrectly returns true in dereference of a wrong type)", function () {
    expect(parser.parseCode("<?php\n$a = '';\nvar_dump(isset($a->b));\n$a = 'a';\nvar_dump(isset($a->b));\n$a = '0';\nvar_dump(isset($a->b));\n$a = '';\nvar_dump(isset($a['b']));\n$a = 'a';\nvar_dump(isset($a['b']));\n$a = '0';\nvar_dump(isset($a['b']));\n$simpleString = \"Bogus String Text\";\necho isset($simpleString->wrong)?\"bug\\n\":\"ok\\n\";\ntry {\n    echo isset($simpleString[\"wrong\"])?\"bug\\n\":\"ok\\n\";\n} catch (\\TypeError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\necho isset($simpleString[-20])?\"bug\\n\":\"ok\\n\";\necho isset($simpleString[0])?\"ok\\n\":\"bug\\n\";\necho isset($simpleString[\"0\"])?\"ok\\n\":\"bug\\n\";\necho isset($simpleString[\"16\"])?\"ok\\n\":\"bug\\n\";\necho isset($simpleString[\"17\"])?\"bug\\n\":\"ok\\n\";\necho $simpleString->wrong === null?\"ok\\n\":\"bug\\n\";\ntry {\n    echo $simpleString[\"wrong\"] === \"B\"?\"ok\\n\":\"bug\\n\";\n} catch (\\TypeError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\necho $simpleString[\"0\"] === \"B\"?\"ok\\n\":\"bug\\n\";\ntry {\n    /* This must not affect the string value */\n    $simpleString[\"wrong\"] = \"f\";\n} catch (\\TypeError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\necho $simpleString[\"0\"] === \"B\"?\"ok\\n\":\"bug\\n\";\n?>")).toMatchSnapshot();
  });
});
