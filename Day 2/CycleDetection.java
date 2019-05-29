/*
Detect a cycle in a linked list. Note that the head pointer may be 'null' if the list is empty.

A Node is defined as: 
    class Node {
        int data;
        Node next;
    }
*/
boolean hasCycle(Node head) {
    if (head == null)
        return false;
    
    Node s = head;
    Node f = head;
    
    while (f != null && f.next != null) {
        s = s.next;
        f = f.next.next;
        if (s == f) {
            return true;
        }
    }
    return false;
}