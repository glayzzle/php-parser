// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/static_properties_004.phpt
  it("Inherited static properties cannot be separated from their reference set.", function () {
    expect(parser.parseCode("<?php\nclass C { public static $p = 'original'; }\nclass D extends C {\t}\nclass E extends D {\t}\necho \"\\nInherited static properties refer to the same value across classes:\\n\";\nvar_dump(C::$p, D::$p, E::$p);\necho \"\\nChanging one changes all the others:\\n\";\nD::$p = 'changed.all';\nvar_dump(C::$p, D::$p, E::$p);\necho \"\\nReferences cannot be used to split the properties:\\n\";\n$ref = 'changed.one';\nD::$p =& $ref;\nvar_dump(C::$p, D::$p, E::$p);\n?>")).toMatchSnapshot();
  });
});
