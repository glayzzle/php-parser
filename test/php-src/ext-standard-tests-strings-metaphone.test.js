// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/metaphone.phpt
  it("metaphone() tests", function () {
    expect(parser.parseCode("<?php\nvar_dump(metaphone(\"\"));\nvar_dump(metaphone(-1));\ntry {\n    var_dump(metaphone(\"valid phrase\", -1));\n} catch (ValueError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\nvar_dump(metaphone(\"valid phrase\", 0));\nvar_dump(metaphone(\"valid phrase\", 10000));\n$array = array(\n\"They fell forward, grovelling heedlessly on the cold earth.\",\n\"But the shadow of horror wheeled and returned, passing lower now, right above them, sweeping the fen-reek with its ghastly wings.\",\n\"And then it was gone, flying back to Mordor with the speed of the wrath of Sauron; and behind it the wind roared away, leaving the Dead Marshes bare and bleak.\",\n\"The naked waste, as far as the eye could pierce, even to the distant menace of the mountains, was dappled with the fitful moonlight.\"\n);\nforeach($array as $str) {\n    var_dump(metaphone($str));\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
