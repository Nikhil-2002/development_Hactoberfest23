const ATTACK_DAMAGE=10;
const MONSTER_ATTACK_DAMAGE=14;
const STRONG_ATTACK_DAMAGE=17;
const HEAL_VALUE=20;
let battleLog=[];

function getMaxLife(){
	const enteredValue=prompt("enter max life",'100');
	let parseValue=parseInt(enteredValue);
	if(isNaN(parseValue)|| parseValue<=0){
	throw {message:"ENter value is not a number"};
	}
	return parseValue;
}
let choosenMaxLife;
try{
	choosenMaxLife=getMaxLife();
}
catch(error){
	console.log(error);
	choosenMaxLife=100;
	alert('you entered something wrong');
}


let currentPlayerLife=choosenMaxLife;
let currentMonsterLife=choosenMaxLife;
let bonusLife=true;

adjustHealthBars(choosenMaxLife);

attackBtn.addEventListener('click',attackHandler);
strongAttackBtn.addEventListener('click',StrongAttackHandler);
healBtn.addEventListener('click',healPlayerHandler);
logBtn.addEventListener('click',logHandler)

function attackHandler(){
	attackMonster('ATTACK');
}

function StrongAttackHandler(){
	attackMonster('STRONG_ATTACK');
}
function attackMonster(mode){
	let maxDamage;
	if(mode=='ATTACK'){
		maxDamage=ATTACK_DAMAGE;
	}
	else{
		maxDamage=STRONG_ATTACK_DAMAGE;
	}
	const damage=dealMonsterDamage(maxDamage);
	currentMonsterLife-=damage;
	writeToLog(mode,damage);
	if(currentMonsterLife<=0){
		alert("you won");
		writeToLog("Player won",damage);
		reset();
		return;		
	}
	monsterAttack();
}
function monsterAttack(){
	let initialHealth=currentPlayerLife;
	const playerDamage=dealPlayerDamage(MONSTER_ATTACK_DAMAGE);
	currentPlayerLife-=playerDamage;
	writeToLog("Monster Attack",playerDamage);
	if(currentPlayerLife<=0 && bonusLife)
	{
		bonusLife=false;
		alert('bonus life saved you');
		removeBonusLife();
		currentPlayerLife=initialHealth;
		setPlayerHealth(initialHealth);
	}
	if(currentPlayerLife<=0){
		alert("Monster won");
		writeToLog("monster won",playerDamage);
		reset();
	}
}
function healPlayerHandler(){
	let healValue;
	if(currentPlayerLife==choosenMaxLife){
		alert("can't heal health is already full");
		return;
	}
	else if(currentPlayerLife>=choosenMaxLife-HEAL_VALUE){
		healValue=choosenMaxLife- currentPlayerLife;
	}
	else{
		healValue=HEAL_VALUE;
	}
	currentPlayerLife+=healValue;
	increasePlayerHealth(healValue)
	writeToLog("player heal",healValue)
	monsterAttack();
}

function reset() {
	currentPlayerLife=choosenMaxLife;
	currentMonsterLife=choosenMaxLife;
	resetGame(choosenMaxLife);
}
function writeToLog(ev,value){
	let logentry={};
	if (ev=="Player won"){
		logentry.result="Player won";
	}
	else if(ev=="monster won"){
		logentry.result="Monster won";
	}
	else{
	logentry={
		event:ev,
		playerHealth:currentPlayerLife,
		monsterHealth:currentMonsterLife,
		Value:value
		};
	}
	battleLog.push(logentry);
}
function logHandler(){
	console.log(battleLog);
}