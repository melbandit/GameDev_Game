#pragma strict

private var killed:boolean = false;

private var LC:LevelController;

function Start () {
	var levelControllerGameObject:GameObject = gameObject.Find("Level Controller Game Object"); //find the game object
	LC = levelControllerGameObject.GetComponent("LevelController"); //get script from level controller game object
	//Debug.Log(LC);
}

function Update () {
	
}

function OnTriggerEnter2D(other:Collider2D) {
	if(killed){
		return;
	}
	
	if(other.gameObject.tag == "Player"){// if hit by somthing other than the player, ignore
		killed = true;
		LC.killPlayer();
	}

	Debug.Log("died!");
}