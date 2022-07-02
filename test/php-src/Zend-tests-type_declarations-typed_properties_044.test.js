// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/typed_properties_044.phpt
  it("Test increment functions on typed property references", function () {
    expect(parser.parseCode("<?php\n$foo = new class {\n    public ?int $bar;\n};\n$bar = &$foo->bar;\n$bar *= 1;\nvar_dump($bar--);\nvar_dump(--$bar);\nvar_dump(++$bar);\nvar_dump($bar++);\n$bar = PHP_INT_MAX;\ntry {\n    var_dump($bar++);\n} catch (Throwable $e) {\n    echo $e->getMessage() . \"\\n\";\n}\ntry {\n    var_dump(++$bar);\n} catch (Throwable $e) {\n    echo $e->getMessage() . \"\\n\";\n}\n$bar = PHP_INT_MIN;\ntry {\n    var_dump($bar--);\n} catch (Throwable $e) {\n    echo $e->getMessage() . \"\\n\";\n}\ntry {\n    var_dump(--$bar);\n} catch (Throwable $e) {\n    echo $e->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
