var bg = document.querySelector("#box");
var plant = document.querySelector('#plant');
plant.health=100;
plant.range = 0;
var box = document.querySelector('#box');
plant.style.left=box.scrollWidth/2+'px';
plant.style.top=box.scrollHeight-plant.scrollHeight+'px';
var Attack_flag = 0;
var num = 100;
var planthealth = document.querySelector("#health");
//背景移动
setInterval(()=>{
    num--;
    bg.style.backgroundPosition=`50% ${num}%`;
    if(num===0){
        nub=100;
    }
},50);
document.addEventListener("keydown",function (){
    plantmove();
})
//怒气触发
var plant_range_flag=0;
document.addEventListener("keydown",function (){
    if(event.keyCode === 75 && plant.range>=20){
        var attacks = document.querySelectorAll('.bossAttack1'); 
        for(var i=0;i<attacks.length;i++){
           var attack = attacks[i];
           attack.remove();
        }
        plant_range_flag=1;
        plant.range=0;
        range();
        setTimeout(()=>{
            plant_range_flag=0;
        },5000);
    }
})
//怒气技能
function range(){
    var r1=setInterval(()=>{
        CreateAttack(0,4);
    },100);
    setTimeout(()=>{
        clearInterval(r1);
    },1000);

}
//飞机移动
function plantmove(){
    //向左移动
    if(event.keyCode === 65 && parseInt(plant.style.left)>0){
        plant.style.left = parseInt(plant.style.left)-10+'px';
    }
    // /向右移动
    if(event.keyCode === 68 && parseInt(plant.style.left)<box.scrollWidth-plant.scrollWidth){
        plant.style.left = parseInt(plant.style.left)+10+'px';
    }
    //向上移动
    if(event.keyCode === 87 && parseInt(plant.style.top)>0){
        plant.style.top = parseInt(plant.style.top)-10+'px';
    }
    //向下移动
    if(event.keyCode === 83 && parseInt(plant.style.top)<box.scrollHeight-plant.scrollHeight){
        plant.style.top = parseInt(plant.style.top)+10+'px';
    }
}
//子弹创建
function CreateAttack(x,y){
    var obj = {
        id:'Attack',
        index:1,
    };
    var Attack= document.createElement('p');
    Attack.id = obj.id+obj.index;
    obj.index++;
    Attack.style.width='10px';
    Attack.style.height='10px';
    Attack.style.position='absolute';
    Attack.style.left=parseInt(plant.style.left)+plant.scrollWidth/2+'px';
    Attack.style.top=parseInt(plant.style.top)+'px';
    Attack.style.backgroundColor='blue';
    Attack.style.borderRadius='5px'
    Attack.className='Attack';
    box.appendChild(Attack);
    var x = x;
    var y= y;
    moveAttack(x,y);
}

//子弹移动 

function moveAttack(x,y){
   var attacks = document.querySelectorAll('.Attack'); 
        for(var i=0;i<attacks.length;i++){
            ((i)=>{
                var attack = attacks[i];
                attack.className='Attack1';
               let a1= setInterval(()=>{
                    attack.style.top = parseFloat(attack.style.top)-y+'px';
                    attack.style.left= parseFloat(attack.style.left)+x+'px'
                    if(parseInt(attack.style.top)<0||(parseInt(attack.style.width)<0||parseInt(attack.style.width)>box.scrollWidth)){
                        attack.remove()
                    }
                },10);
                setTimeout(()=>{
                    clearInterval(a1);
                },5000)
            })(i)
        }
}
//敌人创建
function createmob(){
    var obj = {
        id: 'mob',
        index:1,
        Heath: 3,
    };
            var mob = document.createElement('p');
            mob.id= obj.id+obj.index;
            obj.index++;
            mob.style.position='absolute';
            mob.style.top='0%'
            mob.heath=3;
            mob.innerHTML='<div class="mobbar"><div class="mobbar1" style="width: 100px;"></div></div><img src="https://image.mc9y.com/2022/05/26/9b4000086b02d.jpeg" width="100">';
            mob.style.left=Math.floor(Math.random()*90)+'%';
            mob.className='mob';
            box.appendChild(mob);
            mobAI();
}

//敌人ai
function mobAI(){
    var mobs = document.querySelectorAll(".mob");
    for(var i=0;i<mobs.length;i++){
        (function(i){
            var mob=mobs[i];
            mob.className="mob1";
            setInterval(()=>{
                var random = Math.floor(Math.random()*5);
                switch(random){
                    case 1:
                        if(parseInt(mob.style.top)<80){
                            mob.style.top=parseInt(mob.style.top)+1+'%';
                        }
                        break;
                    case 2:
                        if(parseInt(mob.style.left)<80){
                            mob.style.left=parseInt(mob.style.left)+1+'%';
                        }
                        break;
                    case 3:
                        if(parseInt(mob.style.left)>1){
                            mob.style.left=parseInt(mob.style.left)-1+'%';
                        }
                        break;
                    case 4:
                        if(parseInt(mob.style.top)>1){
                            mob.style.top=parseInt(mob.style.top)-1+'%';
                        }
                        break;
                }
            },100);
        })(i)
    }
}
var mob_num=0;
//攻击敌人
function DamageMob(){
    var mobs = document.querySelectorAll(".mob1");
    for(var i=0;i<mobs.length;i++){
        (function(i){
            var mob = mobs[i];
            var Attacks= document.querySelectorAll(".Attack1");
            for(var i=0;i<Attacks.length;i++){
                (function(i){
                    var Attack = Attacks[i];
                    if(Attack.offsetLeft>mob.offsetLeft&&Attack.offsetLeft<mob.offsetLeft+mob.scrollWidth){
                        if(Attack.offsetTop>mob.offsetTop&&Attack.offsetTop<mob.offsetTop+mob.scrollHeight){
                            Attack.remove();
                            //怒气增加
                            if(plant.range<20){
                                if(plant_range_flag==0){
                                    plant.range+=1;
                                }
                                var plantrange=document.querySelector('#range');
                                var range=plantrange.querySelector('p');
                                range.style.width=plant.range*10+'px';   
                            }
                            mob.heath-=1;
                            if(mob.id==='boss_first'){
                                bossmobbar(mob);
                                console.log(mob.heath);
                            }else{
                                mobbar(mob);
                            }
                            if(mob.heath<1){
                                if(mob.id==='boss_first'){
                                    end1();
                                    console.log(游戏结束);
                                }
                                mob.remove();
                            }
                                
                        }
                    }
                    
                })(i)
            }
        })(i)
    }
}
//怪物血条变化
function mobbar(mob){
    var bar = mob.querySelector('.mobbar').querySelector('.mobbar1');
    bar.style.width=parseInt(bar.style.width)-33+'px';
}
setInterval(()=>{
    DamageMob();
    Damageplayer();
    Damageplayer1();
},10);

//创建怪物攻击
function createmobAttack(mob){
        var mobAttack = document.createElement('p');
        mobAttack.style.width='10px';
        mobAttack.style.height='10px';
        mobAttack.style.position='absolute';
        mobAttack.style.backgroundColor='red';
        mobAttack.style.borderRadius='5px';
        mobAttack.style.top=parseInt(mob.style.top)+mob.scrollHeight+'px';
        mobAttack.style.left=parseInt(mob.style.left)+10+'%';
        mobAttack.className='mobAttack';
        box.appendChild(mobAttack);
}
//怪物攻击移动
function movemobAttack(){
    var attacks = document.querySelectorAll('.mobAttack'); 
         for(var i=0;i<attacks.length;i++){
             (function(i){
                 var attack = attacks[i];
                 attack.className='mobAttack1';
                let a1=setInterval(()=>{
                     attack.style.top = parseInt(attack.style.top)+2+'px';
                     if(parseInt(attack.style.top)>650){
                         attack.remove();
                     }
                 },10);
                 setTimeout(()=>{
                    clearInterval(a1);
                },5000)
             })(i)
         }
 }
 //怪物子弹发射
 mobAttack();
 function mobAttack(){
     setInterval(()=>{
        var mobs = document.querySelectorAll('.mob1');
        for(var i=0;i<mobs.length;i++){
        (function(i){
            var mob = mobs[i];
            var random = Math.floor(Math.random()*3000);
            setTimeout(()=>{
                createmobAttack(mob);
            movemobAttack();
            },random);
        })(i)
    }
     },3000);
    
 }
 //子弹命中玩家
 function Damageplayer(){
     var mobAttacks=document.querySelectorAll('.mobAttack1');
     for(var i=0;i<mobAttacks.length;i++){
         (function(i){
             var mobAttack = mobAttacks[i];
             if(mobAttack.offsetLeft>plant.offsetLeft&&mobAttack.offsetLeft<plant.offsetLeft+plant.scrollWidth){
                 if(mobAttack.offsetTop>plant.offsetTop&&mobAttack.offsetTop<plant.offsetTop+plant.scrollHeight){
                    mobAttack.remove();
                    plant.health-=2;
                    var health=planthealth.querySelector('p');
                    health.style.width=plant.health*2+'px';
                    if(plant.health<1){
                        end();
                        plant.remove()
                    }
                 }
             }
         })(i)
     }
 }


 