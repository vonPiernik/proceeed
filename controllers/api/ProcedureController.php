<?php

namespace app\controllers\api;

use yii\rest\ActiveController;
use sizeg\jwt\JwtHttpBearerAuth;
use app\models\Task;

class ProcedureController extends ActiveController
{
    public $modelClass = 'app\models\Procedure';

    /**
     * @inheritdoc
     */
    public function behaviors()
    {
        $behaviors = parent::behaviors();
        $behaviors['authenticator'] = [
            'class' => JwtHttpBearerAuth::class
        ];

        return $behaviors;
    }
	
	public function actions()
    {
		$actions = parent::actions();
		unset($actions['create']);
        return $actions;
    }
    
    public function actionCreate()
    {
        $data   = \Yii::$app->request->bodyParams;
        $user   = \Yii::$app->user->identity;

        // create procedure
        $procedure              = new $this->modelClass;
        $procedure->name        = $data['name'];
        $procedure->user_id     = $user->id;
        
        if($procedure->save()){
            $task   = null;
            $tasks  = $data['tasks'];
            foreach ($tasks as $taskData) {
                $previousTaskId = $task ? $task->id : null;
                
                $task                   = new Task;
                $task->procedure_id     = $procedure->id;
                $task->previous_task_id = $previousTaskId;
                $task->name             = $taskData['name'];
                $task->order            = $taskData['order'];
                
                $task->save();
            }

            return true;
        }
        
        return false;
    }
}
