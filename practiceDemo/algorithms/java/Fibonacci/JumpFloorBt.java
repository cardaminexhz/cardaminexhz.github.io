package com.nfalse.controller;

import java.util.concurrent.Executors;

public class JumpFloorBt {
    public static void main(String[] argus) {
        long time1 = System.currentTimeMillis();

        System.out.println(jump(10));

        long time2 = System.currentTimeMillis();
        System.out.println("cost: " + (time2-time1));
    }

    public static int jump(int n) {
        if(n == 0) {
            return 0;
        }
        if(n == 1) {
            return 1;
        }
        return (int) Math.pow(2, n-1);
    }
}
