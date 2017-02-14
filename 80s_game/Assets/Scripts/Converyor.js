#pragma strict

public var active:boolean = false;

function Start () {
	
}

function Update () {
	
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
