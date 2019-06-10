<?php

namespace app\controllers\api;

use yii\rest\ActiveController;

class TaskController extends ActiveController
{
    public $modelClass = 'app\models\Task';

    public function actionIndex()
    {
        return null;
    }
}
