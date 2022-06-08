// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sysvshm/tests/001.phpt
  it("ftok() tests", function () {
    expect(parser.parseCode("<?php\ntry {\n    ftok(\"\",\"\");\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\n    ftok(-1, -1);\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\n    ftok(\"qwertyu\",\"qwertyu\");\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\nvar_dump(ftok(\"nonexistentfile\",\"q\"));\nvar_dump(ftok(__FILE__,\"q\"));\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
