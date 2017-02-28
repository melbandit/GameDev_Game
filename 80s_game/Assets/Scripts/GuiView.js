﻿#pragma strict

public var scoreText:UI.Text;
public var timeText:UI.Text;

private var gameDuration:int = 180;

// Time.time current time since game started in seconds

function Start () {
	scoreText.text = "0";

	Debug.Log(Time.time);

	Debug.Log(gameDuration);

}

function Update () {

	var updateTime:int = gameDuration - Time.time;

//	Debug.Log(updateTime);

	timeText.text = updateTime.ToString();

}

function newScore (score:int){
	Debug.Log("new score");
	scoreText.text = score.ToString();
	
}

function newHealth (health:int){
	Debug.Log("new health is" + health);
//	scoreText.text = score.ToString();
	
}
