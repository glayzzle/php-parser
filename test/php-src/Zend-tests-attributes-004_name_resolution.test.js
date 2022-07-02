// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/attributes/004_name_resolution.phpt
  it("Resolve attribute names", function () {
    expect(parser.parseCode("<?php\nnamespace {\n    function dump_attributes($attributes) {\n        $arr = [];\n        foreach ($attributes as $attribute) {\n            $arr[] = ['name' => $attribute->getName(), 'args' => $attribute->getArguments()];\n        }\n        var_dump($arr);\n    }\n}\nnamespace Doctrine\\ORM\\Mapping {\n    class Entity {\n    }\n}\nnamespace Doctrine\\ORM\\Attributes {\n    class Table {\n    }\n}\nnamespace Foo {\n    use Doctrine\\ORM\\Mapping\\Entity;\n    use Doctrine\\ORM\\Mapping as ORM;\n    use Doctrine\\ORM\\Attributes;\n    #[Entity(\"imported class\")]\n    #[ORM\\Entity(\"imported namespace\")]\n    #[\\Doctrine\\ORM\\Mapping\\Entity(\"absolute from namespace\")]\n    #[\\Entity(\"import absolute from global\")]\n    #[Attributes\\Table()]\n    function foo() {\n    }\n}\nnamespace {\n    class Entity {}\n    dump_attributes((new ReflectionFunction('Foo\\foo'))->getAttributes());\n}\n?>")).toMatchSnapshot();
  });
});
