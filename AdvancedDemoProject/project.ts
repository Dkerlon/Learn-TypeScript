class ListNode<T>{
    next?: ListNode<T>
    constructor(public value: T){};
};

class LinkedList<T> {
    private root?: ListNode<T>;
    private tail?: ListNode<T>;
    private length = 0;

    add(value: T){
        const node = new ListNode(value);
        if(!this.root  || !this.tail){
            this.root = node;
            this.tail = node;
        }else{
            this.tail.next = node;
            this.tail = node
        }
        this.length++
    };

    get curLength(){
        return this.length;
    }

    print(){
        let current = this.root;
        while(current){
            console.log(current.value);
            if(current.next){
                console.log('|')
            }else{
                console.log('End of the list.')
            }
            current = current.next;
        };
    };
};

let numberList = new LinkedList<number>();
numberList.add(10);
numberList.add(1);
numberList.add(30);
numberList.add(50);
numberList.add(90);
numberList.add(2);

console.log(numberList.curLength);
numberList.print()
let stringList = new LinkedList<string>();