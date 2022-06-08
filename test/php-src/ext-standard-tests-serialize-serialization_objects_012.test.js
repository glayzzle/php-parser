// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/serialization_objects_012.phpt
  it("Object serialization / unserialization: real references and COW references", function () {
    expect(parser.parseCode("<?php\necho \"\\n\\nArray containing same object twice:\\n\";\n$obj = new stdclass;\n$a[0] = $obj;\n$a[1] = $a[0];\nvar_dump($a);\n$ser = serialize($a);\nvar_dump($ser);\n$ua = unserialize($ser);\nvar_dump($ua);\n$ua[0]->a = \"newProp\";\nvar_dump($ua);\n$ua[0] = \"a0.changed\";\nvar_dump($ua);\necho \"\\n\\nArray containing object and reference to that object:\\n\";\n$obj = new stdclass;\n$a[0] = $obj;\n$a[1] = &$a[0];\nvar_dump($a);\n$ser = serialize($a);\nvar_dump($ser);\n$ua = unserialize($ser);\nvar_dump($ua);\n$ua[0]->a = \"newProp\";\nvar_dump($ua);\n$ua[0] = \"a0.changed\";\nvar_dump($ua);\necho \"\\n\\nObject containing same object twice:\";\n$obj = new stdclass;\n$contaner = new stdclass;\n$contaner->a = $obj;\n$contaner->b = $contaner->a;\nvar_dump($contaner);\n$ser = serialize($contaner);\nvar_dump($ser);\n$ucontainer = unserialize($ser);\nvar_dump($ucontainer);\n$ucontainer->a->a = \"newProp\";\nvar_dump($ucontainer);\n$ucontainer->a = \"container->a.changed\";\nvar_dump($ucontainer);\necho \"\\n\\nObject containing object and reference to that object:\\n\";\n$obj = new stdclass;\n$contaner = new stdclass;\n$contaner->a = $obj;\n$contaner->b = &$contaner->a;\nvar_dump($contaner);\n$ser = serialize($contaner);\nvar_dump($ser);\n$ucontainer = unserialize($ser);\nvar_dump($ucontainer);\n$ucontainer->a->a = \"newProp\";\nvar_dump($ucontainer);\n$ucontainer->b = \"container->a.changed\";\nvar_dump($ucontainer);\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
