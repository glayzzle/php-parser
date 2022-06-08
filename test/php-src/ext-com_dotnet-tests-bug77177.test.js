// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/com_dotnet/tests/bug77177.phpt
  it("Bug #77177 (Serializing or unserializing COM objects crashes)", function () {
    expect(parser.parseCode("<?php\n$com = new COM(\"WScript.Shell\");\n$dotnet = new DOTNET(\"mscorlib\", \"System.Collections.Stack\");\n$variant = new VARIANT;\nforeach ([$com, $dotnet, $variant] as $object) {\n    try {\n        serialize($object);\n    } catch (Exception $ex) {\n        echo \"Exception: {$ex->getMessage()}\\n\";\n    }\n}\n$strings = ['C:3:\"com\":0:{}', 'C:6:\"dotnet\":0:{}', 'C:7:\"variant\":0:{}'];\nforeach ($strings as $string) {\n    try {\n        unserialize($string);\n    } catch (Exception $ex) {\n        echo \"Exception: {$ex->getMessage()}\\n\";\n    }\n}\n$strings = ['O:3:\"com\":0:{}', 'O:6:\"dotnet\":0:{}', 'O:7:\"variant\":0:{}'];\nforeach ($strings as $string) {\n    try {\n        unserialize($string);\n    } catch (Exception $ex) {\n        echo \"Exception: {$ex->getMessage()}\\n\";\n    }\n}\n?>")).toMatchSnapshot();
  });
});
