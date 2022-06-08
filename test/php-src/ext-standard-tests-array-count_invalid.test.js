// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/count_invalid.phpt
  it("Only arrays and countable objects can be counted", function () {
    expect(parser.parseCode("<?php\ntry {\n    $result = count(null);\n    var_dump($result);\n} catch (\\TypeError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\n    $result = count(\"string\");\n    var_dump($result);\n} catch (\\TypeError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\n    $result = count(123);\n    var_dump($result);\n} catch (\\TypeError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\n    $result = count(true);\n    var_dump($result);\n} catch (\\TypeError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\n    $result = count(false);\n    var_dump($result);\n} catch (\\TypeError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\n    $result = count((object) []);\n    var_dump($result);\n} catch (\\TypeError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
