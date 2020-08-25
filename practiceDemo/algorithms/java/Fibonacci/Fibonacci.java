package com.nfalse.controller;

import java.math.BigInteger;
import java.util.HashMap;
import java.util.Map;

public class Fibonacci {

    public static void main(String[] argus) {
        long currentTimeMillis1 = System.currentTimeMillis();

        System.out.println(fiboByRecursion2(42));

        long currentTimeMillis2 = System.currentTimeMillis();
        System.out.println("cost: " + (currentTimeMillis2-currentTimeMillis1));

        System.out.println(fibo(42));
        long currentTimeMillis3 = System.currentTimeMillis();
        System.out.println("cost: " + (currentTimeMillis3-currentTimeMillis2));

        Fibonacci fibonacci = new Fibonacci();
        System.out.println(fibonacci.fiboByHashMap(42));
        long currentTimeMillis4 = System.currentTimeMillis();
        System.out.println("cost: " + (currentTimeMillis4-currentTimeMillis3));
    }

    // 递归
    public static int fiboByRecursion(int n) {
        if (n < 1) {
            return 0;
        }
        if (n == 1 || n == 2) {
            return 1;
        }
        return fiboByRecursion(n-1) + fiboByRecursion(n-2);
    }

    // 递归：BigInteger版本
    public static BigInteger fiboByRecursion2(int n) {
        if (n < 1) {
            return BigInteger.ZERO;
        }
        if (n == 1 || n == 2) {
            return BigInteger.ONE;
        }
        return fiboByRecursion2(n-1).add(fiboByRecursion2(n-2));
    }

    // 非递归：辗转相加
    public static int fibo(int n) {
        if (n < 1) {
            return 0;
        }
        if (n == 1 || n == 2) {
            return 1;
        }
        int s1 = 1;
        int s2 = 1;
        int res = 0;
        for(int i = 3; i <= n; i++) {
            res = s1 + s2;
            s1 = s2;
            s2 = res;
        }
        return res;
    }

    // 利用HashMap缓存之前的结果
    private Map<Integer, Integer> fiboMap = new HashMap<>();
    {
        fiboMap.put(1, 1);
        fiboMap.put(2, 1);
    }
    public Integer fiboByHashMap(int n) {
        if(fiboMap.containsKey(n)) {
            return fiboMap.get(n);
        } else {
            Integer res = fiboByHashMap(n-1) + fiboByHashMap(n-2);
            fiboMap.put(n, res);
            return res;
        }
    }

//    public Integer fiboByHashMap2(int n) {
//        if(fiboMap.containsKey(n)) {
//            return fiboMap.get(n);
//        } else {
//            return fiboMap.computeIfAbsent(n, (key) -> (fiboByHashMap2(n-1) + fiboByHashMap2(n-2)));
//        }
//    }

}
