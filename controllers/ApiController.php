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
        return var_dump( User::find()->all() );
    }

    public function actionGraphql()
    {
        // Respond only for POST requests
        if (Request\method_is('post')) {
            // Retrive the Schema
            $schema = include __DIR__.'/../schemas/schema.php';

            // Give it to siler
            GraphQL\init($schema);
        }
    }
}
