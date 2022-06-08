// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/htmlentities-utf-2.phpt
  it("HTML entities with invalid chars and ENT_IGNORE", function () {
    expect(parser.parseCode("<?php\n@setlocale (LC_CTYPE, \"C\");\n$strings = array(\"<\", \"\\xD0\", \"\\xD0\\x90\", \"\\xD0\\x90\\xD0\", \"\\xD0\\x90\\xD0\\xB0\", \"\\xE0\", \"A\\xE0\", \"\\xE0\\x80\", \"\\xE0\\x79\", \"\\xE0\\x80\\xBE\",\n    \"Voil\\xE0\", \"Clich\\xE9s\",\n    \"\\xFE\", \"\\xFE\\x41\", \"\\xC3\\xA9\", \"\\xC3\\x79\", \"\\xF7\\xBF\\xBF\\xBF\", \"\\xFB\\xBF\\xBF\\xBF\\xBF\", \"\\xFD\\xBF\\xBF\\xBF\\xBF\\xBF\",\n    \"\\x41\\xF7\\xF7\\x42\", \"\\x42\\xFB\\xFB\\x42\", \"\\x43\\xFD\\xFD\\x42\", \"\\x44\\xF7\\xF7\", \"\\x45\\xFB\\xFB\", \"\\x46\\xFD\\xFD\"\n    );\nforeach($strings as $string) {\n    $sc_encoded = htmlspecialchars ($string, ENT_QUOTES | ENT_IGNORE, \"utf-8\");\n    var_dump(bin2hex($sc_encoded));\n    $ent_encoded = htmlentities ($string, ENT_QUOTES | ENT_IGNORE, \"utf-8\");\n    var_dump(bin2hex($ent_encoded));\n}\n?>")).toMatchSnapshot();
  });
});
