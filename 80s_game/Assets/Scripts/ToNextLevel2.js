#pragma strict

function Start () {
	
}

function Update () {
	
}

function OnTriggerEnter2D(other:Collider){

	if(other.gameObject.tag == "Player"){

		Application.LoadLevel("ToNextLevel2");
	}
}
