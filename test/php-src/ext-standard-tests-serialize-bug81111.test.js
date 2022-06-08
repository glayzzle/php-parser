// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/bug81111.phpt
  it("Bug #81111: Serialization is unexpectedly allowed on anonymous classes with __serialize()", function () {
    expect(parser.parseCode("<?php\nclass MySplFileInfo extends SplFileInfo {\n    public function __serialize() { return []; }\n    public function __unserialize($value) { return new self('file'); }\n}\ntry {\n    serialize(new MySplFileInfo(__FILE__));\n} catch (Exception $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n$anon = new class () {\n    public function __serialize() { return []; }\n    public function __unserialize($value) { }\n};\ntry {\n    serialize($anon);\n} catch (Exception $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    unserialize(\"O:13:\\\"MySplFileInfo\\\":0:{}\");\n} catch (Exception $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    unserialize(\"C:13:\\\"MySplFileInfo\\\":0:{}\");\n} catch (Exception $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n$name = $anon::class;\ntry {\n    unserialize(\"O:\" . strlen($name) . \":\\\"\" . $name . \"\\\":0:{}\");\n} catch (Exception $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
