#pragma strict

public var player:GameObject;

function OnTriggerEnter2D(player:Collider2D){
	if(player.gameObject.tag == "Player"){
	 Debug.Log("Boing!!");
	 var audio: AudioSource = GetComponent.<AudioSource>();
	 audio.Play();

	}
}
