
function Player(fullname,totalruns){
          this.fullname=fullname;
          this.totalruns=totalruns;
}

const Virat=new Player("Virat Kohli","47000");
const Rohit=new Player("Rohit Sharma","40000");
const Rishabh=new Player("Rishabh Pant","30000");
const Mahi=new Player("Mahendra Singh","50000");
Player.prototype.country="India";

console.log(`${Virat.fullname}, ${Virat.totalruns}, ${Virat.country}`);
console.log(`${Rohit.fullname}, ${Rohit.totalruns}, ${Rohit.country}`);
console.log(`${Rishabh.fullname}, ${Rishabh.totalruns}, ${Rishabh.country}`);
console.log(`${Mahi.fullname}, ${Mahi.totalruns}, ${Mahi.country}`);

const date=new Date;
console.log(date.getFullYear());