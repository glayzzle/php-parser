// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/typed_properties_078.phpt
  it("Typed references must be kept track of and always be only the intersection of the type currently holding that reference", function () {
    expect(parser.parseCode("<?php\n$a = new class {\n    public ?iterable $it = [];\n    public ?array $a;\n    public ?Traversable $t;\n};\n$ref = &$a->it;\n$a->a = &$ref;\nvar_dump($ref);\ntry {\n    $a->t = &$ref;\n} catch (TypeError $e) { var_dump($e->getMessage()); }\nvar_dump($ref);\n$a->it = [1]; // type is still assignable\nvar_dump($ref);\ntry {\n    $ref = new ArrayIterator();\n} catch (TypeError $e) { var_dump($e->getMessage()); }\nvar_dump($ref instanceof ArrayIterator);\nunset($a->a);\n$ref = null;\n$a->t = &$ref;\ntry {\n    $ref = [];\n} catch (TypeError $e) { var_dump($e->getMessage()); }\nvar_dump($ref instanceof ArrayIterator);\n$ref = new ArrayIterator();\nvar_dump($ref instanceof ArrayIterator);\n?>")).toMatchSnapshot();
  });
});
