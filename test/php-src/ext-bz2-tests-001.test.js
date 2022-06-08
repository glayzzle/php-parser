// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/bz2/tests/001.phpt
  it("bzopen() and invalid parameters", function () {
    expect(parser.parseCode("<?php\ntry {\n    var_dump(bzopen(\"\", \"r\"));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\n    var_dump(bzopen(\"\", \"w\"));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\n    var_dump(bzopen(\"no_such_file\", \"\"));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\n    var_dump(bzopen(\"no_such_file\", \"x\"));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\n    var_dump(bzopen(\"no_such_file\", \"rw\"));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\nvar_dump(bzopen(\"no_such_file\", \"r\"));\n$fp = fopen(__FILE__,\"r\");\nvar_dump(bzopen($fp, \"r\"));\n?>")).toMatchSnapshot();
  });
});
