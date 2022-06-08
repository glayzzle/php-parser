// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionClass_getMethod_002.phpt
  it("ReflectionClass::getMethod() - error cases", function () {
    expect(parser.parseCode("<?php\nclass C {\n    function f() {}\n}\n$rc = new ReflectionClass(\"C\");\necho \"Check invalid params:\\n\";\ntry {\n    var_dump($rc->getMethod());\n} catch (TypeError $e) {\n    echo $e->getMessage() . \"\\n\";\n}\ntry {\n    var_dump($rc->getMethod(\"f\", \"f\"));\n} catch (TypeError $e) {\n    echo $e->getMessage() . \"\\n\";\n}\ntry {\n    var_dump($rc->getMethod(null));\n} catch (Exception $e) {\n    echo $e->getMessage() . \"\\n\";\n}\ntry {\n    var_dump($rc->getMethod(1));\n} catch (Exception $e) {\n    echo $e->getMessage() . \"\\n\";\n}\ntry {\n    var_dump($rc->getMethod(1.5));\n} catch (Exception $e) {\n    echo $e->getMessage() . \"\\n\";\n}\ntry {\n    var_dump($rc->getMethod(true));\n} catch (Exception $e) {\n    echo $e->getMessage() . \"\\n\";\n}\ntry {\n    var_dump($rc->getMethod(array(1,2,3)));\n} catch (TypeError $e) {\n    echo $e->getMessage() . \"\\n\";\n}\ntry {\n    var_dump($rc->getMethod(new C));\n} catch (TypeError $e) {\n    echo $e->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
