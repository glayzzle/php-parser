// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionObject_isSubclassOf.002.phpt
  it("ReflectionObject::isSubclassOf() - bad arguments", function () {
    expect(parser.parseCode("<?php\nclass C {}\n$ro = new ReflectionObject(new C);\necho \"\\n\\nTest bad arguments:\\n\";\ntry {\n    $ro->isSubclassOf();\n} catch (ArgumentCountError $e) {\n    echo $e->getMessage() . \"\\n\";\n}\ntry {\n    $ro->isSubclassOf('C', 'C');\n} catch (ArgumentCountError $e) {\n    echo $e->getMessage() . \"\\n\";\n}\ntry {\n    $ro->isSubclassOf(null);\n} catch (ReflectionException $e) {\n    echo $e->getMessage() . \"\\n\";\n}\ntry {\n    $ro->isSubclassOf('ThisClassDoesNotExist');\n} catch (ReflectionException $e) {\n    echo $e->getMessage() . \"\\n\";\n}\ntry {\n    $ro->isSubclassOf(2);\n} catch (ReflectionException $e) {\n    echo $e->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
