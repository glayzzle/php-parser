// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/misc/exec_basic1.phpt
  it("exec, system, passthru  — Basic command execution functions", function () {
    expect(parser.parseCode("<?php\n$cmd = \"echo abc\\n\\0command\";\ntry {\n    var_dump(exec($cmd, $output));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\n    var_dump(system($cmd, $output));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\n    var_dump(passthru($cmd, $output));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
