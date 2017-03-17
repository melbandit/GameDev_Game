#pragma strict

public var scoreText:UI.Text;
public var timeText:UI.Text;
public var healthAmount:UI.Image;
public var livesText:UI.Text;
private var LC:LevelController;



// Time.time current time since game started in seconds

function Start () {
	scoreText.text = "0";

//	Debug.Log(Time.time);

//	Debug.Log(gameDuration);

}

function Update () {



}

function newScore (score:int){
//	Debug.Log("new score");
	scoreText.text = score.ToString();
	
}

function newHealth (health:int){
	var convertedHealth:float;
	convertedHealth = health * 0.01;
	Debug.Log("new health is" + health);
	Debug.Log("new convertedHealth is" + convertedHealth);
	healthAmount.fillAmount = convertedHealth;
}


function newLessLives (lives:int){
//	Debug.Log("new lives are" + lives);
	livesText.text = lives.ToString();
	
}

function newTime (time:int){
	Debug.Log(time);
	timeText.text = time.ToString();
}
