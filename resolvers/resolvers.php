<?php
namespace resolvers;

use Da\User\Model\User;

$userById = function ($id) {
    $genericObject = [];
    $genericObject['id'] = 1;
    $genericObject['username'] = 'test';
    $genericObject['email'] = 'norbini12@gmail.com';
    return [$genericObject];
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