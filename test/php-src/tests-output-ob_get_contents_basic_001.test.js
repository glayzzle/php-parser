// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/output/ob_get_contents_basic_001.phpt
  it("Test ob_get_contents() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing ob_get_contents() : basic functionality ***\\n\";\n// Zero arguments\necho \"\\n-- Testing ob_get_contents() function with Zero arguments --\\n\";\n/* Buffering not started yet, should return false */\nvar_dump( ob_get_contents() );\nob_start();\necho \"Hello World\\n\";\n$hello = ob_get_contents();\nvar_dump($hello);\nob_end_flush();\necho \"\\ncheck that we don't have a reference\\n\";\nob_start();\necho \"Hello World\\n\";\n$hello2 = ob_get_contents();\n$hello2 = \"bob\";\nvar_dump(ob_get_contents());\nob_end_flush();\necho \"\\ncheck that contents disappear after a flush\\n\";\nob_start();\necho \"Hello World\\n\";\nob_flush();\nvar_dump(ob_get_contents());\nob_end_flush();\necho \"\\ncheck that no contents found after an end\\n\";\nob_start();\necho \"Hello World\\n\";\nob_end_flush();\nvar_dump(ob_get_contents());\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
