let Observable = function () {
    this.observers = [];
    this.count = 1;
    let list = '';
    this.subscribe = ({ name, place }) => {
        this.observers.push({ name, place, id: this.count++ });
    }
    this.unsubscribe = id => {
        this.observers = this.observers.filter(observer => observer.id !== id);
    }
    this.notify = data => {
        let myList = '<div><ul>';
        this.observers.forEach(observer => {
            myList += `<ul> User ${observer.name} notified by message : ${data} </ul>`;
            console.log(`User ${observer.id} notified by message : ${data}`);
        });
        myList += '</ul></div>';
        list += myList;
        document.getElementById("notifications").innerHTML = list;
    }
    this.getUsers = () => this.observers;
}

const obs = new Observable();
obs.subscribe({ name: 'LAKSHMIKANT', place: 'Bengaluru' });
obs.notify('Welcome...!!')

obs.subscribe({ name: 'Harry', place: 'Greater Bristol' });
obs.notify('Welcome to Group...!!')