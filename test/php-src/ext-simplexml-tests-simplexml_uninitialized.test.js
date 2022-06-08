// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/simplexml/tests/simplexml_uninitialized.phpt
  it("Incorrectly initialized SimpleXmlElement", function () {
    expect(parser.parseCode("<?php\nclass MySXE extends SimpleXMLElement {\n    public function __construct() {\n        /* yolo */\n    }\n}\n$sxe = new MySXE;\ntry {\n    var_dump($sxe->count());\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    var_dump($sxe->xpath(''));\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    var_dump($sxe->getDocNamespaces());\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    var_dump($sxe->children());\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    var_dump($sxe->attributes());\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    var_dump($sxe->registerXPathNamespace('', ''));\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    var_dump($sxe->foo);\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
