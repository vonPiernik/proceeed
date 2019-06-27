<?php

namespace app\controllers\api;

use yii\rest\ActiveController;

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
    
    public function actionIndex()
    {
        return null;
    }
}
