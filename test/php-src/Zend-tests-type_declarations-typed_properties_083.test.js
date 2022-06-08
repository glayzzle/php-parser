// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/typed_properties_083.phpt
  it("Test array promotion does not violate type restrictions", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    public ?string $p;\n    public ?iterable $i;\n    public static ?string $s;\n    public static ?array $a;\n}\n$a = new Foo;\n$a->i[] = 1;\nvar_dump($a->i);\ntry {\n    $a->p[] = \"test\";\n} catch (TypeError $e) { var_dump($e->getMessage()); }\ntry { // must be uninit\n    var_dump($a->p); // WRONG!\n} catch (Error $e) { var_dump($e->getMessage()); }\n$a->p = null;\ntry {\n    $a->p[] = \"test\";\n} catch (TypeError $e) { var_dump($e->getMessage()); }\nvar_dump($a->p);\nFoo::$a[\"bar\"] = 2;\nvar_dump(Foo::$a);\ntry {\n    Foo::$s[\"baz\"][] = \"baz\";\n} catch (TypeError $e) { var_dump($e->getMessage()); }\ntry { // must be uninit\n    var_dump(Foo::$s);\n} catch (Error $e) { var_dump($e->getMessage()); }\nFoo::$a = null;\n$ref = &Foo::$a;\n$ref[] = 3;\nvar_dump($ref);\n$ref = &$a->p;\ntry {\n    $ref[] = \"bar\";\n} catch (TypeError $e) { var_dump($e->getMessage()); }\nvar_dump($ref);\ntry {\n    $ref[\"baz\"][] = \"bar\"; // indirect assign\n} catch (TypeError $e) { var_dump($e->getMessage()); }\nvar_dump($ref);\n?>")).toMatchSnapshot();
  });
});
