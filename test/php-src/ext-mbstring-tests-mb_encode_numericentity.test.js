// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mb_encode_numericentity.phpt
  it("Test mb_encode_numericentity() function : Convert UTF-8 to HTML-Entities", function () {
    expect(parser.parseCode("<?php\n$str1 = '¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ';\n$str2 = 'ƒΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩαβγδεζηθικλμνξοπρςστυφχψωϑϒϖ•…′″‾⁄℘ℑℜ™ℵ←↑→↓↔↵⇐⇑⇒⇓⇔∀∂∃∅∇∈∉∋∏∑−∗√∝∞∠∧∨∩∪∫∴∼≅≈≠≡≤≥⊂⊃⊄⊆⊇⊕⊗⊥⋅⌈⌉⌊⌋〈〉◊♠♣♥♦';\n$convmap = array(0x0, 0x2FFFF, 0, 0xFFFF);\necho mb_encode_numericentity($str1, $convmap, \"UTF-8\").\"\\n\";\necho mb_encode_numericentity($str2, $convmap, \"UTF-8\").\"\\n\";\n$convmap = array(0xFF, 0x2FFFF, 0, 0xFFFF);\necho mb_encode_numericentity('aŒbœcŠdše€fg', $convmap, \"UTF-8\").\"\\n\";\n$convmap = [];\necho mb_encode_numericentity('föo', $convmap, \"UTF-8\").\"\\n\";\n$convmap = array(0xFF, 0x2FFFF, 0); // 3 elements\ntry {\n    echo mb_encode_numericentity('aŒbœcŠdše€fg', $convmap, \"UTF-8\").\"\\n\";\n} catch (ValueError $ex) {\n    echo $ex->getMessage().\"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
