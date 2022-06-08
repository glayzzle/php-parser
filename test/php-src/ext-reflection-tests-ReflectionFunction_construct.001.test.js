// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionFunction_construct.001.phpt
  it("ReflectionFunction constructor errors", function () {
    expect(parser.parseCode("<?php\ntry {\n    $a = new ReflectionFunction(array(1, 2, 3));\n    echo \"exception not thrown.\".PHP_EOL;\n} catch (TypeError $re) {\n    echo \"Ok - \".$re->getMessage().PHP_EOL;\n}\ntry {\n    $a = new ReflectionFunction('nonExistentFunction');\n} catch (ReflectionException $e) {\n    echo $e->getMessage().PHP_EOL;\n}\ntry {\n    $a = new ReflectionFunction();\n} catch (TypeError $re) {\n    echo \"Ok - \".$re->getMessage().PHP_EOL;\n}\ntry {\n    $a = new ReflectionFunction(1, 2);\n} catch (TypeError $re) {\n    echo \"Ok - \".$re->getMessage().PHP_EOL;\n}\ntry {\n    $a = new ReflectionFunction([]);\n} catch (TypeError $re) {\n    echo \"Ok - \".$re->getMessage().PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
