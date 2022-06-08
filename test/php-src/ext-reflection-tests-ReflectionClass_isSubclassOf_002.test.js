// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionClass_isSubclassOf_002.phpt
  it("ReflectionObject::isSubclassOf() - bad arguments", function () {
    expect(parser.parseCode("<?php\nclass A {}\n$rc = new ReflectionClass('A');\necho \"\\n\\nTest bad arguments:\\n\";\ntry {\n    $rc->isSubclassOf();\n} catch (ArgumentCountError $e) {\n    echo $e->getMessage() . \"\\n\";\n}\ntry {\n    $rc->isSubclassOf('C', 'C');\n} catch (ArgumentCountError $e) {\n    echo $e->getMessage() . \"\\n\";\n}\ntry {\n    $rc->isSubclassOf(null);\n} catch (ReflectionException $e) {\n    echo $e->getMessage() . \"\\n\";\n}\ntry {\n    $rc->isSubclassOf('ThisClassDoesNotExist');\n} catch (ReflectionException $e) {\n    echo $e->getMessage() . \"\\n\";\n}\ntry {\n    $rc->isSubclassOf(2);\n} catch (ReflectionException $e) {\n    echo $e->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
