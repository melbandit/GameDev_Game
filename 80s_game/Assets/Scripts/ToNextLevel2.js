#pragma strict

public var level:int = 1;
//public var time:int = 180;
private var LC:LevelController;

function Start () {
	var levelControllerGameObject:GameObject = gameObject.Find("Level Controller Game Object"); //find the game object
	LC = levelControllerGameObject.GetComponent("LevelController");
}

function Update () {
	
}

function OnTriggerEnter2D(other:Collider2D){
	Debug.Log(level);
	if(other.gameObject.tag == "Player"){
		level++;
		Application.LoadLevel("Level" + level);
//		LC.changeTime(180);
	}
}
