class TodoList {
    constructor(toDoList = []) {
        this.toDoList = toDoList;
    }
    create(myList) {
        let myNewToDo = this.toDoList;
        console.log(this.isEmptyObject(myNewToDo));
        let lastIndex;

        if (this.isEmptyObject(myNewToDo)) {
            lastIndex = 0;
            myNewToDo.push({
                id: 1,
                text: myList,
                status: 'incomplete'
            })
        } else {
            console.log(myNewToDo.length);
            lastIndex = Object.keys(myNewToDo).length;
            console.log('lastIndex ' + lastIndex);
            myNewToDo.push(
                {
                    id: lastIndex + 1,
                    text: myList,
                    status: 'incomplete'
                })
        }
        return myNewToDo

    }
    setComplete(id) {
        console.log('toDoList',this.toDoList);
        let myNewToDo = this.toDoList;
        let resetList = myNewToDo.find(element => element.id === id);
        if(resetList){
            resetList.status = 'complete';
            return resetList
        }else{
            return 'Todo item not found'
        }
    }
    removeById(id){
        console.log('toDoList',this.toDoList);
        let myNewToDo = this.toDoList;
        //const removeList = myNewToDo.filter((element) => element.id !== id);
        //console.log(removeList);
        const listFinder = myNewToDo.find(element => element.id === id);
        console.log('listFinder ',listFinder);
        if(listFinder){
        const newIndex = myNewToDo.indexOf(listFinder)
        myNewToDo.splice(newIndex,1);
        
        return myNewToDo;
        }else{
            return 'Todo item not found'
        }
       
    }
    getAll(){
        return this.toDoList;
    }

    isEmptyObject(object) {
        return Object.keys(object).length === 0;
    }
}
/*
const myToDoList = new TodoList();
myToDoList.create('Hello')
myToDoList.create('OK');
myToDoList.create('Ola');

console.log('myToDoList', myToDoList);
myToDoList.setComplete(1);
myToDoList.removeById(3);*/


module.exports = TodoList
