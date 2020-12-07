var totalConsumption = 0;

class Device {
  constructor(name, power, status, amount){
    this.name = name
    this.power = power
    this.status = status || 'off'
    this.amount = amount || 1
  }
  getConsumption(){
    if(this.status=='on'){
      totalConsumption += this.power*this.amount
    }
  }
}
const comp = new Device ('Компьютер', 600, 'on')
const kettle = new Device ('Чайник', 1500)
const lamp = new Device ('Светильник', 10, 'on', 5)

comp.getConsumption()
kettle.getConsumption()
lamp.getConsumption()

console.log(`общее потребление: ${totalConsumption}`)