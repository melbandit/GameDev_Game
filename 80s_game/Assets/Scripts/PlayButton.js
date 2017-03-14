#pragma strict



function OnMouseDown () {
	Debug.Log("Clicking");
	var audio: AudioSource = GetComponent.<AudioSource>();
	audio.Play();
	Application.LoadLevel ("Level1");

}