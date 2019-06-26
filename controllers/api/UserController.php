<?php

namespace app\controllers\api;

use sizeg\jwt\Jwt;
use sizeg\jwt\JwtHttpBearerAuth;
use Yii;
use yii\rest\Controller;
use app\models\User;

class UserController extends Controller
{
    /**
     * @inheritdoc
     */
    public function behaviors()
    {
        $behaviors = parent::behaviors();
        $behaviors['authenticator'] = [
            'class' => JwtHttpBearerAuth::class,
            'optional' => [
                'login',
            ],
        ];

        return $behaviors;
    }

    /**
     * @return \yii\web\Response
     */
    public function actionLogin()
    {
        $req = Yii::$app->request->post();
        if(array_key_exists('username', $req)) $username = $req['username'];
        if(array_key_exists('password', $req)) $password = $req['password'];

        if($username && $password){
            $u = User::findOne(['username' => $username]);
            if(!$u) return;

            if(!Yii::$app->getSecurity()->validatePassword($password, $u->password_hash)){
                return;   
            }
        } else {
            return;
        }
        
        $signer = new \Lcobucci\JWT\Signer\Hmac\Sha256();
        /** @var Jwt $jwt */
        $jwt = Yii::$app->jwt;
        //TODO: ID tokena powinno być ustawiane dynamicznie?
        $token = $jwt->getBuilder()
            // ->setIssuer('http://example.com')// Configures the issuer (iss claim)
            // ->setAudience('http://example.org')// Configures the audience (aud claim)
            ->setId('4f1g23a12aa', true)// Configures the id (jti claim), replicating as a header item
            ->setIssuedAt(time())// Configures the time that the token was issue (iat claim)
            ->setExpiration(time() + 3600)// Configures the expiration time of the token (exp claim)
            ->set('uid', $u->id)// Configures a new claim, called "uid"
            ->sign($signer, $jwt->key)// creates a signature using [[Jwt::$key]]
            ->getToken(); // Retrieves the generated token

        return $this->asJson([
            'token' => (string)$token,
        ]);
    }

    /**
     * @return \yii\web\Response
     */
    public function actionData()
    {
        return $this->asJson([
            'success' => true,
        ]);
    }
}
