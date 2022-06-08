// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zend_test/tests/attribute_hash_table_leak.phpt
  it("Verify that parameter attributes for native functions do not leak.", function () {
    expect(parser.parseCode("<?php\nvar_dump(zend_test_parameter_with_attribute(\"foo\"));\n$o = new ZendTestClassWithMethodWithParameterAttribute();\nvar_dump($o->no_override(\"foo\"));\nvar_dump($o->override(\"foo\"));\n$o = new ZendTestChildClassWithMethodWithParameterAttribute();\nvar_dump($o->no_override(\"foo\"));\nvar_dump($o->override(\"foo\"));\nclass ChildClassWithNoAttribute extends ZendTestClassWithMethodWithParameterAttribute {\n\tpublic function override(string $parameter): int\n\t{\n\t\treturn 5;\n\t}\n}\n$o = new ChildClassWithNoAttribute();\nvar_dump($o->no_override(\"foo\"));\nvar_dump($o->override(\"foo\"));\nclass ChildClassWithSameAttribute extends ZendTestClassWithMethodWithParameterAttribute {\n\tpublic function override(#[ZendTestParameterAttribute] string $parameter): int\n\t{\n\t\treturn 6;\n\t}\n}\n$o = new ChildClassWithSameAttribute();\nvar_dump($o->no_override(\"foo\"));\nvar_dump($o->override(\"foo\"));\n#[\\Attribute(\\Attribute::TARGET_PARAMETER)]\nclass SomeAttribute {\n}\nclass ChildClassWithDifferentAttribute extends ZendTestClassWithMethodWithParameterAttribute {\n\tpublic function override(#[SomeAttribute] string $parameter): int\n\t{\n\t\treturn 7;\n\t}\n}\n$o = new ChildClassWithDifferentAttribute();\nvar_dump($o->no_override(\"foo\"));\nvar_dump($o->override(\"foo\"));\n?>")).toMatchSnapshot();
  });
});
