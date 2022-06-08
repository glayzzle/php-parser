// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionReference_errors.phpt
  it("Various error conditions for ReflectionReference", function () {
    expect(parser.parseCode("<?php\ntry {\n    new ReflectionReference();\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    ReflectionReference::fromArrayElement(new stdClass, \"test\");\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    ReflectionReference::fromArrayElement([], []);\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    $ary = [0, 1, 2];\n    ReflectionReference::fromArrayElement($ary, 3);\n} catch (ReflectionException $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    $ary = [&$ary];\n    $ref = ReflectionReference::fromArrayElement($ary, 0);\n    var_dump(serialize($ref));\n} catch (Exception $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    var_dump(unserialize('O:19:\"ReflectionReference\":0:{}'));\n} catch (Exception $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
