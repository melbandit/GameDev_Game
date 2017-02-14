#pragma strict

public var active:boolean = false;
private var LC:LevelController; //anything that need to talk to anything else use LC

public var xSpeed:Number = 0;
public var ySpeed:Number = 0;

function Start () {
	var levelControllerGameObject:GameObject = gameObject.Find("Level Controller Game Object"); //find the game object
	LC = levelControllerGameObject.GetComponent("LevelController"); //get script from level controller game object
	//Debug.Log(LC);
}

function Update () {
	if(active){
		//LC.pushPlayer(Vector2.left);  //vector 2 is just x and y
		LC.pushPlayer(Vector2(xSpeed, ySpeed));
	}
}

function OnTriggerEnter2D(other:Collider2D) {

	if(other.gameObject.tag != "Player"){// if hit by somthing other than the player, ignore
		return;
	}
	active = true;
	Debug.Log("player in");
}

function OnTriggerExit2D(other:Collider2D) {

	if(other.gameObject.tag != "Player"){// if hit by somthing other than the player, ignore
		return;
	}
	active = false;
	Debug.Log("player out");
}
