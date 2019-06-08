<?php

namespace app\controllers;

use Da\User\Model\User;

use Siler\GraphQL;
use Siler\Http\Request;
use Siler\Http\Response;
use yii\web\Controller;

class ApiController extends Controller
{
    public $enableCsrfValidation = false;

    public function actionIndex()
    {
        return null;
    }
}
