<?php

namespace app\controllers\api;

use yii\rest\ActiveController;

class TaskController extends ActiveController
{
    public $modelClass = 'app\models\Task';

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

    public function actionIndex()
    {
        return 'test';
    }
}
