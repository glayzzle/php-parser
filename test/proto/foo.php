<?php
  function foo($bar) {
    echo $bar . "\n";
    return true;
  }

  class bar {
    public $foo = 123;
    private $a;
    public function __construct($a) {
      $this->a = $a;
    }
  }

  interface FOOBAR {
    const BAR = 123;
    function shouldDo(bar $a);
  }

/** 

__c: {
  bar: function(a) {
    // private functions & properties
    // public functions & properties
    return {
      a: null
    };
  }
}

*/