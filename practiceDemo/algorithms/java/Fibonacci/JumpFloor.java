package com.nfalse.controller;

public class JumpFloor {
    public static void main(String[] argus) {
        long time1 = System.currentTimeMillis();

        System.out.println(jumpByRecursion(42));

        long time2 = System.currentTimeMillis();
        System.out.println("cost: " + (time2-time1));

        System.out.println(jump(42));
        long time3 = System.currentTimeMillis();
        System.out.println("cost: " + (time3-time2));
    }

    // 递归
    public static int jumpByRecursion(int n) {
        if(n == 0) {
            return 0;
        }
        if(n == 1) {
            return 1;
        }
        if(n == 2) {
            return 2;
        }
        return jumpByRecursion(n-1) + jumpByRecursion(n-2);
    }

    // 非递归：辗转相加
    public static int jump(int n) {
        if(n == 0) {
            return 0;
        }
        if(n == 1) {
            return 1;
        }
        if(n == 2) {
            return 2;
        }
        int s1 = 1;
        int s2 = 2;
        int res = 0;
        for(int i = 3; i <= n; i++) {
            res = s1 + s2;
            s1 = s2;
            s2 = res;
        }
        return res;
    }
}
