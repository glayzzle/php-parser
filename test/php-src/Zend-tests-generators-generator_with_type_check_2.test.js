// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/generator_with_type_check_2.phpt
  it("Generator wit type check", function () {
    expect(parser.parseCode("<?php\nfunction gen(array $a) { yield; }\ntry {\n    gen(42);\n} catch (TypeError $e) {\n    echo $e->getMessage().\"\\n\";\n}\ntry {\n    foreach (gen(42) as $val) {\n        var_dump($val);\n    }\n} catch (TypeError $e) {\n        echo $e->getMessage().\"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
