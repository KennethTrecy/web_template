<?php

namespace Tests\Unit;

use KennethTrecy\Index;
use PHPUnit\Framework\TestCase;

class Example extends TestCase
{
    public function testName()
    {
        $expected = 81;

        $product = Index::multiply(9, 9);

        $this->assertEquals($expected, $product);
    }
}
