#pragma strict

//start of model 
public var score:int = 0;
public var spawn:GameObject;
public var player:GameObject;
public var killbox:GameObject;
public var force:int = 0;
public var gui:GameObject;
public var health:int = 100;
public var lives:int = 3;

private var animController:Animator;

//end of model

function Start () {
	
}

function Update () {
	
}

function changeScore(points:int){
	score += points;

	//Debug.Log(gui);

	var guiScript:GuiView = gui.GetComponent("GuiView");

	guiScript.newScore(score);
}

function pushPlayer(direction:Vector2){
	var rb:Rigidbody2D = player.GetComponent("Rigidbody2D");
	rb.AddForce(direction * force);
	//player.GetComponent.<RigidBody2D>().AddForce(direction);
}

function hurtPlayer(damage:int){
	health -= damage;

	var guiScript:GuiView = gui.GetComponent("GuiView");
	guiScript.newHealth(health);

	if( health < 0){
		killPlayer();
	}
	//if(coins > 0){
	//tell the
//	if (health = 
	//take points away - 5pts
	//play hurt song
	//hit ="true"
	//make goodie move backwards a little
	//disable player movement, make invulnerable for a moment  }
	//else{die}
}

function killPlayer(){
	//animController.SetBool("alive", false);

	lives--;
	if (lives == 0) {
//		game over!
		Application.LoadLevel("main-menu");
	}

	var guiScript:GuiView = gui.GetComponent("GuiView");
	guiScript.newLessLives(lives);

	health = 100;
	guiScript.newHealth(health);

	player.transform.position = spawn.transform.position;
}