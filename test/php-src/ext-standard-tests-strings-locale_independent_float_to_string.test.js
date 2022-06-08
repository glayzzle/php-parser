// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/locale_independent_float_to_string.phpt
  it("Test that floats are converted to string locale independently", function () {
    expect(parser.parseCode("<?php\nfunction print_float(float $f)\n{\n    echo \"- casting:\\n\";\n    echo $f . \"\\n\";\n    echo strval($f) . \"\\n\";\n    $g = $f;\n    settype($g, \"string\");\n    echo $g . \"\\n\";\n    echo \"- *printf functions:\\n\";\n    printf(\"%.2f\\n\", $f);\n    printf(\"%.2F\\n\", $f);\n    echo sprintf(\"%.2f\", $f) . \"\\n\";\n    echo sprintf(\"%.2F\", $f) . \"\\n\";\n    echo \"- export/import:\\n\";\n    echo var_export($f, true)  . \"\\n\";\n    echo serialize($f) . \"\\n\";\n    echo json_encode($f) . \"\\n\";\n    echo \"- debugging:\\n\";\n    echo print_r($f, true) . \"\\n\";\n    var_dump($f);\n    debug_zval_dump($f);\n    echo \"- other:\\n\";\n    echo implode([$f]) . \"\\n\";\n}\nsetlocale(LC_ALL, \"C\");\necho \"C locale:\\n\";\nprint_float(3.14);\nsetlocale(\n    LC_ALL,\n    \"german\", \"de\", \"de_DE\", \"de_DE.ISO8859-1\", \"de_DE.ISO_8859-1\", \"de_DE.UTF-8\",\n    \"french\", \"fr\", \"fr_FR\", \"fr_FR.ISO8859-1\", \"fr_FR.ISO_8859-1\", \"fr_FR.UTF-8\",\n);\necho \"\\nde_DE locale:\\n\";\nprint_float(3.14);\n?>")).toMatchSnapshot();
  });
});
