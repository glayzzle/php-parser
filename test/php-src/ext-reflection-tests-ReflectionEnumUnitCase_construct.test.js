// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionEnumUnitCase_construct.phpt
  it("ReflectionEnumUnitCase::__construct()", function () {
    expect(parser.parseCode("<?php\nenum Foo {\n    case Bar;\n    const Baz = self::Bar;\n}\n$case = new ReflectionEnumUnitCase(Foo::class, 'Bar');\nvar_dump($case->getName());\nvar_dump($case->isPublic());\nvar_dump($case->getModifiers());\ntry {\n    new ReflectionEnumUnitCase(Foo::class, 'Baz');\n} catch (\\Exception $e) {\n    echo $e->getMessage() . \"\\n\";\n}\ntry {\n    new ReflectionEnumUnitCase(Foo::class, 'Qux');\n} catch (\\Exception $e) {\n    echo $e->getMessage() . \"\\n\";\n}\ntry {\n    new ReflectionEnumUnitCase([], 'Foo');\n} catch (Error $e) {\n    echo $e->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
