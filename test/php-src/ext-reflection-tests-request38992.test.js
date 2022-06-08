// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/request38992.phpt
  it("Request #38992 (invoke() and invokeArgs() static method calls should match)", function () {
    expect(parser.parseCode("<?php\nclass MyClass\n{\n    public static function doSomething()\n    {\n        echo \"Did it!\\n\";\n    }\n}\n$r = new ReflectionMethod('MyClass', 'doSomething');\ntry {\n    $r->invoke('WTF?');\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    $r->invokeArgs('WTF?', array());\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
