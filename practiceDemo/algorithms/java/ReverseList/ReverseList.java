package com.nfalse.controller;

import java.util.Stack;

/**
 * 反转单链表
 * 1.遍历反转，效率最高。在遍历链表过程中将指针反转。
 * 2.利用栈反转
 * 3.递归反转。通过递归调用函数，模拟压栈的过程。从最后一个Node开始，在弹栈的过程中将指针顺序置换的。
 * jdk1.8，当链表长度大于12000则会出现StackOverFlowError
 * https://www.cnblogs.com/loong-hon/p/10978238.html
 * https://www.cnblogs.com/keeya/p/9218352.html
 * */
public class ReverseList {

    public static void main(String[] argus) {
        // 遍历反转
        Node head = initList();
        printList(head);

        Node newHead1 = reverseList(head);
        printList(newHead1);

        // 利用栈反转
        Node head2 = initList();
        printList(head2);

        Node newHead2 = reverseListByStack(head2);
        printList(newHead2);

        // 递归反转
        Node head3 = initList();
        printList(head3);

        Node newHead3 = reverseListByRecursion(head3);
        printList(newHead3);

    }

    // 遍历,反转
    public static Node reverseList(Node head) {
        if(null == head || null == head.getNext()) {
            return head;
        }
        Node cur = head;
        Node pre = cur.getNext();
        cur.setNext(null);
        while(null != pre) {
            Node tmp = pre.getNext();
            pre.setNext(cur);
            cur = pre;
            pre = tmp;
        }

        return cur;
    }

    // 利用stack反转
    public static Node reverseListByStack(Node head) {
        Stack<Node> stack = new Stack<>();
        Node cur = head;
        while(null != cur) {
            stack.push(cur);
            cur = cur.getNext();
        }
        Node newHead = stack.pop();
        Node tmp = newHead;
        while(stack.size() > 0) {
            tmp.setNext(stack.pop());
            tmp = tmp.getNext();
            tmp.setNext(null);
        }
        return newHead;
    }

    // 递归反转
    public static Node reverseListByRecursion(Node head) {
        if(null == head || null == head.getNext()) {
            return head;
        }
        Node tmp = head.getNext();
        Node newHead = reverseListByRecursion(head.getNext());
        tmp.setNext(head);
        head.setNext(null);
        return newHead;
    }

    public static Node initList() {
        Node pre = new Node();
        Node head = pre;
        pre.setVal(0);
        int[] arr = new int[]{1, 2, 3, 4, 5};
        for (int elem : arr
             ) {
            Node newNode = new Node();
            newNode.setVal(elem);
            newNode.setNext(null);
            pre.setNext(newNode);
            pre = newNode;
        }

        return head;
    }

    private static void printList(Node head) {
        while(head != null) {
           System.out.print(head.getVal() + " -> ");
           head = head.getNext();
        }
        System.out.println("");
    }

}

class Node {
    private int val;
    private Node next;

    public void setVal(int val) {
        this.val = val;
    }

    public int getVal() {
        return val;
    }

    public void setNext(Node next) {
        this.next = next;
    }

    public Node getNext() {
        return next;
    }
}
