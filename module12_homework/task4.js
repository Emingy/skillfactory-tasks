var totalConsumption = 0;

function Device (name, power, status, amount){
  this.name = name
  this.power = power
  this.status = status
  this.amount = amount
}

const comp = new Device ('Компьютер', 600, 'on', 1)
const kettle = new Device ('Чайник', 1500, 'off', 1)
const lamp = new Device ('Светильник', 10, 'on', 5)

Device.prototype.getConsumption = function(){
  if(this.status=='on'){
    totalConsumption += this.power*this.amount
  }
}

comp.getConsumption()
kettle.getConsumption()
lamp.getConsumption()

console.log(`общее потребление: ${totalConsumption}`)