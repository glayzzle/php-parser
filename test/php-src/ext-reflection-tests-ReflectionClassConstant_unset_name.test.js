// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionClassConstant_unset_name.phpt
  it("Unsetting name on ReflectionClassConstant", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public const C = 1;\n}\n// This is unsupported and the actual behavior doesn't matter.\n// Just make sure it doesn't crash.\n$rc = new ReflectionClassConstant(Test::class, 'C');\nunset($rc->name);\ntry {\n    var_dump($rc->getName());\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    echo $rc, \"\\n\";\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
