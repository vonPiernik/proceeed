<?php

namespace app\models;

class User extends \Da\User\Model\User
{
    /**
     * {@inheritdoc}
     * @param \Lcobucci\JWT\Token $token
     */
    public static function findIdentityByAccessToken($token, $type = null)
    {
        $user = User::findOne( $token->getClaim('uid') );

        if($user) return $user;

        return null;
    }
}