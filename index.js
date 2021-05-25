
function Pokemon(pokeName, health, magic, sound){
    this.pokeName = pokeName;
    this.health = health;
    this.magic = magic;
    this.sound = sound
    this.skills = [];
    this.image = "";

    this.learnAttackSkill = function(newAttack){
        this.skills.push(newAttack)
    };

    this.showStatus = function(){
        console.log(`${this.pokeName}'s status \nHEALTH: ${this.health}  \nMAGIC: ${this.magic} \n`);
    };

    //### x-tra method
    this.showSkills = function(){
        const arrSkills = this.skills.map((item, index) => {
            return ` ${index}: ${item.attackName}`
        })
        console.log(`${this.pokeName}'s skills are ${arrSkills}`);
    }

    this.getMagic = function(amount){
        this.magic = this.magic + amount
        console.log(`you added ${amount} magic to ${this.pokeName} \n`);
    };

    this.attack = function(attackIndex, enemy){
        if (this.skills[attackIndex].useMagic > this.magic){
            console.log(`not enough magic, cannot launch attack! \n`);
        } else {
            enemy.health = enemy.health - this.skills[attackIndex].damage
            console.log(
            `${this.pokeName} launched skill ${this.skills[attackIndex].attackName} successfully! \n${enemy.pokeName} got ${this.skills[attackIndex].damage} damage \n`    
            )

            //### X-tra info 
            
            if(enemy.health <= 0) {
                console.log(`you defeted ${enemy.pokeName} \n`);
            };
        }
    }

    //## X-tra method
    this.getImage = function(image){
        this.magic = this.magic - 10
        if(this.magic <= 0) {
            console.log(`not enough magic to get image`);
        } else {
            this.image = image
            console.log(`** -10 magic ** \n${this.pokeName} got image...${this.sound} ${this.sound}\n ${image}`);
        }

        


    }
}

function AttackSkill(attackName, damage, useMagic){
    this.attackName = attackName;
    this.damage = damage;
    this.useMagic = useMagic;
}

let pikatchu = new Pokemon('pikatchu', 100, 140, "pika");
let jigglypuff = new Pokemon('jigglypuff', 60, 70 , "jiggy");


let lightning = new AttackSkill("lightning", 40, 30);
let sleep = new AttackSkill('sleep', 20, 10);
let superPow = new AttackSkill('superPow', 160, 200)
pikatchu.learnAttackSkill(lightning);
pikatchu.learnAttackSkill(sleep);
pikatchu.learnAttackSkill(superPow)
jigglypuff.learnAttackSkill(sleep)


// pikatchu.showStatus()
// jigglypuff.showStatus()
// pikatchu.getMagic(20)
// pikatchu.showStatus()

pikatchu.attack(1, jigglypuff)
// pikatchu.attack(2, jigglypuff)
// pikatchu.attack(1, jigglypuff)
// pikatchu.attack(1, jigglypuff)
// jigglypuff.showStatus()

// pikatchu.showSkills()

let imagePika = String.raw` 
quu..__
 $$$b  ---.__
  "$$b        --.                          ___.---uuudP
   $$b           .__.------.__     __.---'      $$$$"              .
     "$b          -'            -.-'            $$$"              .'|
       ".                                       d$"             _.'  |
         .   /                              ..."             .'     |
           ./                           ..::-'            _.'       |
            /                         .:::-'            .-'         .'
           :                          ::''\          _.'            |
          .' .-.             .-.           .      .'               |
          : /'$$|           .@"$\           .   .'              _.-'
         .'|$u$$|          |$$,$$|           |  <            _.-'
         | :$$:'          :$$$$$:           .  .       .-'
         :                  "--'             |    -.     \
        :##.       ==             .###.       .      .    \
        |##:                      :###:        |             
        |#'     ..'..'          ###'        x:      /     /
         \                                   xXX|     /    ./
          \                                xXXX'|    /   ./
          /-.                                  .  /   /
         :    -  ...........,                   | /  .'
         |         :::::::'       .            |<     .
         |                          |           x| \  .:  .
         |                         .'    /'   xXX|   : M M':.
         |    |                    ;    /:' xXXX'|  -'MMMMM:'
          .  .'                   :    /:'       |-'MMMM.-'
          |  |                   .'   /'        .'MMM.-'
           ' '                   :  ,'          |MMM<
            |                      '            |tbap\
             \                                  :MM.-'
              \                 |              .''
               \.                .            /
                /     .:::::::.. :           /
               |     .::::::::::: .         /
               |   .:::------------\       /
              /   .''               >::'  /
               ',:                 :    .'
                                    :.:'
`


let imageJigg = String.raw`
,..__
|  _  --._                                  _.--""".
|   |._    -.        __________         _.-'    ,|' |
|   |  .     -..--""_.        ""-..,-'      ,' |  |
L   |    .        ,-'                      _,'   |  |
 .  |     ,'     ,'            .           '.     |  |
 |  |   ,'      /               \            .   |  |
 |  . ,'      ,'                |              \ /  j
    "       ,                  '                  /
  ,         |                ,'                  '+
  /          |             _,'                     
 /     .-"""'L          ,-' \  ,-'""""-.           
j    ,' ,.+--.\        '    ',' ,.,-"--._.          \
|   / .'  L    .        _.'/ .'  |      \ \          .
j   | | --'     |+-----'  . j._,'       L |         |
|   L .          | |        | |            | |         |
|   \ \        / j         | |            | |         |
|     \ -.._,.- /           .          .'  '         |
l      -..__,.-'             .-.....-' _.'          '
'                               -.....--'            j
.                  -.....                            |
 L                  ---'                            '
  \                                                 /
    \                                        ,   ,'
    ..    |                        /      ,'   .
      . ._,                        |     ,'   .'
       .                           ._.-'  ,-'
  _,-""""-,                             _,'"-.._
,'          -.._                     ,-'        .
/             _,' "-..___     _,..--".            .
|         _,.-'            """'         -._          \
-....---'                                   -.._      |
                                                --...'
`
pikatchu.getImage(imagePika)
jigglypuff.getImage(imageJigg)