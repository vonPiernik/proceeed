<?php
namespace resolvers;

use Da\User\Model\User;
use yii\helpers\ArrayHelper;

$userById = function ($id) {
    $user = User::findOne($id);
    $user = ArrayHelper::toArray($user, [
        'Da\User\Model\User' => [
            'id',
            'username',
            'email'
        ],
    ]);
    return [$user];
};

$userType = [
    'users' => function () {
        return User::find()->all();
    },
];

$queryType = [
    'users' => function ($root, $args) use ($userById) {
        $userId = $args['id'];
        if($userId){
            $users = $userById($userId);
        } else {
            $users = User::find()->all();
        }

        return $users;
    },
];


return [
    'User'     => $userType,
    'Query'    => $queryType
];