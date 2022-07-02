// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/offset_string.phpt
  it("using different variables to access string offsets", function () {
    expect(parser.parseCode("<?php\n$str = \"Sitting on a corner all alone, staring from the bottom of his soul\";\nvar_dump($str[1]);\nvar_dump($str[0.0836]);\nvar_dump($str[NULL]);\ntry {\n    var_dump($str[\"run away\"]);\n} catch (\\TypeError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\nvar_dump($str[\"13\"]);\ntry {\n    var_dump($str[\"14.5\"]);\n} catch (\\TypeError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\nvar_dump($str[\"15 and then some\"]);\nvar_dump($str[TRUE]);\nvar_dump($str[FALSE]);\n$fp = fopen(__FILE__, \"r\");\ntry {\n    var_dump($str[$fp]);\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n$obj = new stdClass;\ntry {\n    var_dump($str[$obj]);\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n$arr = Array(1,2,3);\ntry {\n    var_dump($str[$arr]);\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
