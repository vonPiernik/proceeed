<?php

namespace app\controllers\api;

use yii\rest\ActiveController;

class ProcedureController extends ActiveController
{
    public $modelClass = 'app\models\Procedure';

    public function actionIndex()
    {
        return null;
    }
}
