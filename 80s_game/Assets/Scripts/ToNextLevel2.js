#pragma strict

public var level:int = 1;
function Start () {
	
}

function Update () {
	
}

function OnTriggerEnter2D(other:Collider2D){
	Debug.Log(level);
	if(other.gameObject.tag == "Player"){
		level++;
		Application.LoadLevel("Level" + level);
	}
}
