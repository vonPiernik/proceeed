<?php

namespace app\controllers\api;

use yii\rest\ActiveController;
use sizeg\jwt\JwtHttpBearerAuth;

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
    
    public function actionCreate()
    {
        return 'create';
    }
}
