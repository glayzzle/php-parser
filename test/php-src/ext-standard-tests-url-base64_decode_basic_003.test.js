// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/url/base64_decode_basic_003.phpt
  it("Test base64_decode() function : basic functionality - padding and whitespace", function () {
    expect(parser.parseCode("<?php\necho \"Test base64_decode (output as JSON):\\n\";\n$data = [\n    \"\", \"=\", \"==\", \"===\", \"====\",\n    \"V\", \"V=\", \"V==\", \"V===\", \"V====\",\n    \"VV\", \"VV=\", \"VV==\", \"VV===\", \"VV====\",\n    \"VVV\", \"VVV=\", \"VVV==\", \"VVV===\", \"VVV====\",\n    \"VVVV\", \"VVVV=\", \"VVVV==\", \"VVVV===\", \"VVVV====\",\n    \"=V\", \"=VV\", \"=VVV\",\n    \"==V\", \"==VV\", \"==VVV\",\n    \"===V\", \"===VV\", \"===VVV\",\n    \"====V\", \"====VV\", \"====VVV\",\n    \"=VVV\", \"V=VV\", \"VV=V\", \"VVV=\",\n    \"=VVVV\", \"V=VVV\", \"VV=VV\", \"VVV=V\", \"VVVV=\",\n    \"=VVV=\", \"V=VV=\", \"VV=V=\", \"VVV==\",\n    \"\\nVV\", \"V\\nV\", \"VV\\n\",\n    \"\\nVV==\", \"V\\nV==\", \"VV\\n==\", \"VV=\\n=\", \"VV==\\n\",\n    \"*VV\", \"V*V\", \"VV*\",\n    \"*VV==\", \"V*V==\", \"VV*==\", \"VV=*=\", \"VV==*\",\n    \"\\0VV==\", \"V\\0V==\", \"VV\\0==\", \"VV=\\0=\", \"VV==\\0\",\n    \"\\0VVV==\", \"V\\0VV==\", \"VV\\0V==\", \"VVV\\0==\", \"VVV=\\0=\", \"VVV==\\0\",\n];\nforeach ($data as $a) {\n    $b = base64_decode($a, false);\n    $c = base64_decode($a, true);\n    printf(\"base64 %-16s non-strict %-8s strict %s\\n\", json_encode($a), json_encode($b), json_encode($c));\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
