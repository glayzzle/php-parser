// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/bug69038.phpt
  it("Bug #69038 (switch(SOMECONSTANT) misbehaves)", function () {
    expect(parser.parseCode("<?php\nfunction a($a = \"bad\") {\n    switch (PHP_OS) {\n    case \"LALALALA\" : return \"LALALAL\";\n    case PHP_OS: return \"okey\";\n    default:   break;\n    }\n    return $a;\n}\nvar_dump(a());\nfunction b($b = \"bad\") {\n    switch (PHP_OS) {\n    case \"LALALAL\": return \"bad\";\n    case PHP_OS:\n        switch (PHP_OS) {\n        case \"FOO\": break;\n        case PHP_OS: return \"okey\";\n        default :\n            break;\n        }\n        break;\n    default:\n        break;\n    }\n    return $b;\n}\nvar_dump(b());\nfunction c($b = \"bad\") {\n    switch (extension_loaded(\"standard\")) {\n    case 0 : return \"LALALAL\";\n    case 1 : return \"okey\";\n    default : return \"bad\";\n    }\n}\nvar_dump(c());\nfunction d() {\n    switch (PHP_OS) {\n        default: return \"bad\";\n        case PHP_OS: return \"okey\";\n    }\n}\nvar_dump(d());\n?>")).toMatchSnapshot();
  });
});
