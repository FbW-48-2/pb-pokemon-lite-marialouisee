function Pokemon(pokeName, health, magic){
    this.pokeName = pokeName;
    this.health = health;
    this.magic = magic;
    this.skills = [];

    this.learnAttackSkill = function(newAttack){
        this.skills.push(newAttack)
    };

    this.showStatus = function(){
        console.log(`${this.pokeName}'s status \nHEALTH: ${this.health}  \nMAGIC: ${this.magic} \n`);
    };

    this.showSkills = function(){
        const arrSkills = this.skills.map((item, index) => {
            return ` ${index}: ${item.attackName}`
        })
        console.log(`${this.pokeName}'s skills are ${arrSkills}`);
    }

    this.getMagic = function(amount){
        this.magic = this.magic + amount
    };

    this.attack = function(attackIndex, enemy){
        if (this.skills[attackIndex].useMagic > this.magic){
            console.log(`not enough magic, cannot launch attack!`);
        } else {
            enemy.health = enemy.health - this.skills[attackIndex].damage
            console.log(
            `${this.pokeName} launched skill ${this.skills[attackIndex].attackName} successfully! \n${enemy.pokeName} got ${this.skills[attackIndex].damage} damage \n`    
            )
            
            if(enemy.health <= 0) {
                console.log(`you defeted ${enemy.pokeName} \n`);
            };
        }
    }
}

function AttackSkill(attackName, damage, useMagic){
    this.attackName = attackName;
    this.damage = damage;
    this.useMagic = useMagic;
}

let pikapu = new Pokemon('pikapu', 100, 140);
let honkidonki = new Pokemon('honkidonki', 60, 70);


let lightning = new AttackSkill("lightning", 40, 30);
let sleep = new AttackSkill('sleep', 20, 10);
let superPow = new AttackSkill('superPow', 160, 200)
pikapu.learnAttackSkill(lightning);
pikapu.learnAttackSkill(sleep);
pikapu.learnAttackSkill(superPow)
honkidonki.learnAttackSkill(sleep)

// console.log(pikapu);
// console.log(honkidonki);
pikapu.showStatus()
honkidonki.showStatus()
// pikapu.getMagic(20)
// pikapu.showStatus()

pikapu.attack(1, honkidonki)
pikapu.attack(1, honkidonki)
pikapu.attack(1, honkidonki)
honkidonki.showStatus()

pikapu.showSkills()